import { z } from 'zod';
import { EstadoProductoSchema } from '../enums/EstadoProducto.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumEstadoProductoFilter> = z
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
        z.lazy(() => NestedEnumEstadoProductoFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const NestedEnumEstadoProductoFilterObjectSchema = Schema;
