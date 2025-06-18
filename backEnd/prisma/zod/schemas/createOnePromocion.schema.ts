import { z } from 'zod';
import { PromocionCreateInputObjectSchema } from './objects/PromocionCreateInput.schema';
import { PromocionUncheckedCreateInputObjectSchema } from './objects/PromocionUncheckedCreateInput.schema';

export const PromocionCreateOneSchema = z.object({
  data: z.union([
    PromocionCreateInputObjectSchema,
    PromocionUncheckedCreateInputObjectSchema,
  ]),
});
