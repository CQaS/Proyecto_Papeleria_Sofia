import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UsuarioCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    nombre: z.lazy(() => SortOrderSchema).optional(),
    apellido: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    password: z.lazy(() => SortOrderSchema).optional(),
    rol: z.lazy(() => SortOrderSchema).optional(),
    telefono: z.lazy(() => SortOrderSchema).optional(),
    direccion: z.lazy(() => SortOrderSchema).optional(),
    creadoEn: z.lazy(() => SortOrderSchema).optional(),
    actualizadoEn: z.lazy(() => SortOrderSchema).optional(),
    resetPasswordToken: z.lazy(() => SortOrderSchema).optional(),
    resetPasswordExpires: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const UsuarioCountOrderByAggregateInputObjectSchema = Schema;
