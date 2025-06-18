import { z } from 'zod';
import { ProductoCreateInputObjectSchema } from './objects/ProductoCreateInput.schema';
import { ProductoUncheckedCreateInputObjectSchema } from './objects/ProductoUncheckedCreateInput.schema';

export const ProductoCreateOneSchema = z.object({
  data: z.union([
    ProductoCreateInputObjectSchema,
    ProductoUncheckedCreateInputObjectSchema,
  ]),
});
