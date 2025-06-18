import { z } from 'zod';
import { UsuarioCreateNestedOneWithoutPedidosInputObjectSchema } from './UsuarioCreateNestedOneWithoutPedidosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PedidoCreateInput> = z
  .object({
    archivoUrl: z.string(),
    detalles: z.string().optional().nullable(),
    estado: z.string().optional(),
    creadoEn: z.coerce.date().optional(),
    usuario: z.lazy(
      () => UsuarioCreateNestedOneWithoutPedidosInputObjectSchema,
    ),
  })
  .strict();

export const PedidoCreateInputObjectSchema = Schema;
