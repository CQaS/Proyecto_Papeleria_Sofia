import multer from "multer"
import path from "path"
import sharp from "sharp"

const storage = multer.memoryStorage()

const fileFilter = (req, file, cb) => {
    const allowed = /jpeg|jpg|png|webp/
    const isValid = allowed.test(path.extname(file.originalname).toLowerCase()) && allowed.test(file.mimetype);
    cb(null, isValid ? true : new Error("Solo se permiten imágenes (jpeg, jpg, png, webp)"))
}

const limits = {
    fileSize: 2 * 1024 * 1024
}

export const subirImgsPromo = multer({
    storage,
    fileFilter,
    limits,
}).array("imagenes", 5)

export const procesarImagenPromo = async (files, req) => {

    const imagenesProcesadas = [];

    for (const file of files) {
        const nombre = Date.now() + "-" + file.originalname.replace(/\.(jpeg|jpg|png|webp)$/i, ".webp");
        const ruta = path.join("public", "promos", nombre);

        await sharp(file.buffer)
            .resize(800)
            .webp({
                quality: 80
            })
            .toFile(ruta);

        const url = `${req.protocol}://${req.get("host")}/promos/${nombre}`;
        imagenesProcesadas.push(url);
    }

    return imagenesProcesadas
}