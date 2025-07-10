 import PRODUCTOS_SERVICES from "../services/producto.services.js"

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
  * @param {Object} req - La solicitud HTTP que contiene los datos del producto.
  * @param {Object} res - La respuesta HTTP.
  * @returns {Promise<void>} Respuesta con el producto creado o un error.
  */

 export const producto_crear = async (req, res) => {
     try {

         const imagen = req.file

         if (!imagen) {
             return res.status(400).json({
                 success: false,
                 message: "La imagen del producto es obligatoria"
             })
         }

         const imagenUrl = `${req.protocol}://${req.get("host")}/imgs/${imagen.filename}`

         const _crear_P = await PRODUCTOS_SERVICES.crearProducto({
             ...req.body,
             imagenUrl
         })

         console.log(_crear_P)
         res.status(201).json({
             success: true,
             message: "Producto creado exitosamente",
             data: _crear_P
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