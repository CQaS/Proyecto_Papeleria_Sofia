import { z } from 'zod';
import { ConsultaOrderByWithRelationInputObjectSchema } from './objects/ConsultaOrderByWithRelationInput.schema';
import { ConsultaWhereInputObjectSchema } from './objects/ConsultaWhereInput.schema';
import { ConsultaWhereUniqueInputObjectSchema } from './objects/ConsultaWhereUniqueInput.schema';
import { ConsultaScalarFieldEnumSchema } from './enums/ConsultaScalarFieldEnum.schema';

export const ConsultaFindFirstSchema = z.object({
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
  distinct: z.array(ConsultaScalarFieldEnumSchema).optional(),
});
