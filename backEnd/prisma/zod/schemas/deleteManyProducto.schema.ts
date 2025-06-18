import { z } from 'zod';
import { ProductoWhereInputObjectSchema } from './objects/ProductoWhereInput.schema';

export const ProductoDeleteManySchema = z.object({
  where: ProductoWhereInputObjectSchema.optional(),
});
