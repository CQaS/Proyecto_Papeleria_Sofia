import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoUncheckedCreateWithoutProductoInput> =
  z
    .object({
      id: z.number().optional(),
      promocionId: z.number(),
    })
    .strict();

export const PromoProductoUncheckedCreateWithoutProductoInputObjectSchema =
  Schema;
