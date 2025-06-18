import { z } from 'zod';
import { PromoProductoCreateManyPromocionInputObjectSchema } from './PromoProductoCreateManyPromocionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PromoProductoCreateManyPromocionInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => PromoProductoCreateManyPromocionInputObjectSchema),
        z.lazy(() => PromoProductoCreateManyPromocionInputObjectSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const PromoProductoCreateManyPromocionInputEnvelopeObjectSchema = Schema;
