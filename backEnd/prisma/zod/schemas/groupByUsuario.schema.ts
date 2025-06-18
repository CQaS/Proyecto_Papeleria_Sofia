import { z } from 'zod';
import { UsuarioWhereInputObjectSchema } from './objects/UsuarioWhereInput.schema';
import { UsuarioOrderByWithAggregationInputObjectSchema } from './objects/UsuarioOrderByWithAggregationInput.schema';
import { UsuarioScalarWhereWithAggregatesInputObjectSchema } from './objects/UsuarioScalarWhereWithAggregatesInput.schema';
import { UsuarioScalarFieldEnumSchema } from './enums/UsuarioScalarFieldEnum.schema';

export const UsuarioGroupBySchema = z.object({
  where: UsuarioWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      UsuarioOrderByWithAggregationInputObjectSchema,
      UsuarioOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: UsuarioScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(UsuarioScalarFieldEnumSchema),
});
