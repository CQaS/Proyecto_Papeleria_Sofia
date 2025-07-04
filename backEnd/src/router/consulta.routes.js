import { Router } from "express";
import { consulta_lista, consulta_crear } from "../controllers/consulta.controllers.js";

const routesConsulta = Router();

routesConsulta.get('/consulta_lista', consulta_lista)
routesConsulta.post('/consulta_crear', consulta_crear)


export default routesConsulta;