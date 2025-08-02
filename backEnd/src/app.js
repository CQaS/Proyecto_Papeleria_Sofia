import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import {
    SECRET_KEY_SESSION
} from './config.js'

import routes from './router/index.js'
import { errorHandler } from './middlewares/errorHandler.js'

const app = express()

const corsOptions = {
    origin: ['http://127.0.0.1:5500'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}

app.use(cors(corsOptions))
app.use(morgan('dev'))
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())
app.use(express.static("public"))

routes.forEach(({
    path,
    router
}) => {
    app.use('/api' + path, router)
})

// Middleware para manejar rutas no existentes
app.use((req, res, next) => {
    res.status(404).json({
        Error: 'Ruta no encontrada'
    })
})

app.use(errorHandler)

export default app