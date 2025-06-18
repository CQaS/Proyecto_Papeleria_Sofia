import { z } from 'zod';
import { UsuarioUpdateManyMutationInputObjectSchema } from './objects/UsuarioUpdateManyMutationInput.schema';
import { UsuarioWhereInputObjectSchema } from './objects/UsuarioWhereInput.schema';

export const UsuarioUpdateManySchema = z.object({
  data: UsuarioUpdateManyMutationInputObjectSchema,
  where: UsuarioWhereInputObjectSchema.optional(),
});
