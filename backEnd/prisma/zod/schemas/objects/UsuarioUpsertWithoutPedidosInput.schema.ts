import { z } from 'zod';
import { UsuarioUpdateWithoutPedidosInputObjectSchema } from './UsuarioUpdateWithoutPedidosInput.schema';
import { UsuarioUncheckedUpdateWithoutPedidosInputObjectSchema } from './UsuarioUncheckedUpdateWithoutPedidosInput.schema';
import { UsuarioCreateWithoutPedidosInputObjectSchema } from './UsuarioCreateWithoutPedidosInput.schema';
import { UsuarioUncheckedCreateWithoutPedidosInputObjectSchema } from './UsuarioUncheckedCreateWithoutPedidosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UsuarioUpsertWithoutPedidosInput> = z
  .object({
    update: z.union([
      z.lazy(() => UsuarioUpdateWithoutPedidosInputObjectSchema),
      z.lazy(() => UsuarioUncheckedUpdateWithoutPedidosInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UsuarioCreateWithoutPedidosInputObjectSchema),
      z.lazy(() => UsuarioUncheckedCreateWithoutPedidosInputObjectSchema),
    ]),
  })
  .strict();

export const UsuarioUpsertWithoutPedidosInputObjectSchema = Schema;
