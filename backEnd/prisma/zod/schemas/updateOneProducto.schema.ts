import { z } from 'zod';
import { ProductoUpdateInputObjectSchema } from './objects/ProductoUpdateInput.schema';
import { ProductoUncheckedUpdateInputObjectSchema } from './objects/ProductoUncheckedUpdateInput.schema';
import { ProductoWhereUniqueInputObjectSchema } from './objects/ProductoWhereUniqueInput.schema';

export const ProductoUpdateOneSchema = z.object({
  data: z.union([
    ProductoUpdateInputObjectSchema,
    ProductoUncheckedUpdateInputObjectSchema,
  ]),
  where: ProductoWhereUniqueInputObjectSchema,
});
