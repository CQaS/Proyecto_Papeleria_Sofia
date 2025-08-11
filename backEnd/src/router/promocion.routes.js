import {
    Router
} from "express"

import {
    promocion_lista,
    promocion_id,
    promocion_crear,
    promocion_actualizar,
    promocion_eliminar
} from "../controllers/promocion.controllers.js"
import {
    productos_paraPromo
} from "../controllers/producto.controllers.js"
import {
    subirIMG
} from "../middlewares/multer_IMGs.js"
import {
    authAdmin
} from "../middlewares/auth.js"

const routesPromocion = Router()

routesPromocion.get('/lista_promociones', promocion_lista)
routesPromocion.get('/promocion_id/:id', promocion_id)
routesPromocion.get('/admin/productos_paraPromo', authAdmin, productos_paraPromo)
routesPromocion.post('/admin/crear_promocion', authAdmin, subirIMG, promocion_crear)
routesPromocion.put('/admin/actualizar_promocion/:id', authAdmin, subirIMG, promocion_actualizar)
routesPromocion.delete('/admin/eliminar_promocion/:id', authAdmin, promocion_eliminar)


export default routesPromocion