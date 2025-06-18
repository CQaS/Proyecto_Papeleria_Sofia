import { z } from 'zod';
import { PromoProductoCreateWithoutProductoInputObjectSchema } from './PromoProductoCreateWithoutProductoInput.schema';
import { PromoProductoUncheckedCreateWithoutProductoInputObjectSchema } from './PromoProductoUncheckedCreateWithoutProductoInput.schema';
import { PromoProductoCreateOrConnectWithoutProductoInputObjectSchema } from './PromoProductoCreateOrConnectWithoutProductoInput.schema';
import { PromoProductoCreateManyProductoInputEnvelopeObjectSchema } from './PromoProductoCreateManyProductoInputEnvelope.schema';
import { PromoProductoWhereUniqueInputObjectSchema } from './PromoProductoWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoUncheckedCreateNestedManyWithoutProductoInput> =
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
      createMany: z
        .lazy(() => PromoProductoCreateManyProductoInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => PromoProductoWhereUniqueInputObjectSchema),
          z.lazy(() => PromoProductoWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PromoProductoUncheckedCreateNestedManyWithoutProductoInputObjectSchema =
  Schema;
