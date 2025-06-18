import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PedidoMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    usuarioId: z.literal(true).optional(),
    archivoUrl: z.literal(true).optional(),
    detalles: z.literal(true).optional(),
    estado: z.literal(true).optional(),
    creadoEn: z.literal(true).optional(),
  })
  .strict();

export const PedidoMaxAggregateInputObjectSchema = Schema;
