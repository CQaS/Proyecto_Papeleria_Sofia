 import PEDIDOS_SERVICES from "../services/pedidos.services.js"
 import USUARIOS_SERVICES from "../services/usuarios_services.js"
 import {
     transicionesValidas
 } from "../helpers/estadoPedidos.js"

 /** * Controlador para listar todos los pedidos.
  * @param {Object} req - La solicitud HTTP.
  * @param {Object} res - La respuesta HTTP.
  * @returns {Promise<void>} Respuesta con la lista de pedidos o un error.
  */

 export const pedido_lista = async (req, res) => {
     try {
         const _listar_P = await PEDIDOS_SERVICES.listarPedidos()
         console.log(_listar_P)
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

    /** * Controlador para obtener el estado de un pedido por ID.
  * @param {Object} req - La solicitud HTTP.
  * @param {Object} res - La respuesta HTTP.
  * @returns {Promise<void>} Respuesta con el estado del pedido o un error.
  */
 export const pedido_estado = async (req, res) => {
     try {
         const id = parseInt(req.params.id)
         const pedido = await PEDIDOS_SERVICES.listarPedidoPorId(id)

         if (!pedido) {
             return res.status(404).json({
                 success: false,
                 message: `Pedido n:${id} no encontrado`
             })
         }

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
         let ID_Usuario_delPedido = null

         const usuario = await USUARIOS_SERVICES.UsuarioPorEmailTelefono(req.body.usuario.email, req.body.usuario.telefono)
         if (!usuario) {

             ID_Usuario_delPedido = (await USUARIOS_SERVICES.UsuarioCrear(req.body.usuario)).id

         } else {

             ID_Usuario_delPedido = usuario.id
         }


         const _crear_P = await PEDIDOS_SERVICES.crearPedido(req.body.pedido, ID_Usuario_delPedido)
         res.status(201).json({
             success: true,
             message: "Pedido creado exitosamente",
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

 /** * Actualiza el estado de un pedido.
  * @param {Object} req - La solicitud HTTP.
  * @param {Object} res - La respuesta HTTP.
  * @returns {Promise<void>} Respuesta con el estado actualizado del pedido o un error.
  */

 export const pedido_actualizar_estado = async (req, res) => {
     const id = parseInt(req.params.id)
     const nuevoEstado = req.body.estado

     const elPedido = await PEDIDOS_SERVICES.listarPedidoPorId(id)

     if (!elPedido) {
         return res.status(404).json({
             success: false,
             message: `Pedido n:${id} no encontrado`
         })
     }

     const estadoActual = elPedido.estado

     const posibles = transicionesValidas[estadoActual]

     if (!posibles.includes(nuevoEstado)) {
         return res.status(400).json({
             success: false,
             message: `No se puede cambiar de ${estadoActual} a ${nuevoEstado}`
         })
     }

     const pedidoActualizado = await PEDIDOS_SERVICES.actualizarEstadoPedido(id, nuevoEstado)

     const historialCreado = await PEDIDOS_SERVICES.crearHistorialEstadoPedido(id, nuevoEstado)
     console.log('Historial de estado creado: ', historialCreado)

     res.status(200).json({
         success: true,
         message: "Estado del pedido actualizado exitosamente",
         data: pedidoActualizado
     })
 }

    /** * Controlador para agregar notas internas a un pedido.
    * @param {Object} req - La solicitud HTTP.
    * @param {Object} res - La respuesta HTTP.
    * @returns {Promise<void>} Respuesta con las notas agregadas o un error.
    */

    export const notasInternas = async (req, res) => {
        try {
            const { id, notas } = req.body;

            if (!id || !notas) {
                return res.status(400).json({
                    success: false,
                    message: "ID del pedido y notas son requeridos"
                });
            }

            const pedido = await PEDIDOS_SERVICES.listarPedidoPorId(id);

            if (!pedido) {
                return res.status(404).json({
                    success: false,
                    message: `Pedido n:${id} no encontrado`
                });
            }

            const updatedPedido = await PEDIDOS_SERVICES.agregarNotasInternas(id, notas);

            res.status(200).json({
                success: true,
                message: "Notas internas agregadas exitosamente",
                data: updatedPedido
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                success: false,
                message: "Ocurrió un error inesperado en el servidor.",
                error: error.message || "Error interno del servidor"
            });
        }
    }