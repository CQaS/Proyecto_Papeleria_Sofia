import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    productoId: z.number(),
    promocionId: z.number(),
  })
  .strict();

export const PromoProductoUncheckedCreateInputObjectSchema = Schema;
