import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumEstadoPedidoFilterObjectSchema } from './EnumEstadoPedidoFilter.schema';
import { EstadoPedidoSchema } from '../enums/EstadoPedido.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UsuarioRelationFilterObjectSchema } from './UsuarioRelationFilter.schema';
import { UsuarioWhereInputObjectSchema } from './UsuarioWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PedidoWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PedidoWhereInputObjectSchema),
        z.lazy(() => PedidoWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PedidoWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PedidoWhereInputObjectSchema),
        z.lazy(() => PedidoWhereInputObjectSchema).array(),
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
      .union([
        z.lazy(() => EnumEstadoPedidoFilterObjectSchema),
        z.lazy(() => EstadoPedidoSchema),
      ])
      .optional(),
    total: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    direccionEnvio: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    notasInternas: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    creadoEn: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    actualizadoEn: z
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

export const PedidoWhereInputObjectSchema = Schema;
