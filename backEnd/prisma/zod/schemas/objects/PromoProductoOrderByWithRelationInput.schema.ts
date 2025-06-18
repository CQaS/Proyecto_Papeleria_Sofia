import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductoOrderByWithRelationInputObjectSchema } from './ProductoOrderByWithRelationInput.schema';
import { PromocionOrderByWithRelationInputObjectSchema } from './PromocionOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    productoId: z.lazy(() => SortOrderSchema).optional(),
    promocionId: z.lazy(() => SortOrderSchema).optional(),
    producto: z
      .lazy(() => ProductoOrderByWithRelationInputObjectSchema)
      .optional(),
    promocion: z
      .lazy(() => PromocionOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const PromoProductoOrderByWithRelationInputObjectSchema = Schema;
