// src/schemas/pedido.schema.js
import {
    z
} from "zod";

export const PedidoEstadoActualizarSchema = z.object({
    estado: z.enum([
        "PENDIENTE",
        "EN_PROCESO",
        "LISTO_PARA_RETIRO",
        "EN_CAMINO",
        "ENTREGADO",
        "CANCELADO"
    ]).optional(),
    notasInternas: z
        .string()
        .min(5, "Las notas internas deben tener al menos 5 caracteres")
        .max(500)
        .optional()
})