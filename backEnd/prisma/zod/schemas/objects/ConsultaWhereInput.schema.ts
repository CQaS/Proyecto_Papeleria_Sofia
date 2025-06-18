import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UsuarioRelationFilterObjectSchema } from './UsuarioRelationFilter.schema';
import { UsuarioWhereInputObjectSchema } from './UsuarioWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ConsultaWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ConsultaWhereInputObjectSchema),
        z.lazy(() => ConsultaWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ConsultaWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ConsultaWhereInputObjectSchema),
        z.lazy(() => ConsultaWhereInputObjectSchema).array(),
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
    usuario: z
      .union([
        z.lazy(() => UsuarioRelationFilterObjectSchema),
        z.lazy(() => UsuarioWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ConsultaWhereInputObjectSchema = Schema;
