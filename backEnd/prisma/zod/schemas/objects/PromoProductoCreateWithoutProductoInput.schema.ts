import { z } from 'zod';
import { PromocionCreateNestedOneWithoutProductosInputObjectSchema } from './PromocionCreateNestedOneWithoutProductosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoCreateWithoutProductoInput> = z
  .object({
    promocion: z.lazy(
      () => PromocionCreateNestedOneWithoutProductosInputObjectSchema,
    ),
  })
  .strict();

export const PromoProductoCreateWithoutProductoInputObjectSchema = Schema;
