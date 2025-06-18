import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoSumOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    productoId: z.lazy(() => SortOrderSchema).optional(),
    promocionId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const PromoProductoSumOrderByAggregateInputObjectSchema = Schema;
