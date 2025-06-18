import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromocionCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    titulo: z.lazy(() => SortOrderSchema).optional(),
    codigo: z.lazy(() => SortOrderSchema).optional(),
    descripcion: z.lazy(() => SortOrderSchema).optional(),
    imagenUrl: z.lazy(() => SortOrderSchema).optional(),
    fechaInicio: z.lazy(() => SortOrderSchema).optional(),
    fechaFin: z.lazy(() => SortOrderSchema).optional(),
    activa: z.lazy(() => SortOrderSchema).optional(),
    creadaEn: z.lazy(() => SortOrderSchema).optional(),
    actualizadaEn: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const PromocionCountOrderByAggregateInputObjectSchema = Schema;
