import { z } from 'zod';
import { ProductoWhereUniqueInputObjectSchema } from './objects/ProductoWhereUniqueInput.schema';

export const ProductoDeleteOneSchema = z.object({
  where: ProductoWhereUniqueInputObjectSchema,
});
