import { z } from 'zod';
import { UsuarioCreateWithoutConsultasInputObjectSchema } from './UsuarioCreateWithoutConsultasInput.schema';
import { UsuarioUncheckedCreateWithoutConsultasInputObjectSchema } from './UsuarioUncheckedCreateWithoutConsultasInput.schema';
import { UsuarioCreateOrConnectWithoutConsultasInputObjectSchema } from './UsuarioCreateOrConnectWithoutConsultasInput.schema';
import { UsuarioUpsertWithoutConsultasInputObjectSchema } from './UsuarioUpsertWithoutConsultasInput.schema';
import { UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';
import { UsuarioUpdateWithoutConsultasInputObjectSchema } from './UsuarioUpdateWithoutConsultasInput.schema';
import { UsuarioUncheckedUpdateWithoutConsultasInputObjectSchema } from './UsuarioUncheckedUpdateWithoutConsultasInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UsuarioUpdateOneRequiredWithoutConsultasNestedInput> =
  z
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
      upsert: z
        .lazy(() => UsuarioUpsertWithoutConsultasInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UsuarioWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UsuarioUpdateWithoutConsultasInputObjectSchema),
          z.lazy(() => UsuarioUncheckedUpdateWithoutConsultasInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const UsuarioUpdateOneRequiredWithoutConsultasNestedInputObjectSchema =
  Schema;
