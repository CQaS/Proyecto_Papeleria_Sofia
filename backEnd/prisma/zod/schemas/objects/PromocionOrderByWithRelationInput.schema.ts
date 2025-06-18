import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PromoProductoOrderByRelationAggregateInputObjectSchema } from './PromoProductoOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromocionOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    titulo: z.lazy(() => SortOrderSchema).optional(),
    codigo: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
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
    fechaInicio: z.lazy(() => SortOrderSchema).optional(),
    fechaFin: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    activa: z.lazy(() => SortOrderSchema).optional(),
    creadaEn: z.lazy(() => SortOrderSchema).optional(),
    actualizadaEn: z.lazy(() => SortOrderSchema).optional(),
    productos: z
      .lazy(() => PromoProductoOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const PromocionOrderByWithRelationInputObjectSchema = Schema;
