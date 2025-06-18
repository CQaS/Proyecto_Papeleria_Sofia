import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoUpdateManyMutationInput> = z
  .object({})
  .strict();

export const PromoProductoUpdateManyMutationInputObjectSchema = Schema;
