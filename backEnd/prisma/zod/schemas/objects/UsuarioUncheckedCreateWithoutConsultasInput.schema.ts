import { z } from 'zod';
import { PedidoUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema } from './PedidoUncheckedCreateNestedManyWithoutUsuarioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UsuarioUncheckedCreateWithoutConsultasInput> = z
  .object({
    id: z.number().optional(),
    nombre: z.string(),
    email: z.string(),
    password: z.string().optional().nullable(),
    rol: z.string(),
    pedidos: z
      .lazy(
        () => PedidoUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UsuarioUncheckedCreateWithoutConsultasInputObjectSchema = Schema;
