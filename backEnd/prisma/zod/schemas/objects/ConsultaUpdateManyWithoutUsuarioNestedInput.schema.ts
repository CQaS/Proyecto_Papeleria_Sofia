import { z } from 'zod';
import { ConsultaCreateWithoutUsuarioInputObjectSchema } from './ConsultaCreateWithoutUsuarioInput.schema';
import { ConsultaUncheckedCreateWithoutUsuarioInputObjectSchema } from './ConsultaUncheckedCreateWithoutUsuarioInput.schema';
import { ConsultaCreateOrConnectWithoutUsuarioInputObjectSchema } from './ConsultaCreateOrConnectWithoutUsuarioInput.schema';
import { ConsultaUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema } from './ConsultaUpsertWithWhereUniqueWithoutUsuarioInput.schema';
import { ConsultaCreateManyUsuarioInputEnvelopeObjectSchema } from './ConsultaCreateManyUsuarioInputEnvelope.schema';
import { ConsultaWhereUniqueInputObjectSchema } from './ConsultaWhereUniqueInput.schema';
import { ConsultaUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema } from './ConsultaUpdateWithWhereUniqueWithoutUsuarioInput.schema';
import { ConsultaUpdateManyWithWhereWithoutUsuarioInputObjectSchema } from './ConsultaUpdateManyWithWhereWithoutUsuarioInput.schema';
import { ConsultaScalarWhereInputObjectSchema } from './ConsultaScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ConsultaUpdateManyWithoutUsuarioNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => ConsultaUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema,
        ),
        z
          .lazy(
            () => ConsultaUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ConsultaCreateManyUsuarioInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => ConsultaWhereUniqueInputObjectSchema),
        z.lazy(() => ConsultaWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ConsultaWhereUniqueInputObjectSchema),
        z.lazy(() => ConsultaWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ConsultaWhereUniqueInputObjectSchema),
        z.lazy(() => ConsultaWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ConsultaWhereUniqueInputObjectSchema),
        z.lazy(() => ConsultaWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => ConsultaUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema,
        ),
        z
          .lazy(
            () => ConsultaUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => ConsultaUpdateManyWithWhereWithoutUsuarioInputObjectSchema,
        ),
        z
          .lazy(
            () => ConsultaUpdateManyWithWhereWithoutUsuarioInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ConsultaScalarWhereInputObjectSchema),
        z.lazy(() => ConsultaScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ConsultaUpdateManyWithoutUsuarioNestedInputObjectSchema = Schema;
