import { z } from 'zod';
import { PromoProductoUncheckedCreateNestedManyWithoutPromocionInputObjectSchema } from './PromoProductoUncheckedCreateNestedManyWithoutPromocionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromocionUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    titulo: z.string(),
    descripcion: z.string().optional().nullable(),
    imagenUrl: z.string().optional().nullable(),
    activa: z.boolean().optional(),
    creadaEn: z.coerce.date().optional(),
    productos: z
      .lazy(
        () =>
          PromoProductoUncheckedCreateNestedManyWithoutPromocionInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PromocionUncheckedCreateInputObjectSchema = Schema;
