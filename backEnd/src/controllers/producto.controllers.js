import fs from "fs/promises"
import path from "path"
import PRODUCTOS_SERVICES from "../services/producto.services.js"
import {
    procesarImagenes
} from "../middlewares/multer_IMG.js"
import {
    generarSlug
} from "../libs/generarSlug.js"

/** * Controlador para listar todos los productos.
 * @param {Object} req - La solicitud HTTP.
 * @param {Object} res - La respuesta HTTP.
 * @returns {Promise<void>} Respuesta con la lista de productos o un error.
 */

export const producto_lista = async (req, res) => {
    try {
        const _listar_P = await PRODUCTOS_SERVICES.listarProductos()
        console.log(_listar_P)
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

        const _crear_P = await PRODUCTOS_SERVICES.crearProducto({
            ...req.body,
            precio: parseFloat(req.body.precio),
            stock: parseInt(req.body.stock),
            slug: generarSlug(req.body.nombre)
        })

        const imagenUrls = await procesarImagenes(imagenes, req)

        const imagenesCreacion = await PRODUCTOS_SERVICES.multiplesImagenesDeProducto(imagenUrls, _crear_P.id)

        console.log("Producto creado exitosamente", _crear_P, imagenesCreacion)

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

        const isZodError = error.name === "ZodError";
        return res.status(isZodError ? 400 : 500).json({
            success: false,
            message: isZodError ?
                "Error de validación de datos" : "Ocurrió un error inesperado en el servidor.",
            error: isZodError ? error.errors : error.message,
        })
    }
}