import { z } from 'zod';
import { EstadoProductoSchema } from '../enums/EstadoProducto.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumEstadoProductoFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => EstadoProductoSchema).optional(),
  })
  .strict();

export const EnumEstadoProductoFieldUpdateOperationsInputObjectSchema = Schema;
