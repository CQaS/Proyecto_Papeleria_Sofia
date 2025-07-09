import {
    Router
} from "express";
import {
    pedido_lista,
    pedido_crear,
    pedido_actualizar_estado
} from "../controllers/pedido.controllers.js"

const routesPedido = Router();

routesPedido.get('/pedido_lista', pedido_lista)
routesPedido.post('/pedido_crear', pedido_crear)
routesPedido.put('/pedido_estado/:id', pedido_actualizar_estado)


export default routesPedido;