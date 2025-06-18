import { z } from 'zod';
import { PromocionOrderByWithRelationInputObjectSchema } from './objects/PromocionOrderByWithRelationInput.schema';
import { PromocionWhereInputObjectSchema } from './objects/PromocionWhereInput.schema';
import { PromocionWhereUniqueInputObjectSchema } from './objects/PromocionWhereUniqueInput.schema';
import { PromocionCountAggregateInputObjectSchema } from './objects/PromocionCountAggregateInput.schema';
import { PromocionMinAggregateInputObjectSchema } from './objects/PromocionMinAggregateInput.schema';
import { PromocionMaxAggregateInputObjectSchema } from './objects/PromocionMaxAggregateInput.schema';
import { PromocionAvgAggregateInputObjectSchema } from './objects/PromocionAvgAggregateInput.schema';
import { PromocionSumAggregateInputObjectSchema } from './objects/PromocionSumAggregateInput.schema';

export const PromocionAggregateSchema = z.object({
  orderBy: z
    .union([
      PromocionOrderByWithRelationInputObjectSchema,
      PromocionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PromocionWhereInputObjectSchema.optional(),
  cursor: PromocionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), PromocionCountAggregateInputObjectSchema])
    .optional(),
  _min: PromocionMinAggregateInputObjectSchema.optional(),
  _max: PromocionMaxAggregateInputObjectSchema.optional(),
  _avg: PromocionAvgAggregateInputObjectSchema.optional(),
  _sum: PromocionSumAggregateInputObjectSchema.optional(),
});
