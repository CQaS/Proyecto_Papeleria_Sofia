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

const routesPedido = Router();

routesPedido.get('/admin/pedido_lista', pedido_lista)
routesPedido.get('/pedido_estado/:id', pedido_estado)
routesPedido.post('/pedido_crear', pedido_crear)
routesPedido.put('/admin/pedido_notasInternas/:id', notasInternas)
routesPedido.put('/admin/pedido_estado/:id', pedido_actualizar_estado)


export default routesPedido;