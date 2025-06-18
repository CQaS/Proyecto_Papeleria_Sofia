import { z } from 'zod';
import { PromoProductoScalarWhereInputObjectSchema } from './PromoProductoScalarWhereInput.schema';
import { PromoProductoUpdateManyMutationInputObjectSchema } from './PromoProductoUpdateManyMutationInput.schema';
import { PromoProductoUncheckedUpdateManyWithoutProductosInputObjectSchema } from './PromoProductoUncheckedUpdateManyWithoutProductosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoUpdateManyWithWhereWithoutPromocionInput> =
  z
    .object({
      where: z.lazy(() => PromoProductoScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => PromoProductoUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            PromoProductoUncheckedUpdateManyWithoutProductosInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PromoProductoUpdateManyWithWhereWithoutPromocionInputObjectSchema =
  Schema;
