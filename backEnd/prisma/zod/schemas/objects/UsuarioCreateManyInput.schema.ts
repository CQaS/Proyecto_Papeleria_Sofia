import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UsuarioCreateManyInput> = z
  .object({
    id: z.number().optional(),
    nombre: z.string(),
    email: z.string(),
    password: z.string().optional().nullable(),
    rol: z.string(),
  })
  .strict();

export const UsuarioCreateManyInputObjectSchema = Schema;
