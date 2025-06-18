import { z } from 'zod';
import { UsuarioUpdateInputObjectSchema } from './objects/UsuarioUpdateInput.schema';
import { UsuarioUncheckedUpdateInputObjectSchema } from './objects/UsuarioUncheckedUpdateInput.schema';
import { UsuarioWhereUniqueInputObjectSchema } from './objects/UsuarioWhereUniqueInput.schema';

export const UsuarioUpdateOneSchema = z.object({
  data: z.union([
    UsuarioUpdateInputObjectSchema,
    UsuarioUncheckedUpdateInputObjectSchema,
  ]),
  where: UsuarioWhereUniqueInputObjectSchema,
});
