import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductoWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
    slug: z.string().optional(),
  })
  .strict();

export const ProductoWhereUniqueInputObjectSchema = Schema;
