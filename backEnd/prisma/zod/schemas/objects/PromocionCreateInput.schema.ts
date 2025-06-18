import { z } from 'zod';
import { PromoProductoCreateNestedManyWithoutPromocionInputObjectSchema } from './PromoProductoCreateNestedManyWithoutPromocionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromocionCreateInput> = z
  .object({
    titulo: z.string(),
    descripcion: z.string().optional().nullable(),
    imagenUrl: z.string().optional().nullable(),
    activa: z.boolean().optional(),
    creadaEn: z.coerce.date().optional(),
    productos: z
      .lazy(
        () => PromoProductoCreateNestedManyWithoutPromocionInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PromocionCreateInputObjectSchema = Schema;
