import { z } from 'zod';
import { EstadoProductoSchema } from '../enums/EstadoProducto.schema';
import { NestedEnumEstadoProductoWithAggregatesFilterObjectSchema } from './NestedEnumEstadoProductoWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumEstadoProductoFilterObjectSchema } from './NestedEnumEstadoProductoFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumEstadoProductoWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => EstadoProductoSchema).optional(),
    in: z
      .union([
        z.lazy(() => EstadoProductoSchema).array(),
        z.lazy(() => EstadoProductoSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => EstadoProductoSchema).array(),
        z.lazy(() => EstadoProductoSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => EstadoProductoSchema),
        z.lazy(() => NestedEnumEstadoProductoWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumEstadoProductoFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumEstadoProductoFilterObjectSchema).optional(),
  })
  .strict();

export const EnumEstadoProductoWithAggregatesFilterObjectSchema = Schema;
