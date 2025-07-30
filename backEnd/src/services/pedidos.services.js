import {
    prisma
} from "../libs/prisma.js"

/** * Servicio para listar todos los pedidos pendientes.
 * @returns {Promise<Array>} Lista de pedidos pendientes.
 */

const listarPedidos = async () => {
    return await prisma.pedido.findMany({
        where: {
            estado: "PENDIENTE",
        },
        orderBy: {
            creadoEn: "desc",
        },
        include: {
            usuario: {
                select: {
                    id: true,
                    nombre: true,
                    apellido: true,
                    email: true,
                },
            },
        },
    });
}

/** * Servicio para listar un pedido por su ID.
 * @param {string} id - ID del pedido a buscar.
 * @returns {Promise<Object>} Pedido encontrado o null si no existe.
 */

const listarPedidoPorId = async (id) => {
    return await prisma.pedido.findUnique({
        where: {
            id: id,
        }
    })
}

/** * Servicio para crear un nuevo pedido.
 * @param {Object} pedido - Datos del pedido a crear.
 * @param {string} ID_Usuario_delPedido - ID del usuario que realiza el pedido.
 * @returns {Promise<Object>} Pedido creado.
 */

const crearPedido = async (pedido, ID_Usuario_delPedido) => {
    return await prisma.pedido.create({
        data: {
            archivoUrl: pedido.archivoUrl,
            detalles: pedido.detalles,
            total: pedido.total,
            direccionEnvio: pedido.direccionEnvio,
            usuarioId: ID_Usuario_delPedido,
        }
    })
}

/** * Servicio para actualizar el estado de un pedido.
 * @param {string} id - ID del pedido a actualizar.
 * @param {string} nuevoEstado - Nuevo estado del pedido.
 * @returns {Promise<Object>} Pedido actualizado.
 */

const actualizarEstadoPedido = async (id, nuevoEstado) => {
    return await prisma.pedido.update({
        where: {
            id: id,
        },
        data: {
            estado: nuevoEstado,
        }
    })
}

/** * Servicio para agregar notas internas a un pedido.
 * @param {string} id - ID del pedido al que se le agregarán las notas.
 * @param {string} notas - Notas internas a agregar.
 * @returns {Promise<Object>} Pedido actualizado con las notas agregadas.
 */

const agregarNotasInternas = async (id, data) => {
    return await prisma.pedido.update({
        where: {
            id: id
        },
        data
    })
}

const PEDIDOS_SERVICES = {
    listarPedidos,
    listarPedidoPorId,
    crearPedido,
    actualizarEstadoPedido,
    agregarNotasInternas
}

export default PEDIDOS_SERVICES