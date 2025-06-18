import { z } from 'zod';
import { PromocionWhereInputObjectSchema } from './PromocionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromocionRelationFilter> = z
  .object({
    is: z
      .lazy(() => PromocionWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => PromocionWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const PromocionRelationFilterObjectSchema = Schema;
