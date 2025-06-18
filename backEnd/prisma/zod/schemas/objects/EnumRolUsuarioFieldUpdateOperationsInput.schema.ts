import { z } from 'zod';
import { RolUsuarioSchema } from '../enums/RolUsuario.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumRolUsuarioFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => RolUsuarioSchema).optional(),
  })
  .strict();

export const EnumRolUsuarioFieldUpdateOperationsInputObjectSchema = Schema;
