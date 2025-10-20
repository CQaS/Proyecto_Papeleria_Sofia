import {
    Router
} from "express"
import {
    subirIMG
} from "../middlewares/multer_IMGs.js"
import {
    producto_lista,
    producto_lista_Xcategorias,
    Categoria,
    categoriasLista,
    producto_id,
    producto_crear,
    producto_actualizar,
    producto_eliminar
} from "../controllers/producto.controllers.js"
import {
    authAdmin
} from "../middlewares/auth.js"
import {
    validarParams
} from "../middlewares/validarParams.js"
import {
    paramsSchema
} from "../schemas/params.shema.js"

const routesProducto = Router()

routesProducto.get('/producto_lista', producto_lista)
routesProducto.get('/producto_lista_Xcategorias', producto_lista_Xcategorias)
routesProducto.get('/categorias/:categoria', Categoria)
routesProducto.get('/categoriasLista', categoriasLista)
routesProducto.get('/producto_id/:id', validarParams(paramsSchema), producto_id)
routesProducto.post('/admin/producto_crear', subirIMG, producto_crear)
routesProducto.put('/admin/producto_actualizar/:id', subirIMG, producto_actualizar)
routesProducto.delete('/admin/producto_eliminar/:id', authAdmin, producto_eliminar)


export default routesProducto