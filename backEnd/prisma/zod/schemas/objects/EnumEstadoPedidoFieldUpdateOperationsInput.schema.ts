import { z } from 'zod';
import { EstadoPedidoSchema } from '../enums/EstadoPedido.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumEstadoPedidoFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => EstadoPedidoSchema).optional(),
  })
  .strict();

export const EnumEstadoPedidoFieldUpdateOperationsInputObjectSchema = Schema;
