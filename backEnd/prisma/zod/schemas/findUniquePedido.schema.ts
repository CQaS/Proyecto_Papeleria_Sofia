import { z } from 'zod';
import { PedidoWhereUniqueInputObjectSchema } from './objects/PedidoWhereUniqueInput.schema';

export const PedidoFindUniqueSchema = z.object({
  where: PedidoWhereUniqueInputObjectSchema,
});
