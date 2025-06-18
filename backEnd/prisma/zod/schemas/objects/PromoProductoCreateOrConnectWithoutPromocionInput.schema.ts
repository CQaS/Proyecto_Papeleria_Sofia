import { z } from 'zod';
import { PromoProductoWhereUniqueInputObjectSchema } from './PromoProductoWhereUniqueInput.schema';
import { PromoProductoCreateWithoutPromocionInputObjectSchema } from './PromoProductoCreateWithoutPromocionInput.schema';
import { PromoProductoUncheckedCreateWithoutPromocionInputObjectSchema } from './PromoProductoUncheckedCreateWithoutPromocionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoCreateOrConnectWithoutPromocionInput> =
  z
    .object({
      where: z.lazy(() => PromoProductoWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => PromoProductoCreateWithoutPromocionInputObjectSchema),
        z.lazy(
          () => PromoProductoUncheckedCreateWithoutPromocionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PromoProductoCreateOrConnectWithoutPromocionInputObjectSchema =
  Schema;
