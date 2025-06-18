import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumEstadoProductoFilterObjectSchema } from './EnumEstadoProductoFilter.schema';
import { EstadoProductoSchema } from '../enums/EstadoProducto.schema';
import { PromoProductoListRelationFilterObjectSchema } from './PromoProductoListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductoWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProductoWhereInputObjectSchema),
        z.lazy(() => ProductoWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProductoWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProductoWhereInputObjectSchema),
        z.lazy(() => ProductoWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    nombre: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    slug: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    descripcion: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    precio: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    stock: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    imagenUrl: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    creadoEn: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    actualizadoEn: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    estado: z
      .union([
        z.lazy(() => EnumEstadoProductoFilterObjectSchema),
        z.lazy(() => EstadoProductoSchema),
      ])
      .optional(),
    promos: z
      .lazy(() => PromoProductoListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const ProductoWhereInputObjectSchema = Schema;
