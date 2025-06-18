import { z } from 'zod';
import { PromocionCreateWithoutProductosInputObjectSchema } from './PromocionCreateWithoutProductosInput.schema';
import { PromocionUncheckedCreateWithoutProductosInputObjectSchema } from './PromocionUncheckedCreateWithoutProductosInput.schema';
import { PromocionCreateOrConnectWithoutProductosInputObjectSchema } from './PromocionCreateOrConnectWithoutProductosInput.schema';
import { PromocionUpsertWithoutProductosInputObjectSchema } from './PromocionUpsertWithoutProductosInput.schema';
import { PromocionWhereUniqueInputObjectSchema } from './PromocionWhereUniqueInput.schema';
import { PromocionUpdateWithoutProductosInputObjectSchema } from './PromocionUpdateWithoutProductosInput.schema';
import { PromocionUncheckedUpdateWithoutProductosInputObjectSchema } from './PromocionUncheckedUpdateWithoutProductosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromocionUpdateOneRequiredWithoutProductosNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PromocionCreateWithoutProductosInputObjectSchema),
          z.lazy(
            () => PromocionUncheckedCreateWithoutProductosInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => PromocionCreateOrConnectWithoutProductosInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => PromocionUpsertWithoutProductosInputObjectSchema)
        .optional(),
      connect: z.lazy(() => PromocionWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => PromocionUpdateWithoutProductosInputObjectSchema),
          z.lazy(
            () => PromocionUncheckedUpdateWithoutProductosInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const PromocionUpdateOneRequiredWithoutProductosNestedInputObjectSchema =
  Schema;
