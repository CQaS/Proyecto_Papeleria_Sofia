import { z } from 'zod';
import { UsuarioWhereUniqueInputObjectSchema } from './objects/UsuarioWhereUniqueInput.schema';

export const UsuarioFindUniqueSchema = z.object({
  where: UsuarioWhereUniqueInputObjectSchema,
});
