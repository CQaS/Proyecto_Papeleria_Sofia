import {
    prisma
} from "../libs/prisma.js"

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

const listarPedidoPorId = (id) => {
    return prisma.pedido.findUnique({
        where: {
            id: id,
        }
    })
}


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

const PEDIDOS_SERVICES = {
    listarPedidos,
    listarPedidoPorId,
    crearPedido,
    actualizarEstadoPedido
}

export default PEDIDOS_SERVICES