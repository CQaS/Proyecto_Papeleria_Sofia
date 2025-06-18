import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductoMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    nombre: z.lazy(() => SortOrderSchema).optional(),
    slug: z.lazy(() => SortOrderSchema).optional(),
    descripcion: z.lazy(() => SortOrderSchema).optional(),
    precio: z.lazy(() => SortOrderSchema).optional(),
    stock: z.lazy(() => SortOrderSchema).optional(),
    imagenUrl: z.lazy(() => SortOrderSchema).optional(),
    creadoEn: z.lazy(() => SortOrderSchema).optional(),
    actualizadoEn: z.lazy(() => SortOrderSchema).optional(),
    estado: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ProductoMinOrderByAggregateInputObjectSchema = Schema;
