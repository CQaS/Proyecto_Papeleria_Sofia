import { z } from 'zod';
import { RolUsuarioSchema } from '../enums/RolUsuario.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumRolUsuarioFilter> = z
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

export const NestedEnumRolUsuarioFilterObjectSchema = Schema;
