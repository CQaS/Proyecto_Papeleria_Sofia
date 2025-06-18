import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoCreateManyInput> = z
  .object({
    id: z.number().optional(),
    productoId: z.number(),
    promocionId: z.number(),
  })
  .strict();

export const PromoProductoCreateManyInputObjectSchema = Schema;
