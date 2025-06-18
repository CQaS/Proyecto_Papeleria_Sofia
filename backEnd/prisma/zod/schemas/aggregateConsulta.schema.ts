import { z } from 'zod';
import { ConsultaOrderByWithRelationInputObjectSchema } from './objects/ConsultaOrderByWithRelationInput.schema';
import { ConsultaWhereInputObjectSchema } from './objects/ConsultaWhereInput.schema';
import { ConsultaWhereUniqueInputObjectSchema } from './objects/ConsultaWhereUniqueInput.schema';
import { ConsultaCountAggregateInputObjectSchema } from './objects/ConsultaCountAggregateInput.schema';
import { ConsultaMinAggregateInputObjectSchema } from './objects/ConsultaMinAggregateInput.schema';
import { ConsultaMaxAggregateInputObjectSchema } from './objects/ConsultaMaxAggregateInput.schema';
import { ConsultaAvgAggregateInputObjectSchema } from './objects/ConsultaAvgAggregateInput.schema';
import { ConsultaSumAggregateInputObjectSchema } from './objects/ConsultaSumAggregateInput.schema';

export const ConsultaAggregateSchema = z.object({
  orderBy: z
    .union([
      ConsultaOrderByWithRelationInputObjectSchema,
      ConsultaOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ConsultaWhereInputObjectSchema.optional(),
  cursor: ConsultaWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ConsultaCountAggregateInputObjectSchema])
    .optional(),
  _min: ConsultaMinAggregateInputObjectSchema.optional(),
  _max: ConsultaMaxAggregateInputObjectSchema.optional(),
  _avg: ConsultaAvgAggregateInputObjectSchema.optional(),
  _sum: ConsultaSumAggregateInputObjectSchema.optional(),
});
