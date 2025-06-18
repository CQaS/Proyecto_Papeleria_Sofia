import { z } from 'zod';
import { PromoProductoCreateWithoutPromocionInputObjectSchema } from './PromoProductoCreateWithoutPromocionInput.schema';
import { PromoProductoUncheckedCreateWithoutPromocionInputObjectSchema } from './PromoProductoUncheckedCreateWithoutPromocionInput.schema';
import { PromoProductoCreateOrConnectWithoutPromocionInputObjectSchema } from './PromoProductoCreateOrConnectWithoutPromocionInput.schema';
import { PromoProductoUpsertWithWhereUniqueWithoutPromocionInputObjectSchema } from './PromoProductoUpsertWithWhereUniqueWithoutPromocionInput.schema';
import { PromoProductoCreateManyPromocionInputEnvelopeObjectSchema } from './PromoProductoCreateManyPromocionInputEnvelope.schema';
import { PromoProductoWhereUniqueInputObjectSchema } from './PromoProductoWhereUniqueInput.schema';
import { PromoProductoUpdateWithWhereUniqueWithoutPromocionInputObjectSchema } from './PromoProductoUpdateWithWhereUniqueWithoutPromocionInput.schema';
import { PromoProductoUpdateManyWithWhereWithoutPromocionInputObjectSchema } from './PromoProductoUpdateManyWithWhereWithoutPromocionInput.schema';
import { PromoProductoScalarWhereInputObjectSchema } from './PromoProductoScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoUpdateManyWithoutPromocionNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PromoProductoCreateWithoutPromocionInputObjectSchema),
          z
            .lazy(() => PromoProductoCreateWithoutPromocionInputObjectSchema)
            .array(),
          z.lazy(
            () => PromoProductoUncheckedCreateWithoutPromocionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PromoProductoUncheckedCreateWithoutPromocionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => PromoProductoCreateOrConnectWithoutPromocionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PromoProductoCreateOrConnectWithoutPromocionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              PromoProductoUpsertWithWhereUniqueWithoutPromocionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PromoProductoUpsertWithWhereUniqueWithoutPromocionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PromoProductoCreateManyPromocionInputEnvelopeObjectSchema)
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
              PromoProductoUpdateWithWhereUniqueWithoutPromocionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PromoProductoUpdateWithWhereUniqueWithoutPromocionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              PromoProductoUpdateManyWithWhereWithoutPromocionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PromoProductoUpdateManyWithWhereWithoutPromocionInputObjectSchema,
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

export const PromoProductoUpdateManyWithoutPromocionNestedInputObjectSchema =
  Schema;
