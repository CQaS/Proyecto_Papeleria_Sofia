import { z } from 'zod';
import { RolUsuarioSchema } from '../enums/RolUsuario.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UsuarioCreateManyInput> = z
  .object({
    id: z.number().optional(),
    nombre: z.string(),
    apellido: z.string().optional().nullable(),
    email: z.string(),
    password: z.string().optional().nullable(),
    rol: z.lazy(() => RolUsuarioSchema).optional(),
    telefono: z.string().optional().nullable(),
    direccion: z.string().optional().nullable(),
    creadoEn: z.coerce.date().optional(),
    actualizadoEn: z.coerce.date().optional(),
    resetPasswordToken: z.string().optional().nullable(),
    resetPasswordExpires: z.coerce.date().optional().nullable(),
  })
  .strict();

export const UsuarioCreateManyInputObjectSchema = Schema;
