import { z } from 'zod';
import { PromocionCreateWithoutProductosInputObjectSchema } from './PromocionCreateWithoutProductosInput.schema';
import { PromocionUncheckedCreateWithoutProductosInputObjectSchema } from './PromocionUncheckedCreateWithoutProductosInput.schema';
import { PromocionCreateOrConnectWithoutProductosInputObjectSchema } from './PromocionCreateOrConnectWithoutProductosInput.schema';
import { PromocionWhereUniqueInputObjectSchema } from './PromocionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromocionCreateNestedOneWithoutProductosInput> =
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
      connect: z.lazy(() => PromocionWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const PromocionCreateNestedOneWithoutProductosInputObjectSchema = Schema;
