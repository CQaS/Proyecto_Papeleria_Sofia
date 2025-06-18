import { z } from 'zod';
import { EstadoPedidoSchema } from '../enums/EstadoPedido.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PedidoCreateWithoutUsuarioInput> = z
  .object({
    archivoUrl: z.string(),
    detalles: z.string().optional().nullable(),
    estado: z.lazy(() => EstadoPedidoSchema).optional(),
    total: z.number().optional(),
    direccionEnvio: z.string().optional().nullable(),
    notasInternas: z.string().optional().nullable(),
    creadoEn: z.coerce.date().optional(),
    actualizadoEn: z.coerce.date().optional(),
  })
  .strict();

export const PedidoCreateWithoutUsuarioInputObjectSchema = Schema;
