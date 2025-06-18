import { z } from 'zod';
import { PromoProductoScalarWhereInputObjectSchema } from './PromoProductoScalarWhereInput.schema';
import { PromoProductoUpdateManyMutationInputObjectSchema } from './PromoProductoUpdateManyMutationInput.schema';
import { PromoProductoUncheckedUpdateManyWithoutPromosInputObjectSchema } from './PromoProductoUncheckedUpdateManyWithoutPromosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoUpdateManyWithWhereWithoutProductoInput> =
  z
    .object({
      where: z.lazy(() => PromoProductoScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => PromoProductoUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => PromoProductoUncheckedUpdateManyWithoutPromosInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PromoProductoUpdateManyWithWhereWithoutProductoInputObjectSchema =
  Schema;
