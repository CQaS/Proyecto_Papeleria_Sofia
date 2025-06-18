import { z } from 'zod';
import { ProductoWhereUniqueInputObjectSchema } from './objects/ProductoWhereUniqueInput.schema';
import { ProductoCreateInputObjectSchema } from './objects/ProductoCreateInput.schema';
import { ProductoUncheckedCreateInputObjectSchema } from './objects/ProductoUncheckedCreateInput.schema';
import { ProductoUpdateInputObjectSchema } from './objects/ProductoUpdateInput.schema';
import { ProductoUncheckedUpdateInputObjectSchema } from './objects/ProductoUncheckedUpdateInput.schema';

export const ProductoUpsertSchema = z.object({
  where: ProductoWhereUniqueInputObjectSchema,
  create: z.union([
    ProductoCreateInputObjectSchema,
    ProductoUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ProductoUpdateInputObjectSchema,
    ProductoUncheckedUpdateInputObjectSchema,
  ]),
});
