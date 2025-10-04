import {
    CategoriaProducto
} from '@prisma/client'
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
            stock: true,
            slug: true,
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

const listarProductosPorCategorias = async () => {
    return await prisma.producto.groupBy({
        by: ['categoria'],
        _count: {
            _all: true
        },
        _avg: {
            precio: true
        },
        _sum: {
            stock: true
        }
    })
}

/** * Servicio para obtener un producto por su ID.
 * @param {string} id - ID del producto.
 * @returns {Promise<Object|null>} Producto encontrado o null.
 */

const obtenerProductoPorId = async (id) => {
    return await prisma.producto.findUnique({
        where: {
            id
        },
        include: {
            imagenes: true
        }
    })
}

/** * Servicio para obtener productos por categoría.
 * @param {string} categoria - Nombre de la categoría.
 * @returns {Promise<Array>} Lista de productos de la categoría.
 */

const obtenerPorCategoria = async (categoria) => {
    const categoriaEnum = CategoriaProducto[categoria.toUpperCase()]

    if (!categoriaEnum) {
        return []
    }

    return await prisma.producto.findMany({
        where: {
            categoria: categoriaEnum
        },
        select: {
            id: true,
            nombre: true,
            descripcion: true,
            precio: true,
            stock: true,
            slug: true,
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

/** * Servicio para obtener todas las categorías de productos.
 * @returns {Promise<Array>} Lista de categorías.
 */

const obtenerCategorias = async () => {
    const categorias = await prisma.producto.findMany({
        distinct: ['categoria'],
        select: {
            categoria: true
        }
    })
    return categorias.map(c => c.categoria)
}

/** * Servicio para obtener productos disponibles (en stock y activos).
 * @returns {Promise<Array>} Lista de productos disponibles.
 */

const obtenerProductosDisponibles = async () => {
    return await prisma.producto.findMany({
        where: {
            stock: {
                gt: 0
            },
            estado: "ACTIVO"
        },
        select: {
            id: true,
            nombre: true,
            descripcion: true,
            precio: true,
            stock: true,
            slug: true,
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
            esPrincipal: i === 0, // La ultima imagen es la principal
            productoId: id_producto
        }))
    });
}

const actualizarProducto = async (id, data) => {
    return await prisma.producto.update({
        where: {
            id
        },
        data
    })
}

const obtenerImagenesProducto = async (id_producto) => {
    return await prisma.imagenProducto.findMany({
        where: {
            productoId: id_producto
        }
    });
}

const PRODUCTOS_SERVICES = {
    listarProductos,
    listarProductosPorCategorias,
    obtenerProductoPorId,
    obtenerPorCategoria,
    obtenerCategorias,
    obtenerProductosDisponibles,
    crearProducto,
    multiplesImagenesDeProducto,
    actualizarProducto,
    obtenerImagenesProducto
}

export default PRODUCTOS_SERVICES