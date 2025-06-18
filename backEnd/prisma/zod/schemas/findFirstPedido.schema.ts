import { z } from 'zod';
import { PedidoOrderByWithRelationInputObjectSchema } from './objects/PedidoOrderByWithRelationInput.schema';
import { PedidoWhereInputObjectSchema } from './objects/PedidoWhereInput.schema';
import { PedidoWhereUniqueInputObjectSchema } from './objects/PedidoWhereUniqueInput.schema';
import { PedidoScalarFieldEnumSchema } from './enums/PedidoScalarFieldEnum.schema';

export const PedidoFindFirstSchema = z.object({
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
  distinct: z.array(PedidoScalarFieldEnumSchema).optional(),
});
