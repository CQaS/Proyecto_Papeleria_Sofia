import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ConsultaCreateManyInput> = z
  .object({
    id: z.number().optional(),
    usuarioId: z.number(),
    mensaje: z.string(),
    respuesta: z.string().optional().nullable(),
    leido: z.boolean().optional(),
    resuelto: z.boolean().optional(),
    creadoEn: z.coerce.date().optional(),
    actualizadoEn: z.coerce.date().optional(),
  })
  .strict();

export const ConsultaCreateManyInputObjectSchema = Schema;
