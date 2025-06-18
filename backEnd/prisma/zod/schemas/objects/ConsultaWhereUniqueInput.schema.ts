import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ConsultaWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
  })
  .strict();

export const ConsultaWhereUniqueInputObjectSchema = Schema;
