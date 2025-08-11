import {
    Router
} from "express"
import {
    login,
    registro
} from "../controllers/auth.controllers.js"
import {
    authAdmin
} from "../middlewares/auth.js"

const routesAuth = Router()

routesAuth.post("/login", login)
routesAuth.post("/registro", authAdmin, registro)

export default routesAuth