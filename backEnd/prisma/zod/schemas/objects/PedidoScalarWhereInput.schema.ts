import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PedidoScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PedidoScalarWhereInputObjectSchema),
        z.lazy(() => PedidoScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PedidoScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PedidoScalarWhereInputObjectSchema),
        z.lazy(() => PedidoScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    usuarioId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    archivoUrl: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    detalles: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    estado: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    creadoEn: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
  })
  .strict();

export const PedidoScalarWhereInputObjectSchema = Schema;
