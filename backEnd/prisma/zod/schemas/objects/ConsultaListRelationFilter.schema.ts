import { z } from 'zod';
import { ConsultaWhereInputObjectSchema } from './ConsultaWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ConsultaListRelationFilter> = z
  .object({
    every: z.lazy(() => ConsultaWhereInputObjectSchema).optional(),
    some: z.lazy(() => ConsultaWhereInputObjectSchema).optional(),
    none: z.lazy(() => ConsultaWhereInputObjectSchema).optional(),
  })
  .strict();

export const ConsultaListRelationFilterObjectSchema = Schema;
