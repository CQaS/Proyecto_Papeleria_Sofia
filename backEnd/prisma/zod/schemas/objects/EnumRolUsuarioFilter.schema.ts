import { z } from 'zod';
import { RolUsuarioSchema } from '../enums/RolUsuario.schema';
import { NestedEnumRolUsuarioFilterObjectSchema } from './NestedEnumRolUsuarioFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumRolUsuarioFilter> = z
  .object({
    equals: z.lazy(() => RolUsuarioSchema).optional(),
    in: z
      .union([
        z.lazy(() => RolUsuarioSchema).array(),
        z.lazy(() => RolUsuarioSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => RolUsuarioSchema).array(),
        z.lazy(() => RolUsuarioSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => RolUsuarioSchema),
        z.lazy(() => NestedEnumRolUsuarioFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EnumRolUsuarioFilterObjectSchema = Schema;
