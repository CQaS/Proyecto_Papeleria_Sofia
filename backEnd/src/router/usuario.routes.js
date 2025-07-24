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

/** * Rutas para la gestión de usuarios.
 * @module router/usuario.routes
 */
routesUsuarios.get('/admin/usuarios_lista', usuarios_lista)
routesUsuarios.get('/admin/usuarios_unico/:id', usuarios_PorId)
routesUsuarios.post('/admin/usuarios_crear', usuarios_crear)
routesUsuarios.put('/admin/usuarios_actualizar/:id', usuarios_actualizar)
routesUsuarios.delete('/admin/usuarios_eliminar/:id', usuarios_eliminar)

export default routesUsuarios