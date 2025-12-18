import {
    Router
} from "express";
import {
    consulta_lista,
    consulta_crear,
    consulta_leida,
    consulta_respuesta,
    consulta_resuelta,
    consulta_eliminar,
    consulta_eliminar_todas
} from "../controllers/consulta.controllers.js";
import {
    authAdmin
} from "../middlewares/auth.js";

const routesConsulta = Router();

routesConsulta.get('/admin/consulta_lista', authAdmin, consulta_lista)
routesConsulta.post('/consulta_crear', consulta_crear)
routesConsulta.put('/admin/consulta_leida/:id', authAdmin, consulta_leida) //marcar como leída
routesConsulta.put('/admin/consulta_resuelta/:id', authAdmin, consulta_resuelta) //resuelta consulta
routesConsulta.put('/admin/consulta_respuesta/:id', authAdmin, consulta_respuesta) //responder consulta
routesConsulta.delete('/admin/consulta_eliminar/:id', authAdmin, consulta_eliminar) //eliminar consulta
routesConsulta.delete('/admin/consulta_eliminar_todas/', authAdmin, consulta_eliminar_todas) //eliminar consulta


export default routesConsulta;