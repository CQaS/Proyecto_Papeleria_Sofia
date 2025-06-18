import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PromoProductoCountOrderByAggregateInputObjectSchema } from './PromoProductoCountOrderByAggregateInput.schema';
import { PromoProductoAvgOrderByAggregateInputObjectSchema } from './PromoProductoAvgOrderByAggregateInput.schema';
import { PromoProductoMaxOrderByAggregateInputObjectSchema } from './PromoProductoMaxOrderByAggregateInput.schema';
import { PromoProductoMinOrderByAggregateInputObjectSchema } from './PromoProductoMinOrderByAggregateInput.schema';
import { PromoProductoSumOrderByAggregateInputObjectSchema } from './PromoProductoSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    productoId: z.lazy(() => SortOrderSchema).optional(),
    promocionId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PromoProductoCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => PromoProductoAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => PromoProductoMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => PromoProductoMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => PromoProductoSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const PromoProductoOrderByWithAggregationInputObjectSchema = Schema;
