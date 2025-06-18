import { z } from 'zod';
import { ProductoCreateManyInputObjectSchema } from './objects/ProductoCreateManyInput.schema';

export const ProductoCreateManySchema = z.object({
  data: z.union([
    ProductoCreateManyInputObjectSchema,
    z.array(ProductoCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
