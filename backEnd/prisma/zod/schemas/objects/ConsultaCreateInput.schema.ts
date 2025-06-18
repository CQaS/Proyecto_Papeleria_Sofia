import { z } from 'zod';
import { UsuarioCreateNestedOneWithoutConsultasInputObjectSchema } from './UsuarioCreateNestedOneWithoutConsultasInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ConsultaCreateInput> = z
  .object({
    mensaje: z.string(),
    leido: z.boolean().optional(),
    creadoEn: z.coerce.date().optional(),
    usuario: z.lazy(
      () => UsuarioCreateNestedOneWithoutConsultasInputObjectSchema,
    ),
  })
  .strict();

export const ConsultaCreateInputObjectSchema = Schema;
