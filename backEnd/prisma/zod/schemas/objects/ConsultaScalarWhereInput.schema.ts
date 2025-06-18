import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ConsultaScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ConsultaScalarWhereInputObjectSchema),
        z.lazy(() => ConsultaScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ConsultaScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ConsultaScalarWhereInputObjectSchema),
        z.lazy(() => ConsultaScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    usuarioId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    mensaje: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    leido: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    creadoEn: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
  })
  .strict();

export const ConsultaScalarWhereInputObjectSchema = Schema;
