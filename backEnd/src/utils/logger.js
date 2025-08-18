import pino from "pino";
import fs from "fs";
import path from "path";
import * as rfs from "rotating-file-stream";

// Carpeta de logs
const logDir = path.join(process.cwd(), "src/logs");
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, {
    recursive: true
});

// Streams con rotación
const infoStream = rfs.createStream("app.log", {
    interval: "1d", // rota cada día
    path: logDir,
    maxFiles: 7
});

const errorStream = rfs.createStream("error.log", {
    interval: "1d",
    path: logDir,
    maxFiles: 30
});

// Logger dev/prod
let logger;

if (process.env.NODE_ENV === "development") {
    // Dev: consola bonita
    logger = pino({
        level: process.env.LOG_LEVEL || "info",
        transport: {
            target: "pino-pretty",
            options: {
                colorize: true,
                translateTime: "SYS:standard",
                ignore: "pid,hostname"
            }
        }
    });
} else {
    // Prod: logs a archivos + consola
    logger = pino({
        level: process.env.LOG_LEVEL || "info"
    }, pino.multistream([{
            stream: infoStream,
            level: "info"
        },
        {
            stream: errorStream,
            level: "error"
        },
        {
            stream: process.stdout,
            level: "info"
        } // opcional: ver info en consola prod
    ]));
}

export default logger;
