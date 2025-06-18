import { z } from 'zod';
import { UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';
import { UsuarioCreateWithoutConsultasInputObjectSchema } from './UsuarioCreateWithoutConsultasInput.schema';
import { UsuarioUncheckedCreateWithoutConsultasInputObjectSchema } from './UsuarioUncheckedCreateWithoutConsultasInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UsuarioCreateOrConnectWithoutConsultasInput> = z
  .object({
    where: z.lazy(() => UsuarioWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UsuarioCreateWithoutConsultasInputObjectSchema),
      z.lazy(() => UsuarioUncheckedCreateWithoutConsultasInputObjectSchema),
    ]),
  })
  .strict();

export const UsuarioCreateOrConnectWithoutConsultasInputObjectSchema = Schema;
