import { z } from 'zod';
import { ConsultaCreateManyUsuarioInputObjectSchema } from './ConsultaCreateManyUsuarioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ConsultaCreateManyUsuarioInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ConsultaCreateManyUsuarioInputObjectSchema),
      z.lazy(() => ConsultaCreateManyUsuarioInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ConsultaCreateManyUsuarioInputEnvelopeObjectSchema = Schema;
