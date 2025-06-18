import { z } from 'zod';
import { PedidoCreateWithoutUsuarioInputObjectSchema } from './PedidoCreateWithoutUsuarioInput.schema';
import { PedidoUncheckedCreateWithoutUsuarioInputObjectSchema } from './PedidoUncheckedCreateWithoutUsuarioInput.schema';
import { PedidoCreateOrConnectWithoutUsuarioInputObjectSchema } from './PedidoCreateOrConnectWithoutUsuarioInput.schema';
import { PedidoUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema } from './PedidoUpsertWithWhereUniqueWithoutUsuarioInput.schema';
import { PedidoCreateManyUsuarioInputEnvelopeObjectSchema } from './PedidoCreateManyUsuarioInputEnvelope.schema';
import { PedidoWhereUniqueInputObjectSchema } from './PedidoWhereUniqueInput.schema';
import { PedidoUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema } from './PedidoUpdateWithWhereUniqueWithoutUsuarioInput.schema';
import { PedidoUpdateManyWithWhereWithoutUsuarioInputObjectSchema } from './PedidoUpdateManyWithWhereWithoutUsuarioInput.schema';
import { PedidoScalarWhereInputObjectSchema } from './PedidoScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PedidoUncheckedUpdateManyWithoutUsuarioNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => PedidoUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema,
          ),
          z
            .lazy(
              () => PedidoUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PedidoCreateManyUsuarioInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => PedidoWhereUniqueInputObjectSchema),
          z.lazy(() => PedidoWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => PedidoWhereUniqueInputObjectSchema),
          z.lazy(() => PedidoWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => PedidoWhereUniqueInputObjectSchema),
          z.lazy(() => PedidoWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => PedidoWhereUniqueInputObjectSchema),
          z.lazy(() => PedidoWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => PedidoUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema,
          ),
          z
            .lazy(
              () => PedidoUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => PedidoUpdateManyWithWhereWithoutUsuarioInputObjectSchema,
          ),
          z
            .lazy(
              () => PedidoUpdateManyWithWhereWithoutUsuarioInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => PedidoScalarWhereInputObjectSchema),
          z.lazy(() => PedidoScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PedidoUncheckedUpdateManyWithoutUsuarioNestedInputObjectSchema =
  Schema;
