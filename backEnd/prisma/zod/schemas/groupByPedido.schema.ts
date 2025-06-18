import { z } from 'zod';
import { PedidoWhereInputObjectSchema } from './objects/PedidoWhereInput.schema';
import { PedidoOrderByWithAggregationInputObjectSchema } from './objects/PedidoOrderByWithAggregationInput.schema';
import { PedidoScalarWhereWithAggregatesInputObjectSchema } from './objects/PedidoScalarWhereWithAggregatesInput.schema';
import { PedidoScalarFieldEnumSchema } from './enums/PedidoScalarFieldEnum.schema';

export const PedidoGroupBySchema = z.object({
  where: PedidoWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PedidoOrderByWithAggregationInputObjectSchema,
      PedidoOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: PedidoScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PedidoScalarFieldEnumSchema),
});
