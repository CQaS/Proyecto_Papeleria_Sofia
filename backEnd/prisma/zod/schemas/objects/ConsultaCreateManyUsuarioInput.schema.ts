import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ConsultaCreateManyUsuarioInput> = z
  .object({
    id: z.number().optional(),
    mensaje: z.string(),
    leido: z.boolean().optional(),
    creadoEn: z.coerce.date().optional(),
  })
  .strict();

export const ConsultaCreateManyUsuarioInputObjectSchema = Schema;
