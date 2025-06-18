import { z } from 'zod';
import { EstadoProductoSchema } from '../enums/EstadoProducto.schema';
import { PromoProductoUncheckedCreateNestedManyWithoutProductoInputObjectSchema } from './PromoProductoUncheckedCreateNestedManyWithoutProductoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductoUncheckedCreateInput> = z
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
    promos: z
      .lazy(
        () =>
          PromoProductoUncheckedCreateNestedManyWithoutProductoInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProductoUncheckedCreateInputObjectSchema = Schema;
