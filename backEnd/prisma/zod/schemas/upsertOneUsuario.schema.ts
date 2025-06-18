import { z } from 'zod';
import { UsuarioWhereUniqueInputObjectSchema } from './objects/UsuarioWhereUniqueInput.schema';
import { UsuarioCreateInputObjectSchema } from './objects/UsuarioCreateInput.schema';
import { UsuarioUncheckedCreateInputObjectSchema } from './objects/UsuarioUncheckedCreateInput.schema';
import { UsuarioUpdateInputObjectSchema } from './objects/UsuarioUpdateInput.schema';
import { UsuarioUncheckedUpdateInputObjectSchema } from './objects/UsuarioUncheckedUpdateInput.schema';

export const UsuarioUpsertSchema = z.object({
  where: UsuarioWhereUniqueInputObjectSchema,
  create: z.union([
    UsuarioCreateInputObjectSchema,
    UsuarioUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    UsuarioUpdateInputObjectSchema,
    UsuarioUncheckedUpdateInputObjectSchema,
  ]),
});
