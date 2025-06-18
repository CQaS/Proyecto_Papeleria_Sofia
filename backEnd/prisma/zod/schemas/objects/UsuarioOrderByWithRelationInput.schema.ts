import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PedidoOrderByRelationAggregateInputObjectSchema } from './PedidoOrderByRelationAggregateInput.schema';
import { ConsultaOrderByRelationAggregateInputObjectSchema } from './ConsultaOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UsuarioOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    nombre: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    password: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    rol: z.lazy(() => SortOrderSchema).optional(),
    pedidos: z
      .lazy(() => PedidoOrderByRelationAggregateInputObjectSchema)
      .optional(),
    consultas: z
      .lazy(() => ConsultaOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const UsuarioOrderByWithRelationInputObjectSchema = Schema;
