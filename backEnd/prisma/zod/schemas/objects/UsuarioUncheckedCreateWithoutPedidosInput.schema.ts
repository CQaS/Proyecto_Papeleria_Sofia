import { z } from 'zod';
import { ConsultaUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema } from './ConsultaUncheckedCreateNestedManyWithoutUsuarioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UsuarioUncheckedCreateWithoutPedidosInput> = z
  .object({
    id: z.number().optional(),
    nombre: z.string(),
    email: z.string(),
    password: z.string().optional().nullable(),
    rol: z.string(),
    consultas: z
      .lazy(
        () => ConsultaUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UsuarioUncheckedCreateWithoutPedidosInputObjectSchema = Schema;
