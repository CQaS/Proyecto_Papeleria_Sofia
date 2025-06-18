import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromocionCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    titulo: z.literal(true).optional(),
    descripcion: z.literal(true).optional(),
    imagenUrl: z.literal(true).optional(),
    activa: z.literal(true).optional(),
    creadaEn: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const PromocionCountAggregateInputObjectSchema = Schema;
