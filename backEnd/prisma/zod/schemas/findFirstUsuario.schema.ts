import { z } from 'zod';
import { UsuarioOrderByWithRelationInputObjectSchema } from './objects/UsuarioOrderByWithRelationInput.schema';
import { UsuarioWhereInputObjectSchema } from './objects/UsuarioWhereInput.schema';
import { UsuarioWhereUniqueInputObjectSchema } from './objects/UsuarioWhereUniqueInput.schema';
import { UsuarioScalarFieldEnumSchema } from './enums/UsuarioScalarFieldEnum.schema';

export const UsuarioFindFirstSchema = z.object({
  orderBy: z
    .union([
      UsuarioOrderByWithRelationInputObjectSchema,
      UsuarioOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: UsuarioWhereInputObjectSchema.optional(),
  cursor: UsuarioWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(UsuarioScalarFieldEnumSchema).optional(),
});
