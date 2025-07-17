import {
    Router
} from "express"
import {
    subirIMG
} from "../middlewares/multer_IMGs.js"
import {
    producto_lista,
    producto_crear
} from "../controllers/producto.controllers.js"
import {
    multerError
} from "../middlewares/multerError.js"

const routesProducto = Router()

routesProducto.get('/producto_lista', producto_lista)
routesProducto.post('/producto_crear', subirIMG, multerError, producto_crear)


export default routesProducto