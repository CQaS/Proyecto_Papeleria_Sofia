import {
    Router
} from "express"

import {
    promocion_lista,
    promocion_crear
} from "../controllers/promocion.controllers.js"
import {
    multerError
} from "../middlewares/multerError.js"
import {
    subirImgsPromo
} from "../middlewares/multer_IMGpromo.js"

const routesPromocion = Router()

routesPromocion.get('/lista_promociones', promocion_lista)
routesPromocion.post('/crear_promocion', subirImgsPromo, multerError, promocion_crear)


export default routesPromocion