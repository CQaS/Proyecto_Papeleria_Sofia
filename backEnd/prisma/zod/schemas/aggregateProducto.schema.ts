import { z } from 'zod';
import { ProductoOrderByWithRelationInputObjectSchema } from './objects/ProductoOrderByWithRelationInput.schema';
import { ProductoWhereInputObjectSchema } from './objects/ProductoWhereInput.schema';
import { ProductoWhereUniqueInputObjectSchema } from './objects/ProductoWhereUniqueInput.schema';
import { ProductoCountAggregateInputObjectSchema } from './objects/ProductoCountAggregateInput.schema';
import { ProductoMinAggregateInputObjectSchema } from './objects/ProductoMinAggregateInput.schema';
import { ProductoMaxAggregateInputObjectSchema } from './objects/ProductoMaxAggregateInput.schema';
import { ProductoAvgAggregateInputObjectSchema } from './objects/ProductoAvgAggregateInput.schema';
import { ProductoSumAggregateInputObjectSchema } from './objects/ProductoSumAggregateInput.schema';

export const ProductoAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), ProductoCountAggregateInputObjectSchema])
    .optional(),
  _min: ProductoMinAggregateInputObjectSchema.optional(),
  _max: ProductoMaxAggregateInputObjectSchema.optional(),
  _avg: ProductoAvgAggregateInputObjectSchema.optional(),
  _sum: ProductoSumAggregateInputObjectSchema.optional(),
});
