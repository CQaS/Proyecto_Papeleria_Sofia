import { z } from 'zod';
import { PromoProductoOrderByWithRelationInputObjectSchema } from './objects/PromoProductoOrderByWithRelationInput.schema';
import { PromoProductoWhereInputObjectSchema } from './objects/PromoProductoWhereInput.schema';
import { PromoProductoWhereUniqueInputObjectSchema } from './objects/PromoProductoWhereUniqueInput.schema';
import { PromoProductoScalarFieldEnumSchema } from './enums/PromoProductoScalarFieldEnum.schema';

export const PromoProductoFindFirstSchema = z.object({
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
  distinct: z.array(PromoProductoScalarFieldEnumSchema).optional(),
});
