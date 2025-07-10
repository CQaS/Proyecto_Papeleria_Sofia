import {
    z
} from "zod";

export const PromocionSchema = z.object({
    titulo: z.string().min(3).max(100),
    codigo: z.string().max(50).optional().nullable(),
    descripcion: z.string().max(500).optional(),
    imagenUrl: z.string().url().optional(),
    fechaInicio: z.coerce.date().optional(), // si no se envía, Prisma usa now()
    fechaFin: z.coerce.date().optional(),
    activa: z.boolean().optional(), // por defecto true en la base
    productos: z.array(z.number()).min(1, "Debe seleccionar al menos un producto")
});