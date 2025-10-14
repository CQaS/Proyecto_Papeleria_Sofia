import {
    Prisma
} from "@prisma/client"
import logger from "../utils/logger.js"
import CONSULTAS_SERVICES from "../services/consultas.services.js";

/** * Controlador para listar todas las consultas.
 * @param {Object} req - La solicitud HTTP
 * @param {Object} res - La respuesta HTTP
 * @returns {Promise<void>} Respuesta con la lista de consultas o un error.
 */

export const consulta_lista = async (req, res) => {
    try {
        const _listar_C = await CONSULTAS_SERVICES.listarConsultas()
        logger.info(_listar_C)
        res.status(200).json({
            success: true,
            message: "Consultas listadas exitosamente",
            data: _listar_C
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

/** * Controlador para crear una nueva consulta.
 * @param {Object} req - La solicitud HTTP.
 * @param {Object} res - La respuesta HTTP.
 * @returns {Promise<void>} Respuesta con la consulta creada o un error.
 */

export const consulta_crear = async (req, res) => {
    try {
        const _crear_C = await CONSULTAS_SERVICES.crearConsulta(req.body)
        logger.info(_crear_C)
        res.status(201).json({
            success: true,
            message: "Consulta creada exitosamente",
            data: _crear_C
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

/** * Controlador para marcar una consulta como leída.
 * @param {Object} req - La solicitud HTTP.
 * @param {Object} res - La respuesta HTTP.
 * @returns {Promise<void>} Respuesta con la consulta actualizada o un error.
 */

export const consulta_leida = async (req, res) => {
    try {
        const id = req.params.id
        const _marcar_leida = await CONSULTAS_SERVICES.marcarConsultaLeida(id)

        res.status(200).json({
            success: true,
            message: "Consulta marcada como leída exitosamente",
            data: _marcar_leida
        })

    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
            return res.status(404).json({
                success: false,
                message: `Consulta con ID ${req.params.id} no encontrada`
            })
        }

        console.error("Error al marcar como leída:", error)

        res.status(500).json({
            success: false,
            message: "Ocurrió un error inesperado en el servidor.",
            error: error.message
        })
    }
}

/** * Controlador para marcar una consulta como resuelta.
 * @param {Object} req - La solicitud HTTP.
 * @param {Object} res - La respuesta HTTP.
 * @returns {Promise<void>} Respuesta con la consulta actualizada o un error.
 */

export const consulta_resuelta = async (req, res) => {
    try {
        const id = req.params.id
        const _marcar_resuelta = await CONSULTAS_SERVICES.marcarConsultaResuelta(id)

        res.status(200).json({
            success: true,
            message: "Consulta marcada como resuelta exitosamente",
            data: _marcar_resuelta
        })

    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
            return res.status(404).json({
                success: false,
                message: `Consulta con ID ${req.params.id} no encontrada`
            })
        }

        console.error("Error al marcar como resuelta:", error)

        res.status(500).json({
            success: false,
            message: "Ocurrió un error inesperado en el servidor.",
            error: error.message
        })
    }
}

/** * Controlador para responder a una consulta.
 * @param {Object} req - La solicitud HTTP.
 * @param {Object} res - La respuesta HTTP.
 * @returns {Promise<void>} Respuesta con la consulta actualizada o un error.
 */

export const consulta_respuesta = async (req, res) => {
    try {
        const id = req.params.id
        const {
            respuesta
        } = req.body

        const _respuesta = await CONSULTAS_SERVICES.responderConsulta(id, respuesta)

        res.status(200).json({
            success: true,
            message: "Consulta respondida exitosamente",
            data: _respuesta
        })

    } catch (error) {
        console.error(error)

        if (error.code === "P2025") {
            return res.status(404).json({
                success: false,
                message: "Consulta no encontrada",
            })
        }

        res.status(500).json({
            success: false,
            message: "Ocurrió un error inesperado en el servidor.",
            error: error.message || "Error interno del servidor"
        })
    }
}