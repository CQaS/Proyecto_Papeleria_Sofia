import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UsuarioMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    nombre: z.literal(true).optional(),
    email: z.literal(true).optional(),
    password: z.literal(true).optional(),
    rol: z.literal(true).optional(),
  })
  .strict();

export const UsuarioMinAggregateInputObjectSchema = Schema;
