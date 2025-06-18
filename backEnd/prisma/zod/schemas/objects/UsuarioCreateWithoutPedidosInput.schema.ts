import { z } from 'zod';
import { ConsultaCreateNestedManyWithoutUsuarioInputObjectSchema } from './ConsultaCreateNestedManyWithoutUsuarioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UsuarioCreateWithoutPedidosInput> = z
  .object({
    nombre: z.string(),
    email: z.string(),
    password: z.string().optional().nullable(),
    rol: z.string(),
    consultas: z
      .lazy(() => ConsultaCreateNestedManyWithoutUsuarioInputObjectSchema)
      .optional(),
  })
  .strict();

export const UsuarioCreateWithoutPedidosInputObjectSchema = Schema;
