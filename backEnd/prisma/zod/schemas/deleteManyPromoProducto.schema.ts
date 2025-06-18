import { z } from 'zod';
import { PromoProductoWhereInputObjectSchema } from './objects/PromoProductoWhereInput.schema';

export const PromoProductoDeleteManySchema = z.object({
  where: PromoProductoWhereInputObjectSchema.optional(),
});
