import { z } from 'zod';
import { PromocionUpdateManyMutationInputObjectSchema } from './objects/PromocionUpdateManyMutationInput.schema';
import { PromocionWhereInputObjectSchema } from './objects/PromocionWhereInput.schema';

export const PromocionUpdateManySchema = z.object({
  data: PromocionUpdateManyMutationInputObjectSchema,
  where: PromocionWhereInputObjectSchema.optional(),
});
