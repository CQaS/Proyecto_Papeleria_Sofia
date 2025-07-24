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
    multerError
} from "../middlewares/multerError.js"
import {
    subirImgsPromo
} from "../middlewares/multer_IMGpromo.js"

const routesPromocion = Router()

routesPromocion.get('/lista_promociones', promocion_lista)
routesPromocion.get('/promocion_id/:id', promocion_id)
routesPromocion.put('/admin/actualizar_promocion/:id', subirImgsPromo, multerError, promocion_actualizar)
routesPromocion.post('/admin/crear_promocion', subirImgsPromo, multerError, promocion_crear)
routesPromocion.delete('/admin/eliminar_promocion/:id', promocion_eliminar)


export default routesPromocion