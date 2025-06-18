import { z } from 'zod';
import { UsuarioWhereInputObjectSchema } from './objects/UsuarioWhereInput.schema';

export const UsuarioDeleteManySchema = z.object({
  where: UsuarioWhereInputObjectSchema.optional(),
});
