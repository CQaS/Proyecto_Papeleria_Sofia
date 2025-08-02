// middlewares/errorHandler.js
import multer from 'multer'

export const errorHandler = (err, req, res, next) => {
    // Detectar entorno para dar más o menos detalle en producción/dev
    const isProduction = process.env.NODE_ENV === 'production'

    // Respuesta base
    let statusCode = 500
    let message = 'Error inesperado en el servidor'
    let details = null

    // 1. Errores Multer (subida de archivos)
    if (err instanceof multer.MulterError) {
        statusCode = 400
        switch (err.code) {
            case 'LIMIT_FILE_SIZE':
                message = 'El archivo es demasiado grande. El tamaño máximo permitido es de 2 MB.'
                break
            case 'LIMIT_UNEXPECTED_FILE':
                message = 'Campo de archivo inesperado.'
                break
                // Agregá otros códigos de Multer si querés
            default:
                message = err.message
        }
    }
    // 2. Errores de validación (por ej Zod, Joi)
    else if (err.name === 'ValidationError' || err.name === 'ZodError') {
        statusCode = 400
        message = 'Error de validación de datos'
        // En producción no se suele enviar todo el detalle
        details = isProduction ? null : err.errors || err.details || err.errors
    }
    // 3. Errores de Prisma
    else if (err.code && err.code.startsWith('P')) {
        // P2025 = registro no encontrado, ejemplo
        statusCode = 400
        message = 'Error en la base de datos'
        details = isProduction ? null : err.message
    }
    // 4. Errores de autenticación/autorización
    else if (err.name === 'UnauthorizedError') {
        statusCode = 401
        message = 'No autorizado'
    }
    // 5. Errores personalizados con property 'statusCode' y 'message'
    else if (err.statusCode && err.message) {
        statusCode = err.statusCode
        message = err.message
    }
    // 6. Otros errores: usar err.message si hay
    else if (err.message) {
        message = err.message
    }

    // Si el error es por tipo de archivo no permitido
    if (err.message && err.message.includes('Solo se permiten imágenes')) {
        statusCode = 400
        message = 'Tipo de archivo no permitido. Solo se permiten imágenes (jpeg, jpg, png, webp).'
    }

    // Loguear el error completo en consola solo en desarrollo
    if (!isProduction) {
        console.error('ERROR DETECTADO:', err)
    }

    // Respuesta JSON
    return res.status(statusCode).json({
        success: false,
        message,
        ...(details && {
            details
        }),
    })
}
