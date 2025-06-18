import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductoUncheckedCreateWithoutPromosInput> = z
  .object({
    id: z.number().optional(),
    nombre: z.string(),
    descripcion: z.string().optional().nullable(),
    precio: z.number(),
    imagenUrl: z.string().optional().nullable(),
    creadoEn: z.coerce.date().optional(),
    estado: z.number().optional(),
  })
  .strict();

export const ProductoUncheckedCreateWithoutPromosInputObjectSchema = Schema;
