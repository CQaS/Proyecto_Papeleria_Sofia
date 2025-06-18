import { z } from 'zod';
import { PromoProductoWhereUniqueInputObjectSchema } from './PromoProductoWhereUniqueInput.schema';
import { PromoProductoCreateWithoutProductoInputObjectSchema } from './PromoProductoCreateWithoutProductoInput.schema';
import { PromoProductoUncheckedCreateWithoutProductoInputObjectSchema } from './PromoProductoUncheckedCreateWithoutProductoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoCreateOrConnectWithoutProductoInput> =
  z
    .object({
      where: z.lazy(() => PromoProductoWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => PromoProductoCreateWithoutProductoInputObjectSchema),
        z.lazy(
          () => PromoProductoUncheckedCreateWithoutProductoInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PromoProductoCreateOrConnectWithoutProductoInputObjectSchema =
  Schema;
