import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoUncheckedCreateWithoutPromocionInput> =
  z
    .object({
      id: z.number().optional(),
      productoId: z.number(),
    })
    .strict();

export const PromoProductoUncheckedCreateWithoutPromocionInputObjectSchema =
  Schema;
