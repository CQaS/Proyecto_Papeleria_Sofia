import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromocionWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
    codigo: z.string().optional(),
  })
  .strict();

export const PromocionWhereUniqueInputObjectSchema = Schema;
