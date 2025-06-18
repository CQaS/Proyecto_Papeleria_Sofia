import { z } from 'zod';
import { PromocionOrderByWithRelationInputObjectSchema } from './objects/PromocionOrderByWithRelationInput.schema';
import { PromocionWhereInputObjectSchema } from './objects/PromocionWhereInput.schema';
import { PromocionWhereUniqueInputObjectSchema } from './objects/PromocionWhereUniqueInput.schema';
import { PromocionScalarFieldEnumSchema } from './enums/PromocionScalarFieldEnum.schema';

export const PromocionFindFirstSchema = z.object({
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
  distinct: z.array(PromocionScalarFieldEnumSchema).optional(),
});
