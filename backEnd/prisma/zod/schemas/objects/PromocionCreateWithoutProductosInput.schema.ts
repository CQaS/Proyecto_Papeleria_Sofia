import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromocionCreateWithoutProductosInput> = z
  .object({
    titulo: z.string(),
    descripcion: z.string().optional().nullable(),
    imagenUrl: z.string().optional().nullable(),
    activa: z.boolean().optional(),
    creadaEn: z.coerce.date().optional(),
  })
  .strict();

export const PromocionCreateWithoutProductosInputObjectSchema = Schema;
