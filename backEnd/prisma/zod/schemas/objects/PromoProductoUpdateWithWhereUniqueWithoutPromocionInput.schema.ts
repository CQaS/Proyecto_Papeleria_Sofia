import { z } from 'zod';
import { PromoProductoWhereUniqueInputObjectSchema } from './PromoProductoWhereUniqueInput.schema';
import { PromoProductoUpdateWithoutPromocionInputObjectSchema } from './PromoProductoUpdateWithoutPromocionInput.schema';
import { PromoProductoUncheckedUpdateWithoutPromocionInputObjectSchema } from './PromoProductoUncheckedUpdateWithoutPromocionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoUpdateWithWhereUniqueWithoutPromocionInput> =
  z
    .object({
      where: z.lazy(() => PromoProductoWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PromoProductoUpdateWithoutPromocionInputObjectSchema),
        z.lazy(
          () => PromoProductoUncheckedUpdateWithoutPromocionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PromoProductoUpdateWithWhereUniqueWithoutPromocionInputObjectSchema =
  Schema;
