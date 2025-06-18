import { z } from 'zod';
import { UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';
import { UsuarioCreateWithoutPedidosInputObjectSchema } from './UsuarioCreateWithoutPedidosInput.schema';
import { UsuarioUncheckedCreateWithoutPedidosInputObjectSchema } from './UsuarioUncheckedCreateWithoutPedidosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UsuarioCreateOrConnectWithoutPedidosInput> = z
  .object({
    where: z.lazy(() => UsuarioWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UsuarioCreateWithoutPedidosInputObjectSchema),
      z.lazy(() => UsuarioUncheckedCreateWithoutPedidosInputObjectSchema),
    ]),
  })
  .strict();

export const UsuarioCreateOrConnectWithoutPedidosInputObjectSchema = Schema;
