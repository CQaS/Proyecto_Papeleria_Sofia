import { z } from 'zod';
import { PedidoCreateManyInputObjectSchema } from './objects/PedidoCreateManyInput.schema';

export const PedidoCreateManySchema = z.object({
  data: z.union([
    PedidoCreateManyInputObjectSchema,
    z.array(PedidoCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
