import { z } from 'zod';
import { PromocionCreateManyInputObjectSchema } from './objects/PromocionCreateManyInput.schema';

export const PromocionCreateManySchema = z.object({
  data: z.union([
    PromocionCreateManyInputObjectSchema,
    z.array(PromocionCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
