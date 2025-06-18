import { z } from 'zod';
import { ConsultaWhereInputObjectSchema } from './objects/ConsultaWhereInput.schema';
import { ConsultaOrderByWithAggregationInputObjectSchema } from './objects/ConsultaOrderByWithAggregationInput.schema';
import { ConsultaScalarWhereWithAggregatesInputObjectSchema } from './objects/ConsultaScalarWhereWithAggregatesInput.schema';
import { ConsultaScalarFieldEnumSchema } from './enums/ConsultaScalarFieldEnum.schema';

export const ConsultaGroupBySchema = z.object({
  where: ConsultaWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ConsultaOrderByWithAggregationInputObjectSchema,
      ConsultaOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ConsultaScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ConsultaScalarFieldEnumSchema),
});
