import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ConsultaMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    usuarioId: z.literal(true).optional(),
    mensaje: z.literal(true).optional(),
    respuesta: z.literal(true).optional(),
    leido: z.literal(true).optional(),
    resuelto: z.literal(true).optional(),
    creadoEn: z.literal(true).optional(),
    actualizadoEn: z.literal(true).optional(),
  })
  .strict();

export const ConsultaMinAggregateInputObjectSchema = Schema;
