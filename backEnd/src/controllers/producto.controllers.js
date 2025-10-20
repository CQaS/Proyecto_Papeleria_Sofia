import fs from 'fs/promises'
import {
    fileURLToPath
} from 'url'
import path from 'path'
const __filename = fileURLToPath(
    import.meta.url)
const __dirname = path.dirname(__filename)
import {
    prisma
} from "../libs/prisma.js"
import logger from "../utils/logger.js"
import PRODUCTOS_SERVICES from "../services/producto.services.js"
import {
    procesarImagenes
} from "../middlewares/multer_IMGs.js"
import {
    generarSlug
} from "../helpers/generarSlug.js"

/** * Controlador para listar todos los productos.
 * @param {Object} req - La solicitud HTTP.
 * @param {Object} res - La respuesta HTTP.
 * @returns {Promise<void>} Respuesta con la lista de productos o un error.
 */

export const producto_lista = async (req, res) => {
    try {
        const _listar_P = await PRODUCTOS_SERVICES.listarProductos()
        logger.info(_listar_P)
        res.status(200).json({
            success: true,
            message: "Productos listados exitosamente",
            data: _listar_P
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: "Ocurrió un error inesperado en el servidor.",
            error: error.message || "Error interno del servidor"
        })

    }
}

export const producto_lista_Xcategorias = async (req, res) => {
    try {
        const _lisytar_P_Xcategorias = await PRODUCTOS_SERVICES.listarProductosPorCategorias()
        logger.info(_lisytar_P_Xcategorias)
        res.status(200).json({
            success: true,
            message: "Productos listados por categorías exitosamente",
            data: _lisytar_P_Xcategorias
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: "Ocurrió un error inesperado en el servidor.",
            error: error.message || "Error interno del servidor"
        })
    }
}

/** * Controlador para obtener productos por categoría.
 * @param {Object} req - La solicitud HTTP.
 * @param {Object} res - La respuesta HTTP.
 * @returns {Promise<void>} Respuesta con los productos de la categoría o un error.
 */

export const Categoria = async (req, res) => {
    try {
        const {
            categoria
        } = req.params

        const productos = await PRODUCTOS_SERVICES.obtenerPorCategoria(categoria)

        if (productos.length === 0) {
            console.warn(`No se encontraron productos para la categoría: ${categoria}`)
            return res.status(200).json({
                success: false,
                message: `No se encontraron productos para la categoría: ${categoria}`
            })
        }

        res.status(200).json({
            success: true,
            message: `Productos de la categoría ${categoria} obtenidos exitosamente`,
            data: productos
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: "Ocurrió un error inesperado en el servidor.",
            error: error.message || "Error interno del servidor"
        })

    }
}

/** * Controlador para obtener todas las categorías de productos.
 * @param {Object} req - La solicitud HTTP.
 * @param {Object} res - La respuesta HTTP.
 * @returns {Promise<void>} Respuesta con la lista de categorías o un error.
 */

export const categoriasLista = async (req, res) => {
    try {
        const categorias = await PRODUCTOS_SERVICES.obtenerCategorias()
        res.status(200).json({
            success: true,
            message: "Categorías obtenidas exitosamente",
            data: categorias
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: "Ocurrió un error inesperado en el servidor.",
            error: error.message || "Error interno del servidor"
        })
    }
}

/** * Controlador para obtener un producto por su ID.
 * @param {Object} req - La solicitud HTTP.
 * @param {Object} res - La respuesta HTTP.
 * @returns {Promise<void>} Respuesta con el producto encontrado o un error.
 */

export const producto_id = async (req, res) => {
    try {
        const {
            id
        } = req.params

        const cuidRegex = /^c[a-z0-9]{24}$/

        if (!cuidRegex.test(id)) {
            return res.status(200).json({
                success: false,
                message: 'Datos de producto no válidos'
            })
        }

        const producto = await PRODUCTOS_SERVICES.obtenerProductoPorId(id)

        if (!producto) {
            return res.status(200).json({
                success: false,
                message: `Producto ${id} no encontrado`
            })
        }

        res.status(200).json({
            success: true,
            message: "Producto obtenido exitosamente",
            data: producto
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: "Ocurrió un error inesperado en el servidor.",
            error: error.message || "Error interno del servidor"
        })

    }
}

/** * Controlador para obtener los productos disponibles para promociones.
 * @param {Object} req - La solicitud HTTP.
 * @param {Object} res - La respuesta HTTP.
 * @returns {Promise<void>} Respuesta con los productos disponibles o un error.
 */

export const productos_paraPromo = async (req, res) => {
    try {
        const productos = await PRODUCTOS_SERVICES.obtenerProductosDisponibles()
        res.status(200).json({
            success: true,
            message: "Productos disponibles para promociones",
            data: productos
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: "Ocurrió un error inesperado en el servidor.",
            error: error.message || "Error interno del servidor"
        })
    }
}

/** * Controlador para crear un nuevo producto.
 * @param {Object} req - La solicitud HTTP.
 * @param {Object} res - La respuesta HTTP.
 * @returns {Promise<void>} Respuesta con el producto creado o un error.
 */

