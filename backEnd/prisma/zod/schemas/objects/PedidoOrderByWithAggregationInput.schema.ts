import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PedidoCountOrderByAggregateInputObjectSchema } from './PedidoCountOrderByAggregateInput.schema';
import { PedidoAvgOrderByAggregateInputObjectSchema } from './PedidoAvgOrderByAggregateInput.schema';
import { PedidoMaxOrderByAggregateInputObjectSchema } from './PedidoMaxOrderByAggregateInput.schema';
import { PedidoMinOrderByAggregateInputObjectSchema } from './PedidoMinOrderByAggregateInput.schema';
import { PedidoSumOrderByAggregateInputObjectSchema } from './PedidoSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PedidoOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    usuarioId: z.lazy(() => SortOrderSchema).optional(),
    archivoUrl: z.lazy(() => SortOrderSchema).optional(),
    detalles: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    estado: z.lazy(() => SortOrderSchema).optional(),
    total: z.lazy(() => SortOrderSchema).optional(),
    direccionEnvio: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    notasInternas: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    creadoEn: z.lazy(() => SortOrderSchema).optional(),
    actualizadoEn: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PedidoCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => PedidoAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => PedidoMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => PedidoMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => PedidoSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const PedidoOrderByWithAggregationInputObjectSchema = Schema;
