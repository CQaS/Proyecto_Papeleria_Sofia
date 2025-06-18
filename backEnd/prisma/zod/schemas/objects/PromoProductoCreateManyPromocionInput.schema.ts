import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoCreateManyPromocionInput> = z
  .object({
    id: z.number().optional(),
    productoId: z.number(),
  })
  .strict();

export const PromoProductoCreateManyPromocionInputObjectSchema = Schema;
