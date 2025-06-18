import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductoSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    precio: z.literal(true).optional(),
    stock: z.literal(true).optional(),
  })
  .strict();

export const ProductoSumAggregateInputObjectSchema = Schema;
