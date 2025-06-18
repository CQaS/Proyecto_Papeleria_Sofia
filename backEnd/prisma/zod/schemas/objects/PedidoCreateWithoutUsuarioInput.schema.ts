import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PedidoCreateWithoutUsuarioInput> = z
  .object({
    archivoUrl: z.string(),
    detalles: z.string().optional().nullable(),
    estado: z.string().optional(),
    creadoEn: z.coerce.date().optional(),
  })
  .strict();

export const PedidoCreateWithoutUsuarioInputObjectSchema = Schema;
