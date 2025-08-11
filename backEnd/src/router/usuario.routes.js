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
import {
    authAdmin
} from "../middlewares/auth.js"

const routesUsuarios = Router()

/** * Rutas para la gestión de usuarios.
 * @module router/usuario.routes
 */
routesUsuarios.get('/admin/usuarios_lista', authAdmin, usuarios_lista)
routesUsuarios.get('/admin/usuarios_unico/:id', authAdmin, usuarios_PorId)
routesUsuarios.post('/admin/usuarios_crear', authAdmin, usuarios_crear)
routesUsuarios.put('/admin/usuarios_actualizar/:id', authAdmin, usuarios_actualizar)
routesUsuarios.delete('/admin/usuarios_eliminar/:id', authAdmin, usuarios_eliminar)

export default routesUsuarios