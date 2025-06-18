import { z } from 'zod';
import { PromoProductoWhereUniqueInputObjectSchema } from './PromoProductoWhereUniqueInput.schema';
import { PromoProductoUpdateWithoutProductoInputObjectSchema } from './PromoProductoUpdateWithoutProductoInput.schema';
import { PromoProductoUncheckedUpdateWithoutProductoInputObjectSchema } from './PromoProductoUncheckedUpdateWithoutProductoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoUpdateWithWhereUniqueWithoutProductoInput> =
  z
    .object({
      where: z.lazy(() => PromoProductoWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PromoProductoUpdateWithoutProductoInputObjectSchema),
        z.lazy(
          () => PromoProductoUncheckedUpdateWithoutProductoInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PromoProductoUpdateWithWhereUniqueWithoutProductoInputObjectSchema =
  Schema;
