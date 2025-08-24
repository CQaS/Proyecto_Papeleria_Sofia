import {
    prisma
} from "../libs/prisma.js"
import logger from "../utils/logger.js"

/** * Servicio para listar todas las consultas.
 * @returns {Promise<Array>} Lista de consultas.
 */

const listarConsultas = async () => {
    return await prisma.consulta.findMany({
        select: {
            id: true,
            nombre: true,
            email: true,
            telefono: true,
            mensaje: true,
            respuesta: true,
            leido: true,
            resuelto: true,
            creadoEn: true,
        },
        orderBy: {
            creadoEn: "desc",
        },
    })
}

/** * Servicio para crear una nueva consulta.
 * @param {Object} data - Datos de la consulta a crear.
 * @returns {Promise<Object>} Consulta creada.
 */

const crearConsulta = async (data) => {
    return await prisma.consulta.create({
        data
    })
}

/** * Servicio para marcar una consulta como leída.
 * @param {number} id - ID de la consulta a marcar como leída.
 * @returns {Promise<Object>} Consulta actualizada.
 */

const marcarConsultaLeida = async (id) => {
    logger.info("Actualizando consulta ID:", id)
    return await prisma.consulta.update({
        where: {
            id: id
        },
        data: {
            leido: true
        }
    })
}

/** * Servicio para marcar una consulta como resuelta.
 * @param {number} id - ID de la consulta a marcar como resuelta.
 * @returns {Promise<Object>} Consulta actualizada.
 */

const marcarConsultaResuelta = async (id) => {
    logger.info("Actualizando consulta ID:", id)
    return await prisma.consulta.update({
        where: {
            id: id
        },
        data: {
            resuelto: true
        }
    })
}

/** * Servicio para responder una consulta.
 * @param {number} id - ID de la consulta a responder.
 * @param {string} respuesta - Respuesta a la consulta.
 * @returns {Promise<Object>} Consulta actualizada.
 */

const responderConsulta = async (id, respuesta) => {
    return await prisma.consulta.update({
        where: {
            id: id
        },
        data: {
            respuesta: respuesta,
            resuelto: true
        }
    })
}

const CONSULTAS_SERVICES = {
    listarConsultas,
    crearConsulta,
    marcarConsultaLeida,
    marcarConsultaResuelta,
    responderConsulta
}

export default CONSULTAS_SERVICES