import { z } from 'zod';
import { ConsultaWhereUniqueInputObjectSchema } from './ConsultaWhereUniqueInput.schema';
import { ConsultaUpdateWithoutUsuarioInputObjectSchema } from './ConsultaUpdateWithoutUsuarioInput.schema';
import { ConsultaUncheckedUpdateWithoutUsuarioInputObjectSchema } from './ConsultaUncheckedUpdateWithoutUsuarioInput.schema';
import { ConsultaCreateWithoutUsuarioInputObjectSchema } from './ConsultaCreateWithoutUsuarioInput.schema';
import { ConsultaUncheckedCreateWithoutUsuarioInputObjectSchema } from './ConsultaUncheckedCreateWithoutUsuarioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ConsultaUpsertWithWhereUniqueWithoutUsuarioInput> =
  z
    .object({
      where: z.lazy(() => ConsultaWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ConsultaUpdateWithoutUsuarioInputObjectSchema),
        z.lazy(() => ConsultaUncheckedUpdateWithoutUsuarioInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ConsultaCreateWithoutUsuarioInputObjectSchema),
        z.lazy(() => ConsultaUncheckedCreateWithoutUsuarioInputObjectSchema),
      ]),
    })
    .strict();

export const ConsultaUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema =
  Schema;
