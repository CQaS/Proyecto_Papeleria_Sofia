import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ConsultaCreateWithoutUsuarioInput> = z
  .object({
    mensaje: z.string(),
    leido: z.boolean().optional(),
    creadoEn: z.coerce.date().optional(),
  })
  .strict();

export const ConsultaCreateWithoutUsuarioInputObjectSchema = Schema;
