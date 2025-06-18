import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    productoId: z.literal(true).optional(),
    promocionId: z.literal(true).optional(),
  })
  .strict();

export const PromoProductoMinAggregateInputObjectSchema = Schema;
