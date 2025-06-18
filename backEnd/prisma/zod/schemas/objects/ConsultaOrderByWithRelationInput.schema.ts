import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UsuarioOrderByWithRelationInputObjectSchema } from './UsuarioOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ConsultaOrderByWithRelationInput> = z
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
    usuario: z
      .lazy(() => UsuarioOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const ConsultaOrderByWithRelationInputObjectSchema = Schema;
