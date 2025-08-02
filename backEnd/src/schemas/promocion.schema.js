import {
    z
} from "zod"

export const PromocionSchema = z.object({
    titulo: z.string().min(3).max(100),
    codigo: z.string().max(50).optional().nullable(),
    descripcion: z.string().max(500).optional(),
    fechaInicio: z.coerce.date().optional(), // si no se envía, Prisma usa now()
    fechaFin: z.coerce.date().optional(),
    activa: z.coerce.boolean().optional()
})