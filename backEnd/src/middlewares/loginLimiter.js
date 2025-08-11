import rateLimit from 'express-rate-limit';

export const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 5, // máximo 5 intentos en 15 minutos
    message: {
        success: false,
        message: 'Demasiados intentos, intente nuevamente en 15 minutos'
    }
})
