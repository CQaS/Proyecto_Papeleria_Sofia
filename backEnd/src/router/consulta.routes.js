import {
    Router
} from "express";
import {
    consulta_lista,
    consulta_crear,
    consulta_leida,
    consulta_respuesta,
    consulta_resuelta
} from "../controllers/consulta.controllers.js";

const routesConsulta = Router();

routesConsulta.get('/admin/consulta_lista', consulta_lista)
routesConsulta.post('/consulta_crear', consulta_crear)
routesConsulta.put('/admin/consulta_leida/:id', consulta_leida) //marcar como leída
routesConsulta.put('/admin/consulta_resuelta/:id', consulta_resuelta) //resuelta consulta
routesConsulta.put('/admin/consulta_respuesta/:id', consulta_respuesta) //responder consulta


export default routesConsulta;