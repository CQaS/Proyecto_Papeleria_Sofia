import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PedidoAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    usuarioId: z.literal(true).optional(),
    total: z.literal(true).optional(),
  })
  .strict();

export const PedidoAvgAggregateInputObjectSchema = Schema;
