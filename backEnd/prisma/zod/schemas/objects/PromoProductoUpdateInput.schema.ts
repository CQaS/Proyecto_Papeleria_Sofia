import { z } from 'zod';
import { ProductoUpdateOneRequiredWithoutPromosNestedInputObjectSchema } from './ProductoUpdateOneRequiredWithoutPromosNestedInput.schema';
import { PromocionUpdateOneRequiredWithoutProductosNestedInputObjectSchema } from './PromocionUpdateOneRequiredWithoutProductosNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoUpdateInput> = z
  .object({
    producto: z
      .lazy(() => ProductoUpdateOneRequiredWithoutPromosNestedInputObjectSchema)
      .optional(),
    promocion: z
      .lazy(
        () => PromocionUpdateOneRequiredWithoutProductosNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PromoProductoUpdateInputObjectSchema = Schema;
