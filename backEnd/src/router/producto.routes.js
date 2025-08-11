import {
    Router
} from "express"
import {
    subirIMG
} from "../middlewares/multer_IMGs.js"
import {
    producto_lista,
    Categoria,
    producto_id,
    producto_crear,
    producto_actualizar,
    producto_eliminar
} from "../controllers/producto.controllers.js"
import {
    authAdmin
} from "../middlewares/auth.js"

const routesProducto = Router()

routesProducto.get('/producto_lista', producto_lista)
routesProducto.get('cuadernos/:categoria', Categoria)
routesProducto.get('/producto_id/:id', producto_id)
routesProducto.post('/admin/producto_crear', authAdmin, subirIMG, producto_crear)
routesProducto.put('/admin/producto_actualizar/:id', authAdmin, subirIMG, producto_actualizar)
routesProducto.delete('/admin/producto_eliminar/:id', authAdmin, producto_eliminar)


export default routesProducto