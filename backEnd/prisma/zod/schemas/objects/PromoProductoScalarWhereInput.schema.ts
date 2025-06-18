import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PromoProductoScalarWhereInputObjectSchema),
        z.lazy(() => PromoProductoScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PromoProductoScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PromoProductoScalarWhereInputObjectSchema),
        z.lazy(() => PromoProductoScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    productoId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    promocionId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const PromoProductoScalarWhereInputObjectSchema = Schema;
