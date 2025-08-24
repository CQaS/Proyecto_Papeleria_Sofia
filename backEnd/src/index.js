import app from './app.js'
import logger from "./utils/logger.js"
import {
    PORT
} from './config.js'

app.listen(PORT, () => {
    logger.info(`server http://localhost:${PORT}`)
})