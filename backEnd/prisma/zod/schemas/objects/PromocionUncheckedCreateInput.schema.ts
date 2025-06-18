import { z } from 'zod';
import { PromoProductoUncheckedCreateNestedManyWithoutPromocionInputObjectSchema } from './PromoProductoUncheckedCreateNestedManyWithoutPromocionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromocionUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    titulo: z.string(),
    codigo: z.string().optional().nullable(),
    descripcion: z.string().optional().nullable(),
    imagenUrl: z.string().optional().nullable(),
    fechaInicio: z.coerce.date().optional(),
    fechaFin: z.coerce.date().optional().nullable(),
    activa: z.boolean().optional(),
    creadaEn: z.coerce.date().optional(),
    actualizadaEn: z.coerce.date().optional(),
    productos: z
      .lazy(
        () =>
          PromoProductoUncheckedCreateNestedManyWithoutPromocionInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PromocionUncheckedCreateInputObjectSchema = Schema;
