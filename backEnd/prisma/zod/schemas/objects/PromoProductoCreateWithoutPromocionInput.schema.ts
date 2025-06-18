import { z } from 'zod';
import { ProductoCreateNestedOneWithoutPromosInputObjectSchema } from './ProductoCreateNestedOneWithoutPromosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoCreateWithoutPromocionInput> = z
  .object({
    producto: z.lazy(
      () => ProductoCreateNestedOneWithoutPromosInputObjectSchema,
    ),
  })
  .strict();

export const PromoProductoCreateWithoutPromocionInputObjectSchema = Schema;
