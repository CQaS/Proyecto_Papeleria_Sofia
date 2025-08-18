import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import 'dotenv/config'
import routes from './router/index.js'
import {
    errorHandler
} from './middlewares/errorHandler.js'

const app = express()

const allowedOrigins = process.env.CORS_ALLOWED_ORIGINS ? process.env.CORS_ALLOWED_ORIGINS.split(',') : [];

const corsOptions = {
    origin: function (origin, callback) {
        // Permitir requests sin origin (como Postman o curl)
        if (!origin) return callback(null, true);

        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("No permitido por CORS"));
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.static("public"))
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "cdnjs.cloudflare.com"], // si usás CDNs, agregalos acá
            styleSrc: ["'self'", "'unsafe-inline'"], // unsafe-inline solo si usás estilos inline
            imgSrc: ["'self'", "data:", "blob:"], // permite imágenes inline y blobs
            connectSrc: ["'self'"], // para fetch/xhr
            fontSrc: ["'self'", "fonts.googleapis.com", "fonts.gstatic.com"],
            objectSrc: ["'none'"], // bloquea objetos
            upgradeInsecureRequests: [],
        },
    },
    frameguard: {
        action: "deny"
    }, // bloquea iframe embedding
    referrerPolicy: {
        policy: "no-referrer"
    },
    crossOriginEmbedderPolicy: false, // a veces necesario para evitar errores con iframes o web workers
}))
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