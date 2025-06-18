import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PedidoMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    usuarioId: z.lazy(() => SortOrderSchema).optional(),
    archivoUrl: z.lazy(() => SortOrderSchema).optional(),
    detalles: z.lazy(() => SortOrderSchema).optional(),
    estado: z.lazy(() => SortOrderSchema).optional(),
    total: z.lazy(() => SortOrderSchema).optional(),
    direccionEnvio: z.lazy(() => SortOrderSchema).optional(),
    notasInternas: z.lazy(() => SortOrderSchema).optional(),
    creadoEn: z.lazy(() => SortOrderSchema).optional(),
    actualizadoEn: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const PedidoMinOrderByAggregateInputObjectSchema = Schema;
