import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { PedidoUpdateManyWithoutUsuarioNestedInputObjectSchema } from './PedidoUpdateManyWithoutUsuarioNestedInput.schema';
import { ConsultaUpdateManyWithoutUsuarioNestedInputObjectSchema } from './ConsultaUpdateManyWithoutUsuarioNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UsuarioUpdateInput> = z
  .object({
    nombre: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    email: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    password: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    rol: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    pedidos: z
      .lazy(() => PedidoUpdateManyWithoutUsuarioNestedInputObjectSchema)
      .optional(),
    consultas: z
      .lazy(() => ConsultaUpdateManyWithoutUsuarioNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const UsuarioUpdateInputObjectSchema = Schema;
