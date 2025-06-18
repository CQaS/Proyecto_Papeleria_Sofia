import { z } from 'zod';
import { PromoProductoWhereUniqueInputObjectSchema } from './PromoProductoWhereUniqueInput.schema';
import { PromoProductoUpdateWithoutProductoInputObjectSchema } from './PromoProductoUpdateWithoutProductoInput.schema';
import { PromoProductoUncheckedUpdateWithoutProductoInputObjectSchema } from './PromoProductoUncheckedUpdateWithoutProductoInput.schema';
import { PromoProductoCreateWithoutProductoInputObjectSchema } from './PromoProductoCreateWithoutProductoInput.schema';
import { PromoProductoUncheckedCreateWithoutProductoInputObjectSchema } from './PromoProductoUncheckedCreateWithoutProductoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoUpsertWithWhereUniqueWithoutProductoInput> =
  z
    .object({
      where: z.lazy(() => PromoProductoWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PromoProductoUpdateWithoutProductoInputObjectSchema),
        z.lazy(
          () => PromoProductoUncheckedUpdateWithoutProductoInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => PromoProductoCreateWithoutProductoInputObjectSchema),
        z.lazy(
          () => PromoProductoUncheckedCreateWithoutProductoInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PromoProductoUpsertWithWhereUniqueWithoutProductoInputObjectSchema =
  Schema;
