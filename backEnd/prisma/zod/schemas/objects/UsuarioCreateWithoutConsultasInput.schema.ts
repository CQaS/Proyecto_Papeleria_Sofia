import { z } from 'zod';
import { PedidoCreateNestedManyWithoutUsuarioInputObjectSchema } from './PedidoCreateNestedManyWithoutUsuarioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UsuarioCreateWithoutConsultasInput> = z
  .object({
    nombre: z.string(),
    email: z.string(),
    password: z.string().optional().nullable(),
    rol: z.string(),
    pedidos: z
      .lazy(() => PedidoCreateNestedManyWithoutUsuarioInputObjectSchema)
      .optional(),
  })
  .strict();

export const UsuarioCreateWithoutConsultasInputObjectSchema = Schema;
