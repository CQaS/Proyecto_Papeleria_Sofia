import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PedidoMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    usuarioId: z.literal(true).optional(),
    archivoUrl: z.literal(true).optional(),
    detalles: z.literal(true).optional(),
    estado: z.literal(true).optional(),
    total: z.literal(true).optional(),
    direccionEnvio: z.literal(true).optional(),
    notasInternas: z.literal(true).optional(),
    creadoEn: z.literal(true).optional(),
    actualizadoEn: z.literal(true).optional(),
  })
  .strict();

export const PedidoMinAggregateInputObjectSchema = Schema;
