import { z } from 'zod';
import { UsuarioUpdateWithoutConsultasInputObjectSchema } from './UsuarioUpdateWithoutConsultasInput.schema';
import { UsuarioUncheckedUpdateWithoutConsultasInputObjectSchema } from './UsuarioUncheckedUpdateWithoutConsultasInput.schema';
import { UsuarioCreateWithoutConsultasInputObjectSchema } from './UsuarioCreateWithoutConsultasInput.schema';
import { UsuarioUncheckedCreateWithoutConsultasInputObjectSchema } from './UsuarioUncheckedCreateWithoutConsultasInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UsuarioUpsertWithoutConsultasInput> = z
  .object({
    update: z.union([
      z.lazy(() => UsuarioUpdateWithoutConsultasInputObjectSchema),
      z.lazy(() => UsuarioUncheckedUpdateWithoutConsultasInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UsuarioCreateWithoutConsultasInputObjectSchema),
      z.lazy(() => UsuarioUncheckedCreateWithoutConsultasInputObjectSchema),
    ]),
  })
  .strict();

export const UsuarioUpsertWithoutConsultasInputObjectSchema = Schema;
