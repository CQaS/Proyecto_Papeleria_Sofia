import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ConsultaCreateManyInput> = z
  .object({
    id: z.number().optional(),
    usuarioId: z.number(),
    mensaje: z.string(),
    leido: z.boolean().optional(),
    creadoEn: z.coerce.date().optional(),
  })
  .strict();

export const ConsultaCreateManyInputObjectSchema = Schema;
