import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { PedidoListRelationFilterObjectSchema } from './PedidoListRelationFilter.schema';
import { ConsultaListRelationFilterObjectSchema } from './ConsultaListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UsuarioWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UsuarioWhereInputObjectSchema),
        z.lazy(() => UsuarioWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UsuarioWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UsuarioWhereInputObjectSchema),
        z.lazy(() => UsuarioWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    nombre: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    password: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    rol: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    pedidos: z.lazy(() => PedidoListRelationFilterObjectSchema).optional(),
    consultas: z.lazy(() => ConsultaListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const UsuarioWhereInputObjectSchema = Schema;
