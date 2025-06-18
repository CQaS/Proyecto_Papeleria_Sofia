import { z } from 'zod';
import { ProductoWhereInputObjectSchema } from './ProductoWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductoRelationFilter> = z
  .object({
    is: z
      .lazy(() => ProductoWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ProductoWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ProductoRelationFilterObjectSchema = Schema;
