import {
    Router
} from "express";
import {
    pedido_lista,
    pedido_estado,
    pedido_crear,
    pedido_actualizar_estado,
    notasInternas
} from "../controllers/pedido.controllers.js"
import {
    authAdmin
} from "../middlewares/auth.js";

const routesPedido = Router();

routesPedido.get('/admin/pedido_lista', authAdmin, pedido_lista)
routesPedido.get('/pedido_estado/:id', pedido_estado)
routesPedido.post('/pedido_crear', pedido_crear)
routesPedido.put('/admin/pedido_notasInternas/:id', authAdmin, notasInternas)
routesPedido.put('/admin/pedido_estado/:id', authAdmin, pedido_actualizar_estado)


export default routesPedido;