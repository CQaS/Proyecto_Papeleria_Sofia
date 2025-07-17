import {
    prisma
} from "../libs/prisma.js"

/** * Servicio para listar todas las productos.
 * @returns {Promise<Array>} Lista de productos.
 */

const listarProductos = async () => {
    return await prisma.producto.findMany({
        select: {
            id: true,
            nombre: true,
            descripcion: true,
            precio: true,
            categoria: true,
            creadoEn: true,
            imagenes: {
                where: {
                    esPrincipal: true
                },
                select: {
                    url: true,
                }
            },
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

const crearProducto = async (data) => {
    return await prisma.producto.create({
        data
    })
}

const multiplesImagenesDeProducto = async (urlsImagenes, id_producto) => {
    return await prisma.imagenProducto.createMany({
        data: urlsImagenes.map((url, i) => ({
            url,
            esPrincipal: i === 0, // La primera imagen es la principal
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