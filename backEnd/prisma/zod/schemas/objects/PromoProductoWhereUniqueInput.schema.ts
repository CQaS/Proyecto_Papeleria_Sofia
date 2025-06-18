import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
  })
  .strict();

export const PromoProductoWhereUniqueInputObjectSchema = Schema;
