import {
    z
} from "zod"

export const ConsultaSchema = z.object({
    nombre: z
        .string()
        .min(2, "El nombre debe tener al menos 2 caracteres")
        .max(100, "El nombre no puede superar los 100 caracteres"),
    email: z
        .string()
        .email("Debe ser un correo electrónico válido")
        .max(100, "El correo no puede superar los 100 caracteres"),
    telefono: z
        .string()
        .min(6, "El teléfono debe tener al menos 6 caracteres")
        .max(20, "El teléfono no puede superar los 20 caracteres"),
    mensaje: z
        .string()
        .min(10, "El mensaje debe tener al menos 10 caracteres")
        .max(2000, "El mensaje no puede superar los 2000 caracteres"),
})