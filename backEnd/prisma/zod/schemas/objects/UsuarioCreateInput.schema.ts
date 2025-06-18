import { z } from 'zod';
import { RolUsuarioSchema } from '../enums/RolUsuario.schema';
import { PedidoCreateNestedManyWithoutUsuarioInputObjectSchema } from './PedidoCreateNestedManyWithoutUsuarioInput.schema';
import { ConsultaCreateNestedManyWithoutUsuarioInputObjectSchema } from './ConsultaCreateNestedManyWithoutUsuarioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UsuarioCreateInput> = z
  .object({
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
      .lazy(() => PedidoCreateNestedManyWithoutUsuarioInputObjectSchema)
      .optional(),
    consultas: z
      .lazy(() => ConsultaCreateNestedManyWithoutUsuarioInputObjectSchema)
      .optional(),
  })
  .strict();

export const UsuarioCreateInputObjectSchema = Schema;
