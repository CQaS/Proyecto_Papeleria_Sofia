import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { PromoProductoListRelationFilterObjectSchema } from './PromoProductoListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromocionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PromocionWhereInputObjectSchema),
        z.lazy(() => PromocionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PromocionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PromocionWhereInputObjectSchema),
        z.lazy(() => PromocionWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    titulo: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    descripcion: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    imagenUrl: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    activa: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    creadaEn: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    productos: z
      .lazy(() => PromoProductoListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const PromocionWhereInputObjectSchema = Schema;
