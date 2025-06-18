import { z } from 'zod';
import { ProductoUpdateOneRequiredWithoutPromosNestedInputObjectSchema } from './ProductoUpdateOneRequiredWithoutPromosNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoUpdateWithoutPromocionInput> = z
  .object({
    producto: z
      .lazy(() => ProductoUpdateOneRequiredWithoutPromosNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const PromoProductoUpdateWithoutPromocionInputObjectSchema = Schema;
