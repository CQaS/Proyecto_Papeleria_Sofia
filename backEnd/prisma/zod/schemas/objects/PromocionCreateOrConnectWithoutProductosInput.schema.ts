import { z } from 'zod';
import { PromocionWhereUniqueInputObjectSchema } from './PromocionWhereUniqueInput.schema';
import { PromocionCreateWithoutProductosInputObjectSchema } from './PromocionCreateWithoutProductosInput.schema';
import { PromocionUncheckedCreateWithoutProductosInputObjectSchema } from './PromocionUncheckedCreateWithoutProductosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromocionCreateOrConnectWithoutProductosInput> =
  z
    .object({
      where: z.lazy(() => PromocionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => PromocionCreateWithoutProductosInputObjectSchema),
        z.lazy(() => PromocionUncheckedCreateWithoutProductosInputObjectSchema),
      ]),
    })
    .strict();

export const PromocionCreateOrConnectWithoutProductosInputObjectSchema = Schema;
