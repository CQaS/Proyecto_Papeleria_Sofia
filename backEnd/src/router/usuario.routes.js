import {
    Router
} from "express"
import {
    usuarios_lista,
    usuarios_crear
} from "../controllers/usuarios.controllers.js"

const routesUsuarios = Router()

routesUsuarios.get('/usuarios_lista', usuarios_lista)
routesUsuarios.post('/usuarios_crear', usuarios_crear)

export default routesUsuarios