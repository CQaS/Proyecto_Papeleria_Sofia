import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ConsultaCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    usuarioId: z.lazy(() => SortOrderSchema).optional(),
    mensaje: z.lazy(() => SortOrderSchema).optional(),
    respuesta: z.lazy(() => SortOrderSchema).optional(),
    leido: z.lazy(() => SortOrderSchema).optional(),
    resuelto: z.lazy(() => SortOrderSchema).optional(),
    creadoEn: z.lazy(() => SortOrderSchema).optional(),
    actualizadoEn: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ConsultaCountOrderByAggregateInputObjectSchema = Schema;
