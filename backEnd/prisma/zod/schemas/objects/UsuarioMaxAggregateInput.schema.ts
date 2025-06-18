import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UsuarioMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    nombre: z.literal(true).optional(),
    apellido: z.literal(true).optional(),
    email: z.literal(true).optional(),
    password: z.literal(true).optional(),
    rol: z.literal(true).optional(),
    telefono: z.literal(true).optional(),
    direccion: z.literal(true).optional(),
    creadoEn: z.literal(true).optional(),
    actualizadoEn: z.literal(true).optional(),
    resetPasswordToken: z.literal(true).optional(),
    resetPasswordExpires: z.literal(true).optional(),
  })
  .strict();

export const UsuarioMaxAggregateInputObjectSchema = Schema;
