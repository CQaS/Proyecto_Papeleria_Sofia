import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductoMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    nombre: z.literal(true).optional(),
    descripcion: z.literal(true).optional(),
    precio: z.literal(true).optional(),
    imagenUrl: z.literal(true).optional(),
    creadoEn: z.literal(true).optional(),
    estado: z.literal(true).optional(),
  })
  .strict();

export const ProductoMinAggregateInputObjectSchema = Schema;
