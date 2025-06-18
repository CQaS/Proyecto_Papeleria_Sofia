import { z } from 'zod';
import { UsuarioCreateManyInputObjectSchema } from './objects/UsuarioCreateManyInput.schema';

export const UsuarioCreateManySchema = z.object({
  data: z.union([
    UsuarioCreateManyInputObjectSchema,
    z.array(UsuarioCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
