import fs from "fs";
import multer from "multer";
import path from "path";

// --- MULTER CONFIG PARA PEDIDOS (PDF, DOC, DOCX) ---
const storagePedido = multer.memoryStorage();

const fileFilterPedido = (req, file, cb) => {
    const tiposPermitidos = /pdf|doc|docx/;
    const extOk = tiposPermitidos.test(path.extname(file.originalname).toLowerCase());
    const mimeOk = tiposPermitidos.test(file.mimetype);

    if (extOk && mimeOk) {
        cb(null, true);
    } else {
        cb(new Error("Solo se permiten archivos PDF, DOC o DOCX"));
    }
};

const limitesPedido = {
    fileSize: 5 * 1024 * 1024, // Máximo 5 MB
};

// Middleware Multer — 1 solo archivo
export const subirArchivoPedido = multer({
    storage: storagePedido,
    fileFilter: fileFilterPedido,
    limits: limitesPedido,
}).single("archivo");

// --- FUNCION PARA GUARDAR ARCHIVO ---
export const guardarArchivoPedido = async (file, req) => {
    if (!file) return null; // NO SE SUBIÓ ARCHIVO → null

    const carpeta = path.join("public", "pedidos");

    // Crear carpeta si no existe
    if (!fs.existsSync(carpeta)) {
        fs.mkdirSync(carpeta, {
            recursive: true
        });
    }

    // Crear nombre único
    const timestamp = Date.now();
    const nombreLimpio = file.originalname.replace(/\s+/g, "_").toLowerCase();
    const uniqueName = `${timestamp}-${nombreLimpio}`;

    const rutaArchivo = path.join(carpeta, uniqueName);

    // Guardar archivo original (PDF / DOC / DOCX)
    fs.writeFileSync(rutaArchivo, file.buffer);

    // URL accesible desde el frontend
    const urlAccesible = `${req.protocol}://${req.get("host")}/pedidos/${uniqueName}`;

    return urlAccesible;
};