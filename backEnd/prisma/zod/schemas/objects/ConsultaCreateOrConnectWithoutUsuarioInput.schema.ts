import { z } from 'zod';
import { ConsultaWhereUniqueInputObjectSchema } from './ConsultaWhereUniqueInput.schema';
import { ConsultaCreateWithoutUsuarioInputObjectSchema } from './ConsultaCreateWithoutUsuarioInput.schema';
import { ConsultaUncheckedCreateWithoutUsuarioInputObjectSchema } from './ConsultaUncheckedCreateWithoutUsuarioInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ConsultaCreateOrConnectWithoutUsuarioInput> = z
  .object({
    where: z.lazy(() => ConsultaWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ConsultaCreateWithoutUsuarioInputObjectSchema),
      z.lazy(() => ConsultaUncheckedCreateWithoutUsuarioInputObjectSchema),
    ]),
  })
  .strict();

export const ConsultaCreateOrConnectWithoutUsuarioInputObjectSchema = Schema;
