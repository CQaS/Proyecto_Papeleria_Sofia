import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { ProductoRelationFilterObjectSchema } from './ProductoRelationFilter.schema';
import { ProductoWhereInputObjectSchema } from './ProductoWhereInput.schema';
import { PromocionRelationFilterObjectSchema } from './PromocionRelationFilter.schema';
import { PromocionWhereInputObjectSchema } from './PromocionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PromoProductoWhereInputObjectSchema),
        z.lazy(() => PromoProductoWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PromoProductoWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PromoProductoWhereInputObjectSchema),
        z.lazy(() => PromoProductoWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    productoId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    promocionId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    producto: z
      .union([
        z.lazy(() => ProductoRelationFilterObjectSchema),
        z.lazy(() => ProductoWhereInputObjectSchema),
      ])
      .optional(),
    promocion: z
      .union([
        z.lazy(() => PromocionRelationFilterObjectSchema),
        z.lazy(() => PromocionWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const PromoProductoWhereInputObjectSchema = Schema;
