import { z } from 'zod';
import { EstadoProductoSchema } from '../enums/EstadoProducto.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductoUncheckedCreateWithoutPromosInput> = z
  .object({
    id: z.number().optional(),
    nombre: z.string(),
    slug: z.string(),
    descripcion: z.string().optional().nullable(),
    precio: z.number(),
    stock: z.number().optional(),
    imagenUrl: z.string().optional().nullable(),
    creadoEn: z.coerce.date().optional(),
    actualizadoEn: z.coerce.date().optional(),
    estado: z.lazy(() => EstadoProductoSchema).optional(),
  })
  .strict();

export const ProductoUncheckedCreateWithoutPromosInputObjectSchema = Schema;
