import { z } from 'zod';
import { ConsultaWhereUniqueInputObjectSchema } from './ConsultaWhereUniqueInput.schema';
import { ConsultaUpdateWithoutUsuarioInputObjectSchema } from './ConsultaUpdateWithoutUsuarioInput.schema';
import { ConsultaUncheckedUpdateWithoutUsuarioInputObjectSchema } from './ConsultaUncheckedUpdateWithoutUsuarioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ConsultaUpdateWithWhereUniqueWithoutUsuarioInput> =
  z
    .object({
      where: z.lazy(() => ConsultaWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ConsultaUpdateWithoutUsuarioInputObjectSchema),
        z.lazy(() => ConsultaUncheckedUpdateWithoutUsuarioInputObjectSchema),
      ]),
    })
    .strict();

export const ConsultaUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema =
  Schema;
