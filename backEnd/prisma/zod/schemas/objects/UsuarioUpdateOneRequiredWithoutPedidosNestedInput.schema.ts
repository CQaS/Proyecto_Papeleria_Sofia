import { z } from 'zod';
import { UsuarioCreateWithoutPedidosInputObjectSchema } from './UsuarioCreateWithoutPedidosInput.schema';
import { UsuarioUncheckedCreateWithoutPedidosInputObjectSchema } from './UsuarioUncheckedCreateWithoutPedidosInput.schema';
import { UsuarioCreateOrConnectWithoutPedidosInputObjectSchema } from './UsuarioCreateOrConnectWithoutPedidosInput.schema';
import { UsuarioUpsertWithoutPedidosInputObjectSchema } from './UsuarioUpsertWithoutPedidosInput.schema';
import { UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';
import { UsuarioUpdateWithoutPedidosInputObjectSchema } from './UsuarioUpdateWithoutPedidosInput.schema';
import { UsuarioUncheckedUpdateWithoutPedidosInputObjectSchema } from './UsuarioUncheckedUpdateWithoutPedidosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UsuarioUpdateOneRequiredWithoutPedidosNestedInput> =
  z
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
      upsert: z
        .lazy(() => UsuarioUpsertWithoutPedidosInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UsuarioWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UsuarioUpdateWithoutPedidosInputObjectSchema),
          z.lazy(() => UsuarioUncheckedUpdateWithoutPedidosInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UsuarioUpdateOneRequiredWithoutPedidosNestedInputObjectSchema =
  Schema;
