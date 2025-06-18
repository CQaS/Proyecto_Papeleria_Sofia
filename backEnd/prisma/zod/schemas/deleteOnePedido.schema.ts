import { z } from 'zod';
import { PedidoWhereUniqueInputObjectSchema } from './objects/PedidoWhereUniqueInput.schema';

export const PedidoDeleteOneSchema = z.object({
  where: PedidoWhereUniqueInputObjectSchema,
});
