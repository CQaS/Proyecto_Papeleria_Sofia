import { z } from 'zod';
import { PromoProductoCreateWithoutProductoInputObjectSchema } from './PromoProductoCreateWithoutProductoInput.schema';
import { PromoProductoUncheckedCreateWithoutProductoInputObjectSchema } from './PromoProductoUncheckedCreateWithoutProductoInput.schema';
import { PromoProductoCreateOrConnectWithoutProductoInputObjectSchema } from './PromoProductoCreateOrConnectWithoutProductoInput.schema';
import { PromoProductoUpsertWithWhereUniqueWithoutProductoInputObjectSchema } from './PromoProductoUpsertWithWhereUniqueWithoutProductoInput.schema';
import { PromoProductoCreateManyProductoInputEnvelopeObjectSchema } from './PromoProductoCreateManyProductoInputEnvelope.schema';
import { PromoProductoWhereUniqueInputObjectSchema } from './PromoProductoWhereUniqueInput.schema';
import { PromoProductoUpdateWithWhereUniqueWithoutProductoInputObjectSchema } from './PromoProductoUpdateWithWhereUniqueWithoutProductoInput.schema';
import { PromoProductoUpdateManyWithWhereWithoutProductoInputObjectSchema } from './PromoProductoUpdateManyWithWhereWithoutProductoInput.schema';
import { PromoProductoScalarWhereInputObjectSchema } from './PromoProductoScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoUncheckedUpdateManyWithoutProductoNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PromoProductoCreateWithoutProductoInputObjectSchema),
          z
            .lazy(() => PromoProductoCreateWithoutProductoInputObjectSchema)
            .array(),
          z.lazy(
            () => PromoProductoUncheckedCreateWithoutProductoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PromoProductoUncheckedCreateWithoutProductoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => PromoProductoCreateOrConnectWithoutProductoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PromoProductoCreateOrConnectWithoutProductoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              PromoProductoUpsertWithWhereUniqueWithoutProductoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PromoProductoUpsertWithWhereUniqueWithoutProductoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PromoProductoCreateManyProductoInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => PromoProductoWhereUniqueInputObjectSchema),
          z.lazy(() => PromoProductoWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => PromoProductoWhereUniqueInputObjectSchema),
          z.lazy(() => PromoProductoWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => PromoProductoWhereUniqueInputObjectSchema),
          z.lazy(() => PromoProductoWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => PromoProductoWhereUniqueInputObjectSchema),
          z.lazy(() => PromoProductoWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              PromoProductoUpdateWithWhereUniqueWithoutProductoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PromoProductoUpdateWithWhereUniqueWithoutProductoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              PromoProductoUpdateManyWithWhereWithoutProductoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PromoProductoUpdateManyWithWhereWithoutProductoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => PromoProductoScalarWhereInputObjectSchema),
          z.lazy(() => PromoProductoScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PromoProductoUncheckedUpdateManyWithoutProductoNestedInputObjectSchema =
  Schema;
