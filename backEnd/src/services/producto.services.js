import {
    prisma
} from "../libs/prisma.js"

/** * Servicio para listar todas las productos.
 * @returns {Promise<Array>} Lista de productos.
 */

const listarProductos = () => {
    return prisma.producto.findMany({
        select: {
            id: true,
            nombre: true,
            descripcion: true,
            precio: true,
            categoria: true,
            imagenUrl: true,
            creadoEn: true,
        },
        orderBy: {
            creadoEn: "desc",
        },
    })
}



/** * Servicio para crear un nuevo producto.
 * @param {Object} data - Datos del producto a crear.
 * @returns {Promise<Object>} Producto creado.
 */

const crearProducto = (data) => {
    return prisma.producto.create({
        data
    })
}

const multiplesImagenesDeProducto = (urlsImagenes, id_producto) => {
    return prisma.imagenProducto.createMany({
        data: urlsImagenes.map((url) => ({
            url,
            productoId: id_producto
        }))
    });
}

const PRODUCTOS_SERVICES = {
    listarProductos,
    crearProducto,
    multiplesImagenesDeProducto
}

export default PRODUCTOS_SERVICES