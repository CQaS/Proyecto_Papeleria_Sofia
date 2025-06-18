import { z } from 'zod';
import { PedidoCreateWithoutUsuarioInputObjectSchema } from './PedidoCreateWithoutUsuarioInput.schema';
import { PedidoUncheckedCreateWithoutUsuarioInputObjectSchema } from './PedidoUncheckedCreateWithoutUsuarioInput.schema';
import { PedidoCreateOrConnectWithoutUsuarioInputObjectSchema } from './PedidoCreateOrConnectWithoutUsuarioInput.schema';
import { PedidoCreateManyUsuarioInputEnvelopeObjectSchema } from './PedidoCreateManyUsuarioInputEnvelope.schema';
import { PedidoWhereUniqueInputObjectSchema } from './PedidoWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PedidoUncheckedCreateNestedManyWithoutUsuarioInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PedidoCreateWithoutUsuarioInputObjectSchema),
          z.lazy(() => PedidoCreateWithoutUsuarioInputObjectSchema).array(),
          z.lazy(() => PedidoUncheckedCreateWithoutUsuarioInputObjectSchema),
          z
            .lazy(() => PedidoUncheckedCreateWithoutUsuarioInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PedidoCreateOrConnectWithoutUsuarioInputObjectSchema),
          z
            .lazy(() => PedidoCreateOrConnectWithoutUsuarioInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PedidoCreateManyUsuarioInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => PedidoWhereUniqueInputObjectSchema),
          z.lazy(() => PedidoWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PedidoUncheckedCreateNestedManyWithoutUsuarioInputObjectSchema =
  Schema;
