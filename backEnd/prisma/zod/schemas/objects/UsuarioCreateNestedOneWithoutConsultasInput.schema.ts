import { z } from 'zod';
import { UsuarioCreateWithoutConsultasInputObjectSchema } from './UsuarioCreateWithoutConsultasInput.schema';
import { UsuarioUncheckedCreateWithoutConsultasInputObjectSchema } from './UsuarioUncheckedCreateWithoutConsultasInput.schema';
import { UsuarioCreateOrConnectWithoutConsultasInputObjectSchema } from './UsuarioCreateOrConnectWithoutConsultasInput.schema';
import { UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UsuarioCreateNestedOneWithoutConsultasInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UsuarioCreateWithoutConsultasInputObjectSchema),
        z.lazy(() => UsuarioUncheckedCreateWithoutConsultasInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UsuarioCreateOrConnectWithoutConsultasInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UsuarioWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UsuarioCreateNestedOneWithoutConsultasInputObjectSchema = Schema;
