 import Logger from "../utils/logger.js"
 import PEDIDOS_SERVICES from "../services/pedidos.services.js"
 import USUARIOS_SERVICES from "../services/usuarios_services.js"
 import {
     transicionesValidas
 } from "../helpers/estadoPedidos.js"
 import {
     guardarArchivoPedido
 } from "../middlewares/multer_ArchivoPedido.js"

 /** * Controlador para listar todos los pedidos.
  * @param {Object} req - La solicitud HTTP.
  * @param {Object} res - La respuesta HTTP.
  * @returns {Promise<void>} Respuesta con la lista de pedidos o un error.
  */

 export const pedido_lista = async (req, res) => {
     try {
         const _listar_P = await PEDIDOS_SERVICES.listarPedidos()
         Logger.info(_listar_P)
         res.status(200).json({
             success: true,
             message: "Pedidos listados exitosamente",
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

 export const length = async (req, res) => {
     try {
         const len = await PEDIDOS_SERVICES._length()
         Logger.info(len)
         res.status(200).json({
             success: true,
             message: "Cantidad de pedidos",
             len
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

 /** * Controlador para obtener el estado de un pedido por ID.
  * @param {Object} req - La solicitud HTTP.
  * @param {Object} res - La respuesta HTTP.
  * @returns {Promise<void>} Respuesta con el estado del pedido o un error.
  */
 export const pedido_estado = async (req, res) => {
     try {
         const id = req.params.id
         const pedido = await PEDIDOS_SERVICES.listarPedidoPorId(id)

         if (!pedido) {
             Logger.info(`Pedido n:${id} no encontrado`)
             return res.status(404).json({
                 success: false,
                 message: `Pedido n:${id} no encontrado`
             })
         }

         Logger.info(`Estado del pedido n:${id} obtenido exitosamente`)
         res.status(200).json({
             success: true,
             message: "Estado del pedido obtenido exitosamente",
             data: pedido.estado
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

 /** * Controlador para crear un nuevo pedido.
  * @param {Object} req - La solicitud HTTP.
  * @param {Object} res - La respuesta HTTP.
  * @returns {Promise<void>} Respuesta con el pedido creado o un error.
  */

 export const pedido_crear = async (req, res) => {
     try {
         const pedidoJSON = JSON.parse(req.body.pedido)
         const usuarioJSON = JSON.parse(req.body.usuario)

         /* { ESTOS DATOS LLEGAN DESDE EL FRONT (por ejemplo)
             pedido: '{"tamano":"A5","cantidad":6,"tipoPapel":"Couche","acabado":"Satinado","calidad":"Alta Calidad","orientacion":"horizontal","dobleFaz":true,"encuadernado":false,"perforado":false,"grapado":true,"delivery":false,"subtotal":1.5,"iva":0.32,"total":1.81,"archivo":"comprobante.pdf","comentarios":"que sea lindo!","fecha":"2025-11-20","hora":"18:00"}',
             usuario: '{"nombre":"Fiammas","email":"cqasss@gmail.com","telefono":"+542664562066","direccion":"Barrio 140, Manzana 401 Casa 4"}',
             archivo: {}
         }
          */
         let ID_Usuario_delPedido = null

         const usuario = await USUARIOS_SERVICES.UsuarioPorEmailTelefono(usuarioJSON.email, usuarioJSON.telefono)
         if (!usuario) {

             ID_Usuario_delPedido = (await USUARIOS_SERVICES.UsuarioCrear(usuarioJSON)).id

         } else {

             ID_Usuario_delPedido = usuario.id
         }

         if (req.file) {

             const archivoUrl = await guardarArchivoPedido(req.file, req);

             const _crear_P = await PEDIDOS_SERVICES.crearPedido({
                 ...pedidoJSON,
                 archivo: archivoUrl
             }, ID_Usuario_delPedido)

             res.status(201).json({
                 success: true,
                 message: "Pedido creado exitosamente",
                 data: _crear_P
             })
         } else {
             res.status(404).json({
                 success: false,
                 message: "Pedido NO creado exitosamente, falta ARCHIVO",
                 data: null
             })
         }

     } catch (error) {
         console.error(error)
         res.status(500).json({
             success: false,
             message: "Ocurrió un error inesperado en el servidor.",
             error: error.message || "Error interno del servidor"
         })
     }
 }

 /** * Actualiza el estado de un pedido.
  * @param {Object} req - La solicitud HTTP.
  * @param {Object} res - La respuesta HTTP.
  * @returns {Promise<void>} Respuesta con el estado actualizado del pedido o un error.
  */

 export const pedido_actualizar_estado = async (req, res) => {
     try {
         const id = req.params.id
         const nuevoEstado = req.body.estado

         const elPedido = await PEDIDOS_SERVICES.listarPedidoPorId(id)

         if (!elPedido) {
             return res.status(200).json({
                 success: false,
                 message: `Pedido n:${id} no encontrado`
             })
         }

         const estadoActual = elPedido.estado

         const posibles = transicionesValidas[estadoActual]

         if (!posibles.includes(nuevoEstado)) {
             return res.status(200).json({
                 success: false,
                 message: `No se puede cambiar de ${estadoActual} a ${nuevoEstado}`
             })
         }

         const pedidoActualizado = await PEDIDOS_SERVICES.actualizarEstadoPedido(id, nuevoEstado)

         res.status(200).json({
             success: true,
             message: "Estado del pedido actualizado exitosamente",
             data: pedidoActualizado
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

 /** * Controlador para agregar notas internas a un pedido.
  * @param {Object} req - La solicitud HTTP.
  * @param {Object} res - La respuesta HTTP.
  * @returns {Promise<void>} Respuesta con las notas agregadas o un error.
  */

 export const notasInternas = async (req, res) => {
     try {
         const id = req.params.id
         const notas = req.body.notasInternas;

         if (!id || !notas) {
             return res.status(200).json({
                 success: false,
                 message: "ID del pedido y notas son requeridos"
             });
         }

         const pedido = await PEDIDOS_SERVICES.listarPedidoPorId(id);

         if (!pedido) {
             return res.status(200).json({
                 success: false,
                 message: `Pedido n:${id} no encontrado`
             });
         }

         const updatedPedido = await PEDIDOS_SERVICES.agregarNotasInternas(id, req.body);

         res.status(200).json({
             success: true,
             message: "Notas internas agregadas exitosamente",
             data: updatedPedido
         });

     } catch (error) {
         console.error(error);
         res.status(200).json({
             success: false,
             message: "Ocurrió un error inesperado en el servidor.",
             error: error.message || "Error interno del servidor"
         });
     }
 }