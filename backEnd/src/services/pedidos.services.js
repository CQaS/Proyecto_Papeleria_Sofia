import {
    prisma
} from "../libs/prisma.js"

/** * Servicio para listar todos los pedidos pendientes.
 * @returns {Promise<Array>} Lista de pedidos pendientes.
 */

const listarPedidos = () => {
    return prisma.pedido.findMany({
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

const listarPedidoPorId = (id) => {
    return prisma.pedido.findUnique({
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

const crearPedido = (pedido, ID_Usuario_delPedido) => {
    return prisma.pedido.create({
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

const actualizarEstadoPedido = (id, nuevoEstado) => {
    return prisma.pedido.update({
        where: {
            id: id,
        },
        data: {
            estado: nuevoEstado,
        }
    })
}

/** * Servicio para crear un historial de estado de pedido.
 * @param {string} pedidoId - ID del pedido al que se le cambia el estado.
 * @param {string} estado - Nuevo estado del pedido.
 * @returns {Promise<Object>} Historial de estado creado.
 */

const crearHistorialEstadoPedido = (pedidoId, estado) => {
    return prisma.historialPedidoEstado.create({
        data: {
            pedidoId: pedidoId,
            estado: estado,
            cambiadoPor: "Sistema"
        }
    })
}

const PEDIDOS_SERVICES = {
    listarPedidos,
    listarPedidoPorId,
    crearPedido,
    actualizarEstadoPedido,
    crearHistorialEstadoPedido
}

export default PEDIDOS_SERVICES