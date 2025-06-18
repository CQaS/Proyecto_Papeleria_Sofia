import { z } from 'zod';
import { UsuarioCreateInputObjectSchema } from './objects/UsuarioCreateInput.schema';
import { UsuarioUncheckedCreateInputObjectSchema } from './objects/UsuarioUncheckedCreateInput.schema';

export const UsuarioCreateOneSchema = z.object({
  data: z.union([
    UsuarioCreateInputObjectSchema,
    UsuarioUncheckedCreateInputObjectSchema,
  ]),
});
