import { z } from 'zod';
import { PromoProductoUncheckedCreateNestedManyWithoutProductoInputObjectSchema } from './PromoProductoUncheckedCreateNestedManyWithoutProductoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductoUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    nombre: z.string(),
    descripcion: z.string().optional().nullable(),
    precio: z.number(),
    imagenUrl: z.string().optional().nullable(),
    creadoEn: z.coerce.date().optional(),
    estado: z.number().optional(),
    promos: z
      .lazy(
        () =>
          PromoProductoUncheckedCreateNestedManyWithoutProductoInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProductoUncheckedCreateInputObjectSchema = Schema;
