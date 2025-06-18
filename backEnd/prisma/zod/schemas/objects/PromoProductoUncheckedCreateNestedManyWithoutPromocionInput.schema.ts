import { z } from 'zod';
import { PromoProductoCreateWithoutPromocionInputObjectSchema } from './PromoProductoCreateWithoutPromocionInput.schema';
import { PromoProductoUncheckedCreateWithoutPromocionInputObjectSchema } from './PromoProductoUncheckedCreateWithoutPromocionInput.schema';
import { PromoProductoCreateOrConnectWithoutPromocionInputObjectSchema } from './PromoProductoCreateOrConnectWithoutPromocionInput.schema';
import { PromoProductoCreateManyPromocionInputEnvelopeObjectSchema } from './PromoProductoCreateManyPromocionInputEnvelope.schema';
import { PromoProductoWhereUniqueInputObjectSchema } from './PromoProductoWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoUncheckedCreateNestedManyWithoutPromocionInput> =
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
      createMany: z
        .lazy(() => PromoProductoCreateManyPromocionInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => PromoProductoWhereUniqueInputObjectSchema),
          z.lazy(() => PromoProductoWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PromoProductoUncheckedCreateNestedManyWithoutPromocionInputObjectSchema =
  Schema;
