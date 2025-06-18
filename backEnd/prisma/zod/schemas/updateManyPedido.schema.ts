import { z } from 'zod';
import { PedidoUpdateManyMutationInputObjectSchema } from './objects/PedidoUpdateManyMutationInput.schema';
import { PedidoWhereInputObjectSchema } from './objects/PedidoWhereInput.schema';

export const PedidoUpdateManySchema = z.object({
  data: PedidoUpdateManyMutationInputObjectSchema,
  where: PedidoWhereInputObjectSchema.optional(),
});
