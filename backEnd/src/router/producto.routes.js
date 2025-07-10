import {
    Router
} from "express"
import {
    upload
} from "../middlewares/multer_IMG.js"
import {
    producto_lista,
    producto_crear
} from "../controllers/producto.controllers"

const routesProducto = Router()

routesProducto.get('/producto_lista', producto_lista)
routesProducto.post('/producto_crear', upload.single('imagen'), producto_crear)


export default routesProducto