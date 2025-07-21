import {
    Router
} from "express"
import {
    login,
    registro
} from "../controllers/auth.controllers.js"

const routesAuth = Router()

routesAuth.post("/login", login)
routesAuth.post("/registro", registro)

export default routesAuth