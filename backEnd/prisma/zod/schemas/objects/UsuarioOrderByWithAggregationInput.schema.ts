import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UsuarioCountOrderByAggregateInputObjectSchema } from './UsuarioCountOrderByAggregateInput.schema';
import { UsuarioAvgOrderByAggregateInputObjectSchema } from './UsuarioAvgOrderByAggregateInput.schema';
import { UsuarioMaxOrderByAggregateInputObjectSchema } from './UsuarioMaxOrderByAggregateInput.schema';
import { UsuarioMinOrderByAggregateInputObjectSchema } from './UsuarioMinOrderByAggregateInput.schema';
import { UsuarioSumOrderByAggregateInputObjectSchema } from './UsuarioSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UsuarioOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    nombre: z.lazy(() => SortOrderSchema).optional(),
    apellido: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    password: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    rol: z.lazy(() => SortOrderSchema).optional(),
    telefono: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    direccion: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    creadoEn: z.lazy(() => SortOrderSchema).optional(),
    actualizadoEn: z.lazy(() => SortOrderSchema).optional(),
    resetPasswordToken: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    resetPasswordExpires: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => UsuarioCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => UsuarioAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => UsuarioMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => UsuarioMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => UsuarioSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const UsuarioOrderByWithAggregationInputObjectSchema = Schema;
