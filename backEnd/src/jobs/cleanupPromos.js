import cron from "node-cron"
import {
    prisma
} from "../libs/prisma.js"
import logger from "../utils/logger.js"

// Corre todos los días a la medianoche
cron.schedule("0 0 * * *", async () => {
    try {
        const now = new Date()

        // Buscar promociones vencidas
        const vencidas = await prisma.promocion.findMany({
            where: {
                fechaFin: {
                    lt: now
                },
                activa: true
            }
        })

        if (vencidas.length === 0) {
            logger.info("No hay promociones vencidas para limpiar.")
            return
        }

        // Actualizar su activa (ej. lógica en vez de borrado físico)
        const result = await prisma.promocion.updateMany({
            where: {
                id: {
                    in: vencidas.map(p => p.id)
                }
            },
            data: {
                activa: false
            }
        })

        logger.info(`Se desactivaron ${result.count} promociones vencidas.`)
    } catch (err) {
        logger.error("Error en la limpieza de promociones vencidas:", err)
    }
})