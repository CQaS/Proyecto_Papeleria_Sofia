import { z } from 'zod';
import { PromocionUpdateWithoutProductosInputObjectSchema } from './PromocionUpdateWithoutProductosInput.schema';
import { PromocionUncheckedUpdateWithoutProductosInputObjectSchema } from './PromocionUncheckedUpdateWithoutProductosInput.schema';
import { PromocionCreateWithoutProductosInputObjectSchema } from './PromocionCreateWithoutProductosInput.schema';
import { PromocionUncheckedCreateWithoutProductosInputObjectSchema } from './PromocionUncheckedCreateWithoutProductosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromocionUpsertWithoutProductosInput> = z
  .object({
    update: z.union([
      z.lazy(() => PromocionUpdateWithoutProductosInputObjectSchema),
      z.lazy(() => PromocionUncheckedUpdateWithoutProductosInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PromocionCreateWithoutProductosInputObjectSchema),
      z.lazy(() => PromocionUncheckedCreateWithoutProductosInputObjectSchema),
    ]),
  })
  .strict();

export const PromocionUpsertWithoutProductosInputObjectSchema = Schema;
