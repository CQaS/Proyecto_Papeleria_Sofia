import { z } from 'zod';
import { PedidoWhereUniqueInputObjectSchema } from './PedidoWhereUniqueInput.schema';
import { PedidoCreateWithoutUsuarioInputObjectSchema } from './PedidoCreateWithoutUsuarioInput.schema';
import { PedidoUncheckedCreateWithoutUsuarioInputObjectSchema } from './PedidoUncheckedCreateWithoutUsuarioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PedidoCreateOrConnectWithoutUsuarioInput> = z
  .object({
    where: z.lazy(() => PedidoWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PedidoCreateWithoutUsuarioInputObjectSchema),
      z.lazy(() => PedidoUncheckedCreateWithoutUsuarioInputObjectSchema),
    ]),
  })
  .strict();

export const PedidoCreateOrConnectWithoutUsuarioInputObjectSchema = Schema;
