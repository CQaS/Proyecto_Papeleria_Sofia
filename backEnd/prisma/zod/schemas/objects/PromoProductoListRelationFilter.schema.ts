import { z } from 'zod';
import { PromoProductoWhereInputObjectSchema } from './PromoProductoWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoListRelationFilter> = z
  .object({
    every: z.lazy(() => PromoProductoWhereInputObjectSchema).optional(),
    some: z.lazy(() => PromoProductoWhereInputObjectSchema).optional(),
    none: z.lazy(() => PromoProductoWhereInputObjectSchema).optional(),
  })
  .strict();

export const PromoProductoListRelationFilterObjectSchema = Schema;
