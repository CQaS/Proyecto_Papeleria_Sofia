import fs from 'fs'
import multer from "multer"
import path from "path"
import sharp from "sharp"

const storage = multer.memoryStorage()

const fileFiltro = (req, file, cb) => {
    const tiposPermitidos = /jpeg|jpg|png|webp/
    const extOk = tiposPermitidos.test(path.extname(file.originalname).toLowerCase())
    const mimeOk = tiposPermitidos.test(file.mimetype)

    if (extOk && mimeOk) {
        cb(null, true)
    } else {
        cb(new Error("Solo se permiten imágenes (jpeg, jpg, png, webp)"))
    }
}

const limites = {
    fileSize: 2 * 1024 * 1024,
}

export const subirIMG = multer({
    storage,
    fileFilter: fileFiltro,
    limits: limites,
}).array("imagen", 5)

export const procesarImagenes = async (files, carpeta, slug, req) => {
    const urls = []

    for (const file of files) {

        const nombreLimpio = file.originalname.replace(/\s+/g, "_").toLowerCase()
        const timestamp = Date.now()
        const nombreSinExtension = nombreLimpio.replace(/\.(jpeg|jpg|png|webp)$/i, "")
        const uniqueName = `${timestamp}-${nombreSinExtension}-${slug ? '-' + slug : ''}.webp`

        const carpetaPath = path.join('public', carpeta)
        const thumbsPath = path.join(carpetaPath, 'thumbs')

        if (!fs.existsSync(carpetaPath)) {
            fs.mkdirSync(carpetaPath, {
                recursive: true
            })
        }

        if (!fs.existsSync(thumbsPath)) {
            fs.mkdirSync(thumbsPath, {
                recursive: true
            })
        }

        const rutaPrincipal = path.join(carpetaPath, uniqueName)
        const rutaMiniatura = path.join(thumbsPath, uniqueName)

        await sharp(file.buffer)
            .resize({
                width: 1000
            })
            .toFormat("webp")
            .webp({
                quality: 80
            })
            .toFile(rutaPrincipal)

        await sharp(file.buffer)
            .resize(300, 300)
            .toFormat("webp")
            .webp({
                quality: 70
            })
            .toFile(rutaMiniatura)

        const urlAccesible = `${req.protocol}://${req.get("host")}/${carpeta}/${uniqueName}`
        urls.push(urlAccesible)
    }

    return urls
}