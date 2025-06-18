import { z } from 'zod';
import { PedidoWhereUniqueInputObjectSchema } from './PedidoWhereUniqueInput.schema';
import { PedidoUpdateWithoutUsuarioInputObjectSchema } from './PedidoUpdateWithoutUsuarioInput.schema';
import { PedidoUncheckedUpdateWithoutUsuarioInputObjectSchema } from './PedidoUncheckedUpdateWithoutUsuarioInput.schema';
import { PedidoCreateWithoutUsuarioInputObjectSchema } from './PedidoCreateWithoutUsuarioInput.schema';
import { PedidoUncheckedCreateWithoutUsuarioInputObjectSchema } from './PedidoUncheckedCreateWithoutUsuarioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PedidoUpsertWithWhereUniqueWithoutUsuarioInput> =
  z
    .object({
      where: z.lazy(() => PedidoWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PedidoUpdateWithoutUsuarioInputObjectSchema),
        z.lazy(() => PedidoUncheckedUpdateWithoutUsuarioInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => PedidoCreateWithoutUsuarioInputObjectSchema),
        z.lazy(() => PedidoUncheckedCreateWithoutUsuarioInputObjectSchema),
      ]),
    })
    .strict();

export const PedidoUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema =
  Schema;
