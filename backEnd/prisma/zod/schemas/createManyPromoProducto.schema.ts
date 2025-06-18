import { z } from 'zod';
import { PromoProductoCreateManyInputObjectSchema } from './objects/PromoProductoCreateManyInput.schema';

export const PromoProductoCreateManySchema = z.object({
  data: z.union([
    PromoProductoCreateManyInputObjectSchema,
    z.array(PromoProductoCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
