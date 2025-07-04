import {
    z
} from "zod"

export const UsuarioSchema = z.object({
    nombre: z.string().min(1),
    apellido: z.string().optional(),
    email: z.string().email(),
    password: z.string().min(6).optional(),
    rol: z.enum(["ADMIN", "CLIENTE", "EMPLEADO"]).optional(),
    telefono: z.string().optional(),
    direccion: z.string().optional(),
    estado: z.enum(["ACTIVO", "INACTIVO", "PENDIENTE", "BLOQUEADO"]).default("ACTIVO"),
    creadoEn: z.date().optional(),
    actualizadoEn: z.date().optional(),
    resetPasswordToken: z.string().optional(),
    resetPasswordExpires: z.date().optional(),
})