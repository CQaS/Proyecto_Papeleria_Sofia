import { z } from 'zod';
import { PromocionWhereInputObjectSchema } from './objects/PromocionWhereInput.schema';
import { PromocionOrderByWithAggregationInputObjectSchema } from './objects/PromocionOrderByWithAggregationInput.schema';
import { PromocionScalarWhereWithAggregatesInputObjectSchema } from './objects/PromocionScalarWhereWithAggregatesInput.schema';
import { PromocionScalarFieldEnumSchema } from './enums/PromocionScalarFieldEnum.schema';

export const PromocionGroupBySchema = z.object({
  where: PromocionWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PromocionOrderByWithAggregationInputObjectSchema,
      PromocionOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: PromocionScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PromocionScalarFieldEnumSchema),
});
