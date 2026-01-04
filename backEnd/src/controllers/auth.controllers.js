import bcrypt from "bcryptjs"
import crypto from "crypto"
import jwt from "jsonwebtoken"
import logger from "../utils/logger.js"
import USUARIOS_SERVICES from "../services/usuarios_services.js"
import {
  LoginSchema
} from "../schemas/login.schema.js"

export const login = async (req, res) => {
  try {
    const parsed = LoginSchema.safeParse(req.body)
    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        message: "Error de validación de datos",
        error: parsed.error.errors,
      })
    }

    const {
      email,
      password
    } = parsed.data

    const usuario = await USUARIOS_SERVICES.UsuarioPorEmailTelefono(
      email,
      "0"
    )

    if (!usuario || usuario.estado !== "ACTIVO" || usuario.rol !== "ADMIN") {
      return res.status(401).json({
        success: false,
        message: "Credenciales inválidas o usuario inactivo",
      })
    }
    
    const passwordValido = await bcrypt.compare(password, usuario.password)
    if (!passwordValido) {
      return res.status(200).json({
        success: false,
        message: "Email o contraseña incorrectos",
      })
    }
    
    logger.info("Usuario encontrado ID:" + usuario.id)
    const accessToken = jwt.sign({
        id: usuario.id,
        rol: usuario.rol,
        nombre: usuario.nombre,
      },
      process.env.JWT_SECRET, {
        expiresIn: "15min",
      }
    )

    //Generar Refresh Token aleatorio(64 bytes→ 128 caracteres hex)
    const refreshToken = crypto.randomBytes(64).toString("hex")

    const hashRefreshToken = await bcrypt.hash(refreshToken, 10)

    await USUARIOS_SERVICES.crearRefreshToken(hashRefreshToken, usuario.id)

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: "/"
    })

    // No enviamos la contraseña
    const {
      password: _,
      ...usuarioSinPassword
    } = usuario

    return res.status(200).json({
      success: true,
      message: "Login exitoso",
      accessToken,
      user: usuarioSinPassword,
    })

  } catch (error) {
    console.error("Error en login:", error)
    return res.status(500).json({
      success: false,
      message: "Error interno del servidor",
      error: error.message,
    })
  }
}

export const logout = async (req, res) => {
  try {
    res.cookie('refreshToken', 'logged_out', {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: 'strict',
      expires: new Date(0), // Establece la fecha de expiración en el pasado
    });

    return res.status(200).json({
      success: true,
      message: "Sesión cerrada con éxito"
    });

  } catch (error) {
    console.error("Error en logout:", error)
    return res.status(500).json({
      success: false,
      message: "Error interno del servidor",
      error: error.message,
    })
  }
}

export const registro = async (req, res) => {
  try {
    const {
      nombre,
      apellido,
      email,
      password,
      telefono,
      direccion
    } = req.body

    const nuevoUsuario = await USUARIOS_SERVICES.UsuarioCrear({
      nombre,
      apellido,
      email,
      password,
      telefono,
      direccion,
      rol: "ADMIN",
    })

    res.status(201).json({
      success: true,
      message: "Usuario administrador creado exitosamente",
      data: nuevoUsuario,
    })
  } catch (error) {
    console.error(error)

    if (error.name === "ZodError") {
      return res.status(400).json({
        success: false,
        message: "Error de validación de datos",
        error: error.errors,
      })
    }

    if (error.code === "P2002" && error.meta?.target?.includes("email")) {
      return res.status(400).json({
        success: false,
        message: "Ya existe un usuario con ese email",
      })
    }

    res.status(500).json({
      success: false,
      message: "Error interno del servidor",
      error: error.message,
    })
  }
}

export const refresh = async (req, res) => {
  const refreshTokenPlain = req.cookies?.refreshToken

  if (!refreshTokenPlain) {
    return res.status(401).json({
      success: false,
      message: "Refresh token requerido"
    })
  }

  const tokensDB = await USUARIOS_SERVICES.refreshToken()

  const tokenDB = tokensDB.find((t) => bcrypt.compareSync(refreshTokenPlain, t.token));

  if (!tokenDB) {
    return res.status(403).json({
      success: false,
      message: "Refresh token inválido o expirado"
    });
  }

  // Generar nuevo access token
  const newAccessToken = jwt.sign({
      id: tokenDB.usuario.id,
      rol: tokenDB.usuario.rol,
      nombre: tokenDB.usuario.nombre
    },
    process.env.JWT_SECRET, {
      expiresIn: "15m"
    }
  )

  res.json({
    success: true,
    accessToken: newAccessToken
  })
}