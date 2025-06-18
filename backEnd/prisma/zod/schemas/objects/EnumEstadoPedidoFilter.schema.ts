import { z } from 'zod';
import { EstadoPedidoSchema } from '../enums/EstadoPedido.schema';
import { NestedEnumEstadoPedidoFilterObjectSchema } from './NestedEnumEstadoPedidoFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumEstadoPedidoFilter> = z
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
        z.lazy(() => NestedEnumEstadoPedidoFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EnumEstadoPedidoFilterObjectSchema = Schema;
