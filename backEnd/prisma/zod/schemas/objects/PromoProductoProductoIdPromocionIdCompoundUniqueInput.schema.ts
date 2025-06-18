import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoProductoIdPromocionIdCompoundUniqueInput> =
  z
    .object({
      productoId: z.number(),
      promocionId: z.number(),
    })
    .strict();

export const PromoProductoProductoIdPromocionIdCompoundUniqueInputObjectSchema =
  Schema;
