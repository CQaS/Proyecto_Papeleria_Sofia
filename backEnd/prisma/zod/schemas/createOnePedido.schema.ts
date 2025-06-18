import { z } from 'zod';
import { PedidoCreateInputObjectSchema } from './objects/PedidoCreateInput.schema';
import { PedidoUncheckedCreateInputObjectSchema } from './objects/PedidoUncheckedCreateInput.schema';

export const PedidoCreateOneSchema = z.object({
  data: z.union([
    PedidoCreateInputObjectSchema,
    PedidoUncheckedCreateInputObjectSchema,
  ]),
});
