import { z } from 'zod';
import { RolUsuarioSchema } from '../enums/RolUsuario.schema';
import { PedidoUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema } from './PedidoUncheckedCreateNestedManyWithoutUsuarioInput.schema';
import { ConsultaUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema } from './ConsultaUncheckedCreateNestedManyWithoutUsuarioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UsuarioUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    nombre: z.string(),
    apellido: z.string().optional().nullable(),
    email: z.string(),
    password: z.string().optional().nullable(),
    rol: z.lazy(() => RolUsuarioSchema).optional(),
    telefono: z.string().optional().nullable(),
    direccion: z.string().optional().nullable(),
    creadoEn: z.coerce.date().optional(),
    actualizadoEn: z.coerce.date().optional(),
    resetPasswordToken: z.string().optional().nullable(),
    resetPasswordExpires: z.coerce.date().optional().nullable(),
    pedidos: z
      .lazy(
        () => PedidoUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema,
      )
      .optional(),
    consultas: z
      .lazy(
        () => ConsultaUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UsuarioUncheckedCreateInputObjectSchema = Schema;
