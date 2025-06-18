import { z } from 'zod';
import { UsuarioCreateWithoutPedidosInputObjectSchema } from './UsuarioCreateWithoutPedidosInput.schema';
import { UsuarioUncheckedCreateWithoutPedidosInputObjectSchema } from './UsuarioUncheckedCreateWithoutPedidosInput.schema';
import { UsuarioCreateOrConnectWithoutPedidosInputObjectSchema } from './UsuarioCreateOrConnectWithoutPedidosInput.schema';
import { UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UsuarioCreateNestedOneWithoutPedidosInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UsuarioCreateWithoutPedidosInputObjectSchema),
        z.lazy(() => UsuarioUncheckedCreateWithoutPedidosInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UsuarioCreateOrConnectWithoutPedidosInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UsuarioWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UsuarioCreateNestedOneWithoutPedidosInputObjectSchema = Schema;
