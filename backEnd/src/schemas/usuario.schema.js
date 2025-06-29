import {
    z
} from "zod"

export const Usuario = z.object({
    nombre: z.string().min(1),
    apellido: z.string().optional(),
    email: z.string().email(),
    password: z.string().min(6).optional(),
    rol: z.enum(["ADMIN", "CLIENTE", "EMPLEADO"]).optional(),
    telefono: z.string().optional(),
    direccion: z.string().optional(),
})