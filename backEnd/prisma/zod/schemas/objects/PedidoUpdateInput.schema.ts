import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { EstadoPedidoSchema } from '../enums/EstadoPedido.schema';
import { EnumEstadoPedidoFieldUpdateOperationsInputObjectSchema } from './EnumEstadoPedidoFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UsuarioUpdateOneRequiredWithoutPedidosNestedInputObjectSchema } from './UsuarioUpdateOneRequiredWithoutPedidosNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PedidoUpdateInput> = z
  .object({
    archivoUrl: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    detalles: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    estado: z
      .union([
        z.lazy(() => EstadoPedidoSchema),
        z.lazy(() => EnumEstadoPedidoFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    total: z
      .union([
        z.number(),
        z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    direccionEnvio: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    notasInternas: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    creadoEn: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    actualizadoEn: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    usuario: z
      .lazy(() => UsuarioUpdateOneRequiredWithoutPedidosNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const PedidoUpdateInputObjectSchema = Schema;
