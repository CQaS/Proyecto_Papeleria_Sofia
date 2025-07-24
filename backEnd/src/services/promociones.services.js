import {
    prisma
} from "../libs/prisma.js"

/** * Servicio para listar todas las productos.
 * @returns {Promise<Array>} Lista de productos.
 */

const listarPromociones = async () => {
    return await prisma.promocion.findMany({
        include: {
            imagenes: true, // incluye array de imágenes { id, url, promocionId }
            productos: {
                include: {
                    producto: {
                        select: {
                            id: true,
                            nombre: true,
                            slug: true,
                            precio: true,
                            stock: true,
                            estado: true,
                            imagenes: {
                                select: {
                                    url: true
                                },
                                take: 1 // Solo la imagen principal (opcional)
                            }
                        }
                    }
                }
            }
        },
        orderBy: {
            creadaEn: 'desc'
        }
    })

}
/** * Servicio para obtener una promocion por ID.
 * @param {string} id - ID de la promocion.
 * @returns {Promise<Object|null>} Promocion encontrada o null.
 */
const obtenerPromocionPorId = async (id) => {
    return await prisma.promocion.findUnique({
        where: { id },
        include: {
            imagenes: true,
            productos: {
                include: {
                    producto: {
                        select: {
                            id: true,
                            nombre: true,
                            slug: true,
                            precio: true,
                            stock: true,
                            estado: true,
                            imagenes: {
                                select: {
                                    url: true
                                },
                                take: 1
                            }
                        }
                    }
                }
            }
        }
    })
}

/** * Servicio para crear un nuevo promocion.
 * @param {Object} data - Datos del promocion a crear.
 * @returns {Promise<Object>} Promocion creada.
 */

const crearPromocion = async (data) => {
    return await prisma.promocion.create(data)
}

/** * Servicio para insertar las URLs de las imágenes de la promoción.
 * @param {Array} imagenUrls - Array de URLs de las imágenes.
 * @param {string} promocionId - ID de la promoción a la que pertenecen las imágenes.
 * @returns {Promise<void>}
 */

const insert_imagenUrlPromo = async (imagenUrls, promocionId) => {
    await prisma.imagenPromocion.createMany({
        data: imagenUrls.map((url) => ({
            url,
            promocionId: promocionId, // ID que acabamos de crear
        })),
    });
}

/** * Servicio para insertar los IDs de los productos en la promoción.
 * @param {Array} arrIdProductos - Array de IDs de productos.
 * @param {string} promocionId - ID de la promoción a la que pertenecen los productos.
 * @returns {Promise<void>}
 */

const id_productos_promo = async (arrIdProductos, promocionId) => {
    await prisma.promoProducto.createMany({
        data: arrIdProductos.map((productoId) => ({
            promocionId: promocionId,
            productoId,
        })),
        skipDuplicates: true, // evita errores si por algún motivo hay repetidos
    });
}

/** * Servicio para verificar si los productos existen y están activos.
 * @param {Array} productosIds - Array de IDs de productos a verificar.
 */

const verificarProductos = async (productosIds) => {
    const productos = await prisma.producto.findMany({
        where: {
            id: {
                in: productosIds
            },
            estado: "ACTIVO",
            stock: {
                gt: 0
            }
        },
        select: {
            id: true
        }
    })
    return productos
}

/** * Servicio para actualizar una promocion.
 * @param {string} id - ID de la promocion a actualizar.
 * @param {Object} data - Nuevos datos de la promocion.
 * @returns {Promise<Object>} Promocion actualizada.
 */

const actualizarPromocion = async (id, data) => {
    return await prisma.promocion.update({
        where: { id },
        data
    })
}

/** * Servicio para eliminar una promocion.
 * @param {string} id - ID de la promocion a eliminar.
 * @returns {Promise<void>}
 */

const eliminarPromocion = async (id) => {
    await prisma.promocion.update({
        where: { id },
        data: { activa: false }
    })
}

const PROMOCIONES_SERVICES = {
    listarPromociones,
    obtenerPromocionPorId,
    crearPromocion,
    verificarProductos,
    insert_imagenUrlPromo,
    id_productos_promo,
    actualizarPromocion,
    eliminarPromocion
}

export default PROMOCIONES_SERVICES