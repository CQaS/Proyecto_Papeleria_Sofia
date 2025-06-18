import { z } from 'zod';
import { ProductoCreateNestedOneWithoutPromosInputObjectSchema } from './ProductoCreateNestedOneWithoutPromosInput.schema';
import { PromocionCreateNestedOneWithoutProductosInputObjectSchema } from './PromocionCreateNestedOneWithoutProductosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoCreateInput> = z
  .object({
    producto: z.lazy(
      () => ProductoCreateNestedOneWithoutPromosInputObjectSchema,
    ),
    promocion: z.lazy(
      () => PromocionCreateNestedOneWithoutProductosInputObjectSchema,
    ),
  })
  .strict();

export const PromoProductoCreateInputObjectSchema = Schema;
