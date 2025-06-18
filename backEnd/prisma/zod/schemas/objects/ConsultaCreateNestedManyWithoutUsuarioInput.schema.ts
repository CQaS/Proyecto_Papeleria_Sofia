import { z } from 'zod';
import { ConsultaCreateWithoutUsuarioInputObjectSchema } from './ConsultaCreateWithoutUsuarioInput.schema';
import { ConsultaUncheckedCreateWithoutUsuarioInputObjectSchema } from './ConsultaUncheckedCreateWithoutUsuarioInput.schema';
import { ConsultaCreateOrConnectWithoutUsuarioInputObjectSchema } from './ConsultaCreateOrConnectWithoutUsuarioInput.schema';
import { ConsultaCreateManyUsuarioInputEnvelopeObjectSchema } from './ConsultaCreateManyUsuarioInputEnvelope.schema';
import { ConsultaWhereUniqueInputObjectSchema } from './ConsultaWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ConsultaCreateNestedManyWithoutUsuarioInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ConsultaCreateWithoutUsuarioInputObjectSchema),
        z.lazy(() => ConsultaCreateWithoutUsuarioInputObjectSchema).array(),
        z.lazy(() => ConsultaUncheckedCreateWithoutUsuarioInputObjectSchema),
        z
          .lazy(() => ConsultaUncheckedCreateWithoutUsuarioInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ConsultaCreateOrConnectWithoutUsuarioInputObjectSchema),
        z
          .lazy(() => ConsultaCreateOrConnectWithoutUsuarioInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ConsultaCreateManyUsuarioInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ConsultaWhereUniqueInputObjectSchema),
        z.lazy(() => ConsultaWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ConsultaCreateNestedManyWithoutUsuarioInputObjectSchema = Schema;
