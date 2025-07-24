import {
    Router
} from "express"
import {
    subirIMG
} from "../middlewares/multer_IMGs.js"
import {
    producto_lista,
    producto_crear,
    producto_id,
    producto_actualizar,
    producto_eliminar
} from "../controllers/producto.controllers.js"
import {
    multerError
} from "../middlewares/multerError.js"

const routesProducto = Router()

routesProducto.get('/producto_lista', producto_lista)
routesProducto.get('/producto_id/:id', producto_id)
routesProducto.put('/admin/producto_actualizar/:id', subirIMG, multerError, producto_actualizar)
routesProducto.delete('/admin/producto_eliminar/:id', producto_eliminar)
routesProducto.post('/admin/producto_crear', subirIMG, multerError, producto_crear)


export default routesProducto