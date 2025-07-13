export const multerError = (err, req, res, next) => {

    if (err instanceof Error && err.message.includes("Solo se permiten imágenes")) {

        return res.status(400).json({
            success: false,
            message: "Tipo de archivo no permitido. Solo se permiten imágenes (jpeg, jpg, png, webp).",
        })
    }

    if (err.code === "LIMIT_FILE_SIZE") {

        return res.status(400).json({
            success: false,
            message: "El archivo es demasiado grande. El tamaño máximo permitido es de 2 MB.",
        })
    }

    next(err)
}