import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PromoProductoOrderByRelationAggregateInputObjectSchema } from './PromoProductoOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductoOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    nombre: z.lazy(() => SortOrderSchema).optional(),
    descripcion: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    precio: z.lazy(() => SortOrderSchema).optional(),
    imagenUrl: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    creadoEn: z.lazy(() => SortOrderSchema).optional(),
    estado: z.lazy(() => SortOrderSchema).optional(),
    promos: z
      .lazy(() => PromoProductoOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductoOrderByWithRelationInputObjectSchema = Schema;
