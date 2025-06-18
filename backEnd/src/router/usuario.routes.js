import {
    Router
} from "express"
import {
    usuarios_lista
} from "../controllers/usuarios.controllers.js"

const routesUsuarios = Router()

routesUsuarios.get('/usuarios_lista', usuarios_lista)

export default routesUsuarios