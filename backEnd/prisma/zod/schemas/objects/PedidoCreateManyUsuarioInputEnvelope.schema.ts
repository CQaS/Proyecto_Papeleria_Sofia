import { z } from 'zod';
import { PedidoCreateManyUsuarioInputObjectSchema } from './PedidoCreateManyUsuarioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PedidoCreateManyUsuarioInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PedidoCreateManyUsuarioInputObjectSchema),
      z.lazy(() => PedidoCreateManyUsuarioInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const PedidoCreateManyUsuarioInputEnvelopeObjectSchema = Schema;
