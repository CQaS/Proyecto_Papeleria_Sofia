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



/** * Servicio para crear un nuevo promocion.
 * @param {Object} data - Datos del promocion a crear.
 * @returns {Promise<Object>} Promocion creada.
 */

const crearPromocion = async (data) => {
    return await prisma.promocion.create(data)
}

const insert_imagenUrlPromo = async (imagenUrls, promocionId) => {
    await prisma.imagenPromocion.createMany({
        data: imagenUrls.map((url) => ({
            url,
            promocionId: promocionId, // ID que acabamos de crear
        })),
    });
}

const id_productos_promo = async (arrIdProductos, promocionId) => {
    await prisma.promoProducto.createMany({
        data: arrIdProductos.map((productoId) => ({
            promocionId: promocionId,
            productoId,
        })),
        skipDuplicates: true, // evita errores si por algún motivo hay repetidos
    });
}

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

const PROMOCIONES_SERVICES = {
    listarPromociones,
    crearPromocion,
    verificarProductos,
    insert_imagenUrlPromo,
    id_productos_promo
}

export default PROMOCIONES_SERVICES