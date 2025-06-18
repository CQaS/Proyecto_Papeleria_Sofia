import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromocionMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    titulo: z.lazy(() => SortOrderSchema).optional(),
    descripcion: z.lazy(() => SortOrderSchema).optional(),
    imagenUrl: z.lazy(() => SortOrderSchema).optional(),
    activa: z.lazy(() => SortOrderSchema).optional(),
    creadaEn: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const PromocionMaxOrderByAggregateInputObjectSchema = Schema;
