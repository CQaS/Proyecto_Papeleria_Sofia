import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProductoCountOrderByAggregateInputObjectSchema } from './ProductoCountOrderByAggregateInput.schema';
import { ProductoAvgOrderByAggregateInputObjectSchema } from './ProductoAvgOrderByAggregateInput.schema';
import { ProductoMaxOrderByAggregateInputObjectSchema } from './ProductoMaxOrderByAggregateInput.schema';
import { ProductoMinOrderByAggregateInputObjectSchema } from './ProductoMinOrderByAggregateInput.schema';
import { ProductoSumOrderByAggregateInputObjectSchema } from './ProductoSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductoOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    nombre: z.lazy(() => SortOrderSchema).optional(),
    slug: z.lazy(() => SortOrderSchema).optional(),
    descripcion: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    precio: z.lazy(() => SortOrderSchema).optional(),
    stock: z.lazy(() => SortOrderSchema).optional(),
    imagenUrl: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    creadoEn: z.lazy(() => SortOrderSchema).optional(),
    actualizadoEn: z.lazy(() => SortOrderSchema).optional(),
    estado: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ProductoCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ProductoAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ProductoMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ProductoMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ProductoSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ProductoOrderByWithAggregationInputObjectSchema = Schema;
