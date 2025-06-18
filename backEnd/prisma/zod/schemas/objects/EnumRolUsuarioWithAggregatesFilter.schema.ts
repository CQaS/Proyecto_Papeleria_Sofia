import { z } from 'zod';
import { RolUsuarioSchema } from '../enums/RolUsuario.schema';
import { NestedEnumRolUsuarioWithAggregatesFilterObjectSchema } from './NestedEnumRolUsuarioWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumRolUsuarioFilterObjectSchema } from './NestedEnumRolUsuarioFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumRolUsuarioWithAggregatesFilter> = z
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
        z.lazy(() => NestedEnumRolUsuarioWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumRolUsuarioFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumRolUsuarioFilterObjectSchema).optional(),
  })
  .strict();

export const EnumRolUsuarioWithAggregatesFilterObjectSchema = Schema;
