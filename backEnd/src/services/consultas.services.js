import {
    prisma
} from "../libs/prisma.js"

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

const CONSULTAS_SERVICES = {
    listarConsultas,
    crearConsulta
}

export default CONSULTAS_SERVICES