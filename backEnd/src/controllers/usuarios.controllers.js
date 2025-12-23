import logger from "../utils/logger.js"
import USUARIOS_SERVICES from "../services/usuarios_services.js"
const {
    listarUsuarios,
    UsuarioPorId,
    UsuarioCrear,
    UsuarioActualizar,
    UsuarioEliminar
} = USUARIOS_SERVICES

/** * Controlador para listar todos los usuarios.
 * @param {Object} req - La solicitud HTTP
 * @param {Object} res - La respuesta HTTP
 * @returns {Promise<void>} Respuesta con la lista de usuarios o un error.
 */

export const usuarios_lista = async (req, res) => {
    try {
        const _listar_U = await listarUsuarios()
        logger.info(_listar_U)
        res.status(200).json({
            success: true,
            message: "Usuarios listados exitosamente",
            data: _listar_U
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: "Ocurrió un error inesperado en el servidor.",
            error: error.message || "Error interno del servidor"
        })

    }
}

/** * Controlador para obtener la cantidad de usuarios.
 * @param {Object} req - La solicitud HTTP.
 * @param {Object} res - La respuesta HTTP.
 * @returns {Promise<void>} Respuesta con la cantidad de usuarios o un error.
 */

export const length = async (req, res) => {
    try {
        const len = await USUARIOS_SERVICES._length()
        logger.info(len)
        res.status(200).json({
            success: true,
            message: "Cantidad de usuarios",
            len
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: "Ocurrió un error inesperado en el servidor.",
            error: error.message || "Error interno del servidor"
        })

    }
}

/** * Controlador para crear un nuevo usuario.
 * @param {Object} req - La solicitud HTTP.
 * @param {Object} res - La respuesta HTTP.
 * @returns {Promise<void>} Respuesta con el usuario creado o un error.
 */

export const usuarios_crear = async (req, res) => {
    try {
        const usuario = await UsuarioCrear(req.body)

        res.status(201).json({
            success: true,
            message: "Usuario creado exitosamente",
            data: usuario
        })

    } catch (error) {
        console.error(error)

        if (error.name === "ZodError") {
            return res.status(400).json({
                success: false,
                message: "Error de validación de datos",
                error: error.errors
            })
        }

        if (error.code === "P2002" && error.meta?.target?.includes("email")) {
            return res.status(409).json({
                success: false,
                message: "El email ya está registrado. Por favor, intenta con otro.",
                error: "Conflicto de recurso: email duplicado"
            })
        }

        res.status(500).json({
            success: false,
            message: "Ocurrió un error inesperado en el servidor.",
            error: error.message || "Error interno del servidor"
        })
    }
}

/** * Controlador para actualizar un usuario.
 * @param {Object} req - La solicitud HTTP.
 * @param {Object} res - La respuesta HTTP.
 * @returns {Promise<void>} Respuesta con el usuario actualizado o un error.
 */

export const usuarios_actualizar = async (req, res) => {
    const {
        id
    } = req.params

    try {
        const usuarioActualizado = await UsuarioActualizar(id, req.body)

        res.status(200).json({
            success: true,
            message: "Usuario actualizado exitosamente",
            data: usuarioActualizado,
        })

    } catch (error) {
        if (error.name === "ZodError") {
            return res.status(400).json({
                success: false,
                message: "Error de validación de datos",
                error: error.errors,
            })
        }

        if (error.code === "P2025") {
            return res.status(404).json({
                success: false,
                message: "Usuario no encontrado",
            })
        }

        console.error("Error al actualizar usuario:", error)
        res.status(500).json({
            success: false,
            message: "Error inesperado al actualizar el usuario",
            error: error.message,
        })
    }
}

/** * Controlador para eliminar un usuario.
 * @param {Object} req - La solicitud HTTP.
 * @param {Object} res - La respuesta HTTP.
 * @returns {Promise<void>} Respuesta con el usuario eliminado o un error.
 */

export const usuarios_eliminar = async (req, res) => {
    const {
        id
    } = req.params

    try {
        const usuario = await UsuarioEliminar(id)

        res.status(200).json({
            success: true,
            message: "Usuario eliminado",
            data: usuario,
        })

    } catch (error) {
        if (error.code === "P2025") {
            return res.status(404).json({
                success: false,
                message: "Usuario no encontrado",
            })
        }

        console.error("Error al eliminar usuario:", error)
        res.status(500).json({
            success: false,
            message: "Error inesperado al eliminar el usuario",
            error: error.message,
        })
    }
}

/** * Controlador para buscar un usuario por ID.
 * @param {Object} req - La solicitud HTTP.
 * @param {Object} res - La respuesta HTTP.
 * @returns {Promise<void>} Respuesta con el usuario encontrado o un error.
 */

export const usuarios_PorId = async (req, res) => {
    const {
        id
    } = req.params

    try {
        const usuario = await UsuarioPorId(id)

        if (!usuario) {
            return res.status(404).json({
                success: false,
                message: "Usuario no encontrado",
            })
        }

        res.status(200).json({
            success: true,
            message: "Usuario encontrado",
            data: usuario,
        })

    } catch (error) {
        console.error("Error al buscar usuario:", error)
        res.status(500).json({
            success: false,
            message: "Error inesperado al buscar el usuario",
            error: error.message,
        })
    }
}