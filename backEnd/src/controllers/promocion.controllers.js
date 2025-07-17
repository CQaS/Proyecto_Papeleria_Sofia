import fs from "fs/promises"
import path from "path"
import PROMOCIONES_SERVICES from "../services/promociones.services.js"
import {
    procesarImagenPromo
} from "../middlewares/multer_IMGpromo.js"


/** * Controlador para listar todos las promociones.
 * @param {Object} req - La solicitud HTTP.
 * @param {Object} res - La respuesta HTTP.
 * @returns {Promise<void>} Respuesta con la lista de promociones o un error.
 */

export const promocion_lista = async (req, res) => {
    try {
        const _listar_P = await PROMOCIONES_SERVICES.listarPromociones()
        console.log(_listar_P)
        res.status(200).json({
            success: true,
            message: "Promociones listadas exitosamente",
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

/** * Controlador para crear un nueva promocion.
 * @param {Object} req - La solicitud HTTP.
 * @param {Object} res - La respuesta HTTP.
 * @returns {Promise<void>} Respuesta con el producto creado o un error.
 */

export const promocion_crear = async (req, res) => {
    try {

        const body = req.body

        const array_de_numeros_productos = Array.isArray(body.productos) ?
            body.productos.map(Number) : [Number(body.productos)]

        const array_de_numeros_productos_sinRepetidos = [...new Set(array_de_numeros_productos)].filter(item => !isNaN(item))

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Debe subir al menos una imagen",
            });
        }

        const productosValidos = await PROMOCIONES_SERVICES.verificarProductos(array_de_numeros_productos_sinRepetidos)

        if (productosValidos.length !== array_de_numeros_productos_sinRepetidos.length) {
            return res.status(400).json({
                success: false,
                message: "Algunos productos seleccionados no están disponibles o están inactivos",
            });
        }

        const imagenUrlPromo = await procesarImagenPromo(req.files, req)

        const _crear_P = await PROMOCIONES_SERVICES.crearPromocion({
            data: {
                titulo: body.titulo,
                codigo: body.codigo || null,
                descripcion: body.descripcion,
                fechaInicio: body.fechaInicio,
                fechaFin: body.fechaFin,
                activa: body.activa ?? true
            },
        })

        if (imagenUrlPromo.length > 0) {
            await PROMOCIONES_SERVICES.insert_imagenUrlPromo(imagenUrlPromo, _crear_P.id)
        }

        if (array_de_numeros_productos_sinRepetidos.length > 0) {
            await PROMOCIONES_SERVICES.id_productos_promo(array_de_numeros_productos_sinRepetidos, _crear_P.id)
        }

        console.log("Promocion creada exitosamente", _crear_P)

        res.status(201).json({
            success: true,
            message: "Promoción creada exitosamente",
            data: _crear_P,
        })

    } catch (error) {

        console.error(error);

        res.status(error.name === "ZodError" ? 400 : 500).json({
            success: false,
            message: error.name === "ZodError" ?
                "Error de validación de datos" :
                "Ocurrió un error inesperado en el servidor.",
            error: error.errors || error.message,
        })
    }
}