import app from './app.js'
import logger from "./utils/logger.js"
import {
    PORT
} from './config.js'

import {
    PrismaClient
} from '@prisma/client'

const prisma = new PrismaClient()

const startServer = async () => {
    try {
        // 🔹 Probamos conexión a la DB
        await prisma.$connect()
        logger.info('Conexion a la base de datos establecida correctamente.')

        // 🔹 Levantamos el servidor solo si la DB responde
        app.listen(PORT, () => {
            logger.info(`Servidor corriendo en http://localhost:${PORT}`)
        })
    } catch (error) {
        logger.error('Error al conectar con la base de datos:', error)
        process.exit(1) // cerramos el proceso si no hay conexión
    } finally {
        await prisma.$disconnect()
    }
}

startServer()