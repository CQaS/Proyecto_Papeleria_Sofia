import {
    Router
} from "express"
import {
    login,
    registro,
    refresh
} from "../controllers/auth.controllers.js"
import {
    authAdmin
} from "../middlewares/auth.js"
import {
    loginLimiter
} from "../middlewares/loginLimiter.js"

const routesAuth = Router()

routesAuth.post("/login", loginLimiter, login)
routesAuth.post("/registro", loginLimiter, authAdmin, registro)
routesAuth.post("/refresh", refresh)

export default routesAuth