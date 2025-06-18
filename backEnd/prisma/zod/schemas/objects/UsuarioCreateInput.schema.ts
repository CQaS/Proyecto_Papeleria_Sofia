import { z } from 'zod';
import { PedidoCreateNestedManyWithoutUsuarioInputObjectSchema } from './PedidoCreateNestedManyWithoutUsuarioInput.schema';
import { ConsultaCreateNestedManyWithoutUsuarioInputObjectSchema } from './ConsultaCreateNestedManyWithoutUsuarioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UsuarioCreateInput> = z
  .object({
    nombre: z.string(),
    email: z.string(),
    password: z.string().optional().nullable(),
    rol: z.string(),
    pedidos: z
      .lazy(() => PedidoCreateNestedManyWithoutUsuarioInputObjectSchema)
      .optional(),
    consultas: z
      .lazy(() => ConsultaCreateNestedManyWithoutUsuarioInputObjectSchema)
      .optional(),
  })
  .strict();

export const UsuarioCreateInputObjectSchema = Schema;
