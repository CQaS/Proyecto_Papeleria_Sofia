import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromocionMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    titulo: z.literal(true).optional(),
    codigo: z.literal(true).optional(),
    descripcion: z.literal(true).optional(),
    imagenUrl: z.literal(true).optional(),
    fechaInicio: z.literal(true).optional(),
    fechaFin: z.literal(true).optional(),
    activa: z.literal(true).optional(),
    creadaEn: z.literal(true).optional(),
    actualizadaEn: z.literal(true).optional(),
  })
  .strict();

export const PromocionMinAggregateInputObjectSchema = Schema;
