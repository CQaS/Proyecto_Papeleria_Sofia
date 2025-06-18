import { z } from 'zod';
import { PromoProductoCreateManyProductoInputObjectSchema } from './PromoProductoCreateManyProductoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoCreateManyProductoInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PromoProductoCreateManyProductoInputObjectSchema),
      z.lazy(() => PromoProductoCreateManyProductoInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const PromoProductoCreateManyProductoInputEnvelopeObjectSchema = Schema;
