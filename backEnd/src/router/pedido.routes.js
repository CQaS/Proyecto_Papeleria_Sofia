import {
    Router
} from "express";
import {
    pedido_lista,
    length,
    pedido_estado,
    pedido_crear,
    pedido_actualizar_estado,
    notasInternas
} from "../controllers/pedido.controllers.js"
import {
    authAdmin
} from "../middlewares/auth.js";
import {
    subirArchivoPedido
} from "../middlewares/multer_ArchivoPedido.js";

const routesPedido = Router();

routesPedido.get('/admin/pedido_lista', pedido_lista)
routesPedido.get('/admin/pedido_length', length)
routesPedido.get('/pedido_estado/:id', pedido_estado)
routesPedido.post('/pedido_crear', subirArchivoPedido, pedido_crear)
routesPedido.put('/admin/pedido_notasInternas/:id', authAdmin, notasInternas)
routesPedido.put('/admin/pedido_actualizar_estado/:id', authAdmin, pedido_actualizar_estado)


export default routesPedido;