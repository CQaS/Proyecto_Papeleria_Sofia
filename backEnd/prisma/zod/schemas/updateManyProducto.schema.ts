import { z } from 'zod';
import { ProductoUpdateManyMutationInputObjectSchema } from './objects/ProductoUpdateManyMutationInput.schema';
import { ProductoWhereInputObjectSchema } from './objects/ProductoWhereInput.schema';

export const ProductoUpdateManySchema = z.object({
  data: ProductoUpdateManyMutationInputObjectSchema,
  where: ProductoWhereInputObjectSchema.optional(),
});
