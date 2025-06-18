import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PromocionCountOrderByAggregateInputObjectSchema } from './PromocionCountOrderByAggregateInput.schema';
import { PromocionAvgOrderByAggregateInputObjectSchema } from './PromocionAvgOrderByAggregateInput.schema';
import { PromocionMaxOrderByAggregateInputObjectSchema } from './PromocionMaxOrderByAggregateInput.schema';
import { PromocionMinOrderByAggregateInputObjectSchema } from './PromocionMinOrderByAggregateInput.schema';
import { PromocionSumOrderByAggregateInputObjectSchema } from './PromocionSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromocionOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    titulo: z.lazy(() => SortOrderSchema).optional(),
    descripcion: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    imagenUrl: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    activa: z.lazy(() => SortOrderSchema).optional(),
    creadaEn: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PromocionCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => PromocionAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => PromocionMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => PromocionMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => PromocionSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const PromocionOrderByWithAggregationInputObjectSchema = Schema;
