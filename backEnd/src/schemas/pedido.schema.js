import {
    z
} from "zod";

export const PedidoSchema = z.object({
    archivoUrl: z
        .string()
        .url("Debe ser una URL válida del archivo PDF"),
    detalles: z
        .string()
        .min(5, "Los detalles deben tener al menos 5 caracteres")
        .max(1000)
        .optional(),
    total: z
        .number()
        .positive("El total debe ser un número positivo"),
    direccionEnvio: z
        .string()
        .min(5, "La dirección de envío es obligatoria")
        .max(255)
        .optional(),
    estado: z.enum([
        "PENDIENTE",
        "EN_PROCESO",
        "LISTO_PARA_RETIRO",
        "EN_CAMINO",
        "ENTREGADO",
        "CANCELADO"
    ]).optional(),
    usuarioId: z.number()
})