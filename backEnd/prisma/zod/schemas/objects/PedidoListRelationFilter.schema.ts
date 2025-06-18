import { z } from 'zod';
import { PedidoWhereInputObjectSchema } from './PedidoWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PedidoListRelationFilter> = z
  .object({
    every: z.lazy(() => PedidoWhereInputObjectSchema).optional(),
    some: z.lazy(() => PedidoWhereInputObjectSchema).optional(),
    none: z.lazy(() => PedidoWhereInputObjectSchema).optional(),
  })
  .strict();

export const PedidoListRelationFilterObjectSchema = Schema;
