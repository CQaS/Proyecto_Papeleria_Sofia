import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductoAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    precio: z.literal(true).optional(),
    stock: z.literal(true).optional(),
  })
  .strict();

export const ProductoAvgAggregateInputObjectSchema = Schema;