export const producto_crear = async (req, res) => {
    try {

        const imagenes = req.files

        if (!imagenes || imagenes.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Debe subir al menos una imagen del producto"
            })
        }

        let caracteristicasArray = []
        if (req.body.caracteristicas) {
            if (Array.isArray(req.body.caracteristicas)) {
                caracteristicasArray = req.body.caracteristicas
            } else if (typeof req.body.caracteristicas === 'string' && req.body.caracteristicas.trim() !== '') {
                caracteristicasArray = [req.body.caracteristicas]
            }
        }

        const _crear_P = await PRODUCTOS_SERVICES.crearProducto({
            ...req.body,
            precio: parseFloat(req.body.precio),
            stock: parseInt(req.body.stock),
            slug: generarSlug(req.body.nombre),
            caracteristicas: caracteristicasArray
        })

        const imagenUrls = await procesarImagenes(imagenes, "imgs", _crear_P.slug, req)

        const imagenesCreacion = await PRODUCTOS_SERVICES.multiplesImagenesDeProducto(imagenUrls, _crear_P.id)

        logger.info("Producto creado exitosamente", _crear_P, imagenesCreacion)

        res.status(201).json({
            success: true,
            message: "Producto creado exitosamente",
            data: {
                ..._crear_P,
                imagenes: imagenUrls
            }
        })

    } catch (error) {

        console.error(error)

        const isZodError = error.name === "ZodError"
        return res.status(isZodError ? 400 : 500).json({
            success: false,
            message: isZodError ?
                "Error de validación de datos" : "Ocurrió un error inesperado en el servidor.",
            error: isZodError ? error.errors : error.message,
        })
    }
}

/** * Controlador para actualizar un producto por su ID.
 * @param {Object} req - La solicitud HTTP.
 * @param {Object} res - La respuesta HTTP.
 * @returns {Promise<void>} Respuesta con el producto actualizado o un error.
 */

export const producto_actualizar = async (req, res) => {
    try {
        const {
            id
        } = req.params

        const productoExistente = await PRODUCTOS_SERVICES.obtenerProductoPorId(id)

        if (!productoExistente) {
            return res.status(404).json({
                success: false,
                message: `Producto ID:${id} no encontrado`
            })
        }

        const productoActualizado = await PRODUCTOS_SERVICES.actualizarProducto(id, {
            ...req.body,
            precio: parseFloat(req.body.precio),
            stock: parseInt(req.body.stock),
            slug: generarSlug(req.body.nombre)
        })

        if (req.files && req.files.length > 0) {

            const imagenes = req.files

            const imagenesAnteriores = await PRODUCTOS_SERVICES.obtenerImagenesProducto(id)

            logger.info("Imagenes Anteriores:", imagenesAnteriores)

            for (const imagen of imagenesAnteriores) {
                const nombreArchivo = path.basename(imagen.url) // extrae solo el nombre del archivo

                const rutaOriginal = path.join(process.cwd(), 'public', 'imgs', nombreArchivo)
                const rutaThumb = path.join(process.cwd(), 'public', 'imgs', 'thumbs', nombreArchivo)

                try {
                    await fs.unlink(rutaOriginal)
                    logger.info('Eliminada original:', nombreArchivo)
                } catch (err) {
                    console.warn('No se pudo eliminar original:', err.message)
                }

                try {
                    await fs.unlink(rutaThumb)
                    logger.info('Eliminada thumbnail:', nombreArchivo)
                } catch (err) {
                    console.warn('No se pudo eliminar thumbnail:', err.message)
                }
            }

            await prisma.imagenProducto.deleteMany({
                where: {
                    productoId: productoActualizado.id
                }
            })

            const imagenUrls = await procesarImagenes(imagenes, "imgs", productoActualizado.slug, req)

            const imagenesCreacion = await PRODUCTOS_SERVICES.multiplesImagenesDeProducto(imagenUrls, productoActualizado.id)

            logger.info("Imagenes del Producto actualizadas exitosamente", productoActualizado, imagenesCreacion)
        }

        res.status(200).json({
            success: true,
            message: "Producto actualizado exitosamente",
            data: productoActualizado
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: "Ocurrió un error inesperado en el servidor.",
            error: error.message || "Error interno del servidor"
        })

    }
}

/** * Controlador para eliminar un producto por su ID.
 * @param {Object} req - La solicitud HTTP.
 * @param {Object} res - La respuesta HTTP.
 * @returns {Promise<void>} Respuesta con el producto eliminado o un error.
 */

export const producto_eliminar = async (req, res) => {
    try {
        const {
            id
        } = req.params

        const productoExistente = await PRODUCTOS_SERVICES.obtenerProductoPorId(id)

        if (!productoExistente) {
            return res.status(404).json({
                success: false,
                message: `Producto ID:${id} no encontrado`
            })
        }

        const productoEliminado = await PRODUCTOS_SERVICES.actualizarProducto(id, {
            estado: productoExistente.estado === "ACTIVO" ? "INACTIVO" : "ACTIVO"
        })

        res.status(200).json({
            success: true,
            message: productoExistente.estado === "ACTIVO" ? "Producto eliminado exitosamente" : "Producto restaurado exitosamente",
            data: productoEliminado
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: "Ocurrió un error inesperado en el servidor.",
            error: error.message || "Error interno del servidor"
        })

    }
}