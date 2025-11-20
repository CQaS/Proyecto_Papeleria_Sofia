import {
    z
} from "zod";

export const PedidoSchema = z.object({
    usuarioId: z.string().cuid(),

    archivo: z.string().optional(),

    tamano: z.enum(["A4", "A5", "A3", "Carta", "Oficio"]),
    tipoPapel: z.enum(["Bond", "Opalina", "Couche", "Reciclado"]),
    acabado: z.enum(["Mate", "Brillante", "Satinado", "Texturizado"]),
    calidad: z.enum(["Económica", "Estándar", "Alta_Calidad", "Premium"]),

    cantidad: z.number().int().positive(),
    orientacion: z.enum(["VERTICAL", "HORIZONTAL"]).default("VERTICAL"),

    dobleFaz: z.boolean().default(false),
    encuadernado: z.boolean().default(false),
    perforado: z.boolean().default(false),
    grapado: z.boolean().default(false),

    delivery: z.boolean().default(false),

    fechaEntrega: z.string().datetime().optional(),
    horaEntrega: z.string().optional(),

    subtotal: z.number().nonnegative(),
    iva: z.number().nonnegative(),
    total: z.number().positive(),

    comentarios: z.string().max(2000).optional(),
    direccionEnvio: z.string().max(255).optional(),

    estado: z.enum(["PENDIENTE", "EN_PROCESO", "LISTO", "ENTREGADO", "CANCELADO"]).default("PENDIENTE"),
});
