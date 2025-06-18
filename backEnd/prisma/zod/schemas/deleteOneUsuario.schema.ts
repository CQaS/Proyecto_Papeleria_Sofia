import { z } from 'zod';
import { UsuarioWhereUniqueInputObjectSchema } from './objects/UsuarioWhereUniqueInput.schema';

export const UsuarioDeleteOneSchema = z.object({
  where: UsuarioWhereUniqueInputObjectSchema,
});
