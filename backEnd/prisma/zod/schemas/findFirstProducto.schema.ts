import { z } from 'zod';
import { ProductoOrderByWithRelationInputObjectSchema } from './objects/ProductoOrderByWithRelationInput.schema';
import { ProductoWhereInputObjectSchema } from './objects/ProductoWhereInput.schema';
import { ProductoWhereUniqueInputObjectSchema } from './objects/ProductoWhereUniqueInput.schema';
import { ProductoScalarFieldEnumSchema } from './enums/ProductoScalarFieldEnum.schema';

export const ProductoFindFirstSchema = z.object({
  orderBy: z
    .union([
      ProductoOrderByWithRelationInputObjectSchema,
      ProductoOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ProductoWhereInputObjectSchema.optional(),
  cursor: ProductoWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ProductoScalarFieldEnumSchema).optional(),
});
