import { z } from 'zod';
import { PromoProductoUpdateManyMutationInputObjectSchema } from './objects/PromoProductoUpdateManyMutationInput.schema';
import { PromoProductoWhereInputObjectSchema } from './objects/PromoProductoWhereInput.schema';

export const PromoProductoUpdateManySchema = z.object({
  data: PromoProductoUpdateManyMutationInputObjectSchema,
  where: PromoProductoWhereInputObjectSchema.optional(),
});
