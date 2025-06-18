import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ConsultaCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    usuarioId: z.literal(true).optional(),
    mensaje: z.literal(true).optional(),
    leido: z.literal(true).optional(),
    creadoEn: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ConsultaCountAggregateInputObjectSchema = Schema;
