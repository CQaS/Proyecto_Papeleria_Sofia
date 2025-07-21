// middlewares/auth.js
import jwt from "jsonwebtoken"

export const verificarToken = (req, res, next) => {
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1]

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Token no proporcionado"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.usuario = decoded 
        next()
    } catch (error) {
        return res.status(403).json({
            success: false,
            message: "Token inválido o expirado"
        })
    }
}

export const soloAdmin = (req, res, next) => {
    if (req.usuario?.rol !== "ADMIN") {
        return res.status(403).json({
            success: false,
            message: "Acceso denegado. Solo administradores"
        })
    }
    next()
}
