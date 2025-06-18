import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ConsultaCountOrderByAggregateInputObjectSchema } from './ConsultaCountOrderByAggregateInput.schema';
import { ConsultaAvgOrderByAggregateInputObjectSchema } from './ConsultaAvgOrderByAggregateInput.schema';
import { ConsultaMaxOrderByAggregateInputObjectSchema } from './ConsultaMaxOrderByAggregateInput.schema';
import { ConsultaMinOrderByAggregateInputObjectSchema } from './ConsultaMinOrderByAggregateInput.schema';
import { ConsultaSumOrderByAggregateInputObjectSchema } from './ConsultaSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ConsultaOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    usuarioId: z.lazy(() => SortOrderSchema).optional(),
    mensaje: z.lazy(() => SortOrderSchema).optional(),
    respuesta: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    leido: z.lazy(() => SortOrderSchema).optional(),
    resuelto: z.lazy(() => SortOrderSchema).optional(),
    creadoEn: z.lazy(() => SortOrderSchema).optional(),
    actualizadoEn: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ConsultaCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ConsultaAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ConsultaMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ConsultaMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ConsultaSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ConsultaOrderByWithAggregationInputObjectSchema = Schema;
