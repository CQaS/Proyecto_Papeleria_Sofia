import { z } from 'zod';
import { ProductoWhereUniqueInputObjectSchema } from './objects/ProductoWhereUniqueInput.schema';

export const ProductoFindUniqueSchema = z.object({
  where: ProductoWhereUniqueInputObjectSchema,
});
