import { z } from 'zod';
import { PedidoUpdateInputObjectSchema } from './objects/PedidoUpdateInput.schema';
import { PedidoUncheckedUpdateInputObjectSchema } from './objects/PedidoUncheckedUpdateInput.schema';
import { PedidoWhereUniqueInputObjectSchema } from './objects/PedidoWhereUniqueInput.schema';

export const PedidoUpdateOneSchema = z.object({
  data: z.union([
    PedidoUpdateInputObjectSchema,
    PedidoUncheckedUpdateInputObjectSchema,
  ]),
  where: PedidoWhereUniqueInputObjectSchema,
});
