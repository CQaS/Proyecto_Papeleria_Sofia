import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ConsultaUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    usuarioId: z.number(),
    mensaje: z.string(),
    leido: z.boolean().optional(),
    creadoEn: z.coerce.date().optional(),
  })
  .strict();

export const ConsultaUncheckedCreateInputObjectSchema = Schema;
