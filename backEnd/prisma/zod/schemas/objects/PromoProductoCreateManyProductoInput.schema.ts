import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoCreateManyProductoInput> = z
  .object({
    id: z.number().optional(),
    promocionId: z.number(),
  })
  .strict();

export const PromoProductoCreateManyProductoInputObjectSchema = Schema;
