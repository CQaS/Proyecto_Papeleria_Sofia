import { z } from 'zod';
import { PromoProductoCreateNestedManyWithoutProductoInputObjectSchema } from './PromoProductoCreateNestedManyWithoutProductoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductoCreateInput> = z
  .object({
    nombre: z.string(),
    descripcion: z.string().optional().nullable(),
    precio: z.number(),
    imagenUrl: z.string().optional().nullable(),
    creadoEn: z.coerce.date().optional(),
    estado: z.number().optional(),
    promos: z
      .lazy(() => PromoProductoCreateNestedManyWithoutProductoInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductoCreateInputObjectSchema = Schema;
