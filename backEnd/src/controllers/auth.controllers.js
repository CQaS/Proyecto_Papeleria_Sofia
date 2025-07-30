import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import USUARIOS_SERVICES from "../services/usuarios_services.js";
import { LoginSchema } from "../schemas/login.schema.js";

export const login = async (req, res) => {
  try {
    const parsed = LoginSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        message: "Error de validación de datos",
        error: parsed.error.errors,
      });
    }

    const { email, password } = parsed.data;

    const usuario = await USUARIOS_SERVICES.UsuarioPorEmailTelefono(
      email,
      "0" 
    );

    console.log("Usuario encontrado:", usuario)

    if (!usuario || usuario.estado !== "ACTIVO" || usuario.rol !== "ADMIN") {
      return res.status(401).json({
        success: false,
        message: "Credenciales inválidas o usuario inactivo",
      });
    }

    const passwordValido = await bcrypt.compare(password, usuario.password);
    if (!passwordValido) {
      return res.status(401).json({
        success: false,
        message: "Email o contraseña incorrectos",
      });
    }

    const token = jwt.sign(
      {
        id: usuario.id,
        rol: usuario.rol,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    // No enviamos la contraseña
    const { password: _, ...usuarioSinPassword } = usuario;

    return res.status(200).json({
      success: true,
      message: "Login exitoso",
      token,
      data: usuarioSinPassword,
    })
    
  } catch (error) {
    console.error("Error en login:", error);
    return res.status(500).json({
      success: false,
      message: "Error interno del servidor",
      error: error.message,
    });
  }
};

export const registro = async (req, res) => {
  try {
    const { nombre, apellido, email, password, telefono, direccion } = req.body;

    const nuevoUsuario = await USUARIOS_SERVICES.UsuarioCrear({
      nombre,
      apellido,
      email,
      password,
      telefono,
      direccion,
      rol: "ADMIN",
    });

    res.status(201).json({
      success: true,
      message: "Usuario administrador creado exitosamente",
      data: nuevoUsuario,
    });
  } catch (error) {
    console.error(error);

    if (error.name === "ZodError") {
      return res.status(400).json({
        success: false,
        message: "Error de validación de datos",
        error: error.errors,
      });
    }

    if (error.code === "P2002" && error.meta?.target?.includes("email")) {
      return res.status(400).json({
        success: false,
        message: "Ya existe un usuario con ese email",
      });
    }

    res.status(500).json({
      success: false,
      message: "Error interno del servidor",
      error: error.message,
    });
  }
};
