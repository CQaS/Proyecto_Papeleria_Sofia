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

/** * Servicio para obtener una consulta por su ID.
 * @param {number} id - ID de la consulta a obtener.
 * @returns {Promise<Object>} Consulta obtenida.
 */

const obtenerConsultaPorId = async (id) => {
    return await prisma.consulta.findUnique({
        where: {
            id: id
        }
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
            leido: true,
            resuelto: true
        }
    })
}

/** * Servicio para eliminar una consulta.
 * @param {number} id - ID de la consulta a eliminar.
 * @returns {Promise<Object>} Consulta eliminada.
 */

const eliminarConsulta = async (id) => {
    return await prisma.consulta.delete({
        where: {
            id: id
        }
    })
}

/** * Servicio para eliminar todas las consultas.
 * @returns {Promise<void>}
 */

const eliminarTodasLasConsultas = async () => {
    return await prisma.consulta.deleteMany()
}

const CONSULTAS_SERVICES = {
    listarConsultas,
    obtenerConsultaPorId,
    crearConsulta,
    marcarConsultaLeida,
    marcarConsultaResuelta,
    responderConsulta,
    eliminarConsulta,
    eliminarTodasLasConsultas
}

export default CONSULTAS_SERVICES