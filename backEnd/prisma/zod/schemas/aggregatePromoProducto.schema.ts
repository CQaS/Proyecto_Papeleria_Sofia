import { z } from 'zod';
import { PromoProductoOrderByWithRelationInputObjectSchema } from './objects/PromoProductoOrderByWithRelationInput.schema';
import { PromoProductoWhereInputObjectSchema } from './objects/PromoProductoWhereInput.schema';
import { PromoProductoWhereUniqueInputObjectSchema } from './objects/PromoProductoWhereUniqueInput.schema';
import { PromoProductoCountAggregateInputObjectSchema } from './objects/PromoProductoCountAggregateInput.schema';
import { PromoProductoMinAggregateInputObjectSchema } from './objects/PromoProductoMinAggregateInput.schema';
import { PromoProductoMaxAggregateInputObjectSchema } from './objects/PromoProductoMaxAggregateInput.schema';
import { PromoProductoAvgAggregateInputObjectSchema } from './objects/PromoProductoAvgAggregateInput.schema';
import { PromoProductoSumAggregateInputObjectSchema } from './objects/PromoProductoSumAggregateInput.schema';

export const PromoProductoAggregateSchema = z.object({
  orderBy: z
    .union([
      PromoProductoOrderByWithRelationInputObjectSchema,
      PromoProductoOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PromoProductoWhereInputObjectSchema.optional(),
  cursor: PromoProductoWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), PromoProductoCountAggregateInputObjectSchema])
    .optional(),
  _min: PromoProductoMinAggregateInputObjectSchema.optional(),
  _max: PromoProductoMaxAggregateInputObjectSchema.optional(),
  _avg: PromoProductoAvgAggregateInputObjectSchema.optional(),
  _sum: PromoProductoSumAggregateInputObjectSchema.optional(),
});
