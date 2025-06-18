import { z } from 'zod';
import { PromoProductoProductoIdPromocionIdCompoundUniqueInputObjectSchema } from './PromoProductoProductoIdPromocionIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
    productoId_promocionId: z
      .lazy(
        () => PromoProductoProductoIdPromocionIdCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PromoProductoWhereUniqueInputObjectSchema = Schema;
