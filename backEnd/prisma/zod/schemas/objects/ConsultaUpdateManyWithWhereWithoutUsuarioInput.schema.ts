import { z } from 'zod';
import { ConsultaScalarWhereInputObjectSchema } from './ConsultaScalarWhereInput.schema';
import { ConsultaUpdateManyMutationInputObjectSchema } from './ConsultaUpdateManyMutationInput.schema';
import { ConsultaUncheckedUpdateManyWithoutConsultasInputObjectSchema } from './ConsultaUncheckedUpdateManyWithoutConsultasInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ConsultaUpdateManyWithWhereWithoutUsuarioInput> =
  z
    .object({
      where: z.lazy(() => ConsultaScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ConsultaUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => ConsultaUncheckedUpdateManyWithoutConsultasInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ConsultaUpdateManyWithWhereWithoutUsuarioInputObjectSchema =
  Schema;
