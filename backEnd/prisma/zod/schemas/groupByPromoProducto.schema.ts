import { z } from 'zod';
import { PromoProductoWhereInputObjectSchema } from './objects/PromoProductoWhereInput.schema';
import { PromoProductoOrderByWithAggregationInputObjectSchema } from './objects/PromoProductoOrderByWithAggregationInput.schema';
import { PromoProductoScalarWhereWithAggregatesInputObjectSchema } from './objects/PromoProductoScalarWhereWithAggregatesInput.schema';
import { PromoProductoScalarFieldEnumSchema } from './enums/PromoProductoScalarFieldEnum.schema';

export const PromoProductoGroupBySchema = z.object({
  where: PromoProductoWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PromoProductoOrderByWithAggregationInputObjectSchema,
      PromoProductoOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: PromoProductoScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PromoProductoScalarFieldEnumSchema),
});
