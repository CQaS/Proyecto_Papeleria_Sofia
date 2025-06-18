import { z } from 'zod';
import { PedidoWhereInputObjectSchema } from './objects/PedidoWhereInput.schema';

export const PedidoDeleteManySchema = z.object({
  where: PedidoWhereInputObjectSchema.optional(),
});
