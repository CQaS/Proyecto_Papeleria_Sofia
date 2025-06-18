import { z } from 'zod';
import { PromocionUpdateOneRequiredWithoutProductosNestedInputObjectSchema } from './PromocionUpdateOneRequiredWithoutProductosNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoUpdateWithoutProductoInput> = z
  .object({
    promocion: z
      .lazy(
        () => PromocionUpdateOneRequiredWithoutProductosNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PromoProductoUpdateWithoutProductoInputObjectSchema = Schema;
