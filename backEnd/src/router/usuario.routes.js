import {
    Router
} from "express"
import {
    usuarios_lista,
    usuarios_PorId,
    usuarios_crear,
    usuarios_actualizar,
    usuarios_eliminar
} from "../controllers/usuarios.controllers.js"

const routesUsuarios = Router()

routesUsuarios.get('/usuarios_lista', usuarios_lista)
routesUsuarios.get('/usuarios_unico/:id', usuarios_PorId)
routesUsuarios.post('/usuarios_crear', usuarios_crear)
routesUsuarios.put('/usuarios_actualizar/:id', usuarios_actualizar)
routesUsuarios.delete('/usuarios_eliminar/:id', usuarios_eliminar)

export default routesUsuarios