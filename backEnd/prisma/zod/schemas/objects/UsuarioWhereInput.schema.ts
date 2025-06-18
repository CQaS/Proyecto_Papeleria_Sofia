import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumRolUsuarioFilterObjectSchema } from './EnumRolUsuarioFilter.schema';
import { RolUsuarioSchema } from '../enums/RolUsuario.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
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
    apellido: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    password: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    rol: z
      .union([
        z.lazy(() => EnumRolUsuarioFilterObjectSchema),
        z.lazy(() => RolUsuarioSchema),
      ])
      .optional(),
    telefono: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    direccion: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    creadoEn: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    actualizadoEn: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    resetPasswordToken: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    resetPasswordExpires: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    pedidos: z.lazy(() => PedidoListRelationFilterObjectSchema).optional(),
    consultas: z.lazy(() => ConsultaListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const UsuarioWhereInputObjectSchema = Schema;
