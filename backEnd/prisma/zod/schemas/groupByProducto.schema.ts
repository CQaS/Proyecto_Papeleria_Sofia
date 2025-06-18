import { z } from 'zod';
import { ProductoWhereInputObjectSchema } from './objects/ProductoWhereInput.schema';
import { ProductoOrderByWithAggregationInputObjectSchema } from './objects/ProductoOrderByWithAggregationInput.schema';
import { ProductoScalarWhereWithAggregatesInputObjectSchema } from './objects/ProductoScalarWhereWithAggregatesInput.schema';
import { ProductoScalarFieldEnumSchema } from './enums/ProductoScalarFieldEnum.schema';

export const ProductoGroupBySchema = z.object({
  where: ProductoWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ProductoOrderByWithAggregationInputObjectSchema,
      ProductoOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ProductoScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ProductoScalarFieldEnumSchema),
});
