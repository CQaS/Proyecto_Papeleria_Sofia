import { z } from 'zod';
import { PedidoWhereUniqueInputObjectSchema } from './PedidoWhereUniqueInput.schema';
import { PedidoUpdateWithoutUsuarioInputObjectSchema } from './PedidoUpdateWithoutUsuarioInput.schema';
import { PedidoUncheckedUpdateWithoutUsuarioInputObjectSchema } from './PedidoUncheckedUpdateWithoutUsuarioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PedidoUpdateWithWhereUniqueWithoutUsuarioInput> =
  z
    .object({
      where: z.lazy(() => PedidoWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PedidoUpdateWithoutUsuarioInputObjectSchema),
        z.lazy(() => PedidoUncheckedUpdateWithoutUsuarioInputObjectSchema),
      ]),
    })
    .strict();

export const PedidoUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema =
  Schema;
