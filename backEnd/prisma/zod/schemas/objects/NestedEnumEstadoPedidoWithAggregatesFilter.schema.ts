import { z } from 'zod';
import { EstadoPedidoSchema } from '../enums/EstadoPedido.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumEstadoPedidoFilterObjectSchema } from './NestedEnumEstadoPedidoFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumEstadoPedidoWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => EstadoPedidoSchema).optional(),
    in: z
      .union([
        z.lazy(() => EstadoPedidoSchema).array(),
        z.lazy(() => EstadoPedidoSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => EstadoPedidoSchema).array(),
        z.lazy(() => EstadoPedidoSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => EstadoPedidoSchema),
        z.lazy(() => NestedEnumEstadoPedidoWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumEstadoPedidoFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumEstadoPedidoFilterObjectSchema).optional(),
  })
  .strict();

export const NestedEnumEstadoPedidoWithAggregatesFilterObjectSchema = Schema;
