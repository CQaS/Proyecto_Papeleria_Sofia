import { z } from 'zod';
import { PedidoOrderByWithRelationInputObjectSchema } from './objects/PedidoOrderByWithRelationInput.schema';
import { PedidoWhereInputObjectSchema } from './objects/PedidoWhereInput.schema';
import { PedidoWhereUniqueInputObjectSchema } from './objects/PedidoWhereUniqueInput.schema';
import { PedidoCountAggregateInputObjectSchema } from './objects/PedidoCountAggregateInput.schema';
import { PedidoMinAggregateInputObjectSchema } from './objects/PedidoMinAggregateInput.schema';
import { PedidoMaxAggregateInputObjectSchema } from './objects/PedidoMaxAggregateInput.schema';
import { PedidoAvgAggregateInputObjectSchema } from './objects/PedidoAvgAggregateInput.schema';
import { PedidoSumAggregateInputObjectSchema } from './objects/PedidoSumAggregateInput.schema';

export const PedidoAggregateSchema = z.object({
  orderBy: z
    .union([
      PedidoOrderByWithRelationInputObjectSchema,
      PedidoOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PedidoWhereInputObjectSchema.optional(),
  cursor: PedidoWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), PedidoCountAggregateInputObjectSchema])
    .optional(),
  _min: PedidoMinAggregateInputObjectSchema.optional(),
  _max: PedidoMaxAggregateInputObjectSchema.optional(),
  _avg: PedidoAvgAggregateInputObjectSchema.optional(),
  _sum: PedidoSumAggregateInputObjectSchema.optional(),
});
