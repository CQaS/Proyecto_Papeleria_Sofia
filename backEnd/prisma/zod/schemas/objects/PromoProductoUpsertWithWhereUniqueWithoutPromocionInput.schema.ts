import { z } from 'zod';
import { PromoProductoWhereUniqueInputObjectSchema } from './PromoProductoWhereUniqueInput.schema';
import { PromoProductoUpdateWithoutPromocionInputObjectSchema } from './PromoProductoUpdateWithoutPromocionInput.schema';
import { PromoProductoUncheckedUpdateWithoutPromocionInputObjectSchema } from './PromoProductoUncheckedUpdateWithoutPromocionInput.schema';
import { PromoProductoCreateWithoutPromocionInputObjectSchema } from './PromoProductoCreateWithoutPromocionInput.schema';
import { PromoProductoUncheckedCreateWithoutPromocionInputObjectSchema } from './PromoProductoUncheckedCreateWithoutPromocionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoUpsertWithWhereUniqueWithoutPromocionInput> =
  z
    .object({
      where: z.lazy(() => PromoProductoWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PromoProductoUpdateWithoutPromocionInputObjectSchema),
        z.lazy(
          () => PromoProductoUncheckedUpdateWithoutPromocionInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => PromoProductoCreateWithoutPromocionInputObjectSchema),
        z.lazy(
          () => PromoProductoUncheckedCreateWithoutPromocionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PromoProductoUpsertWithWhereUniqueWithoutPromocionInputObjectSchema =
  Schema;
