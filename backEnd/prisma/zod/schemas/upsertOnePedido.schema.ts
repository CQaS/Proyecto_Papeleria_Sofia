import { z } from 'zod';
import { PedidoWhereUniqueInputObjectSchema } from './objects/PedidoWhereUniqueInput.schema';
import { PedidoCreateInputObjectSchema } from './objects/PedidoCreateInput.schema';
import { PedidoUncheckedCreateInputObjectSchema } from './objects/PedidoUncheckedCreateInput.schema';
import { PedidoUpdateInputObjectSchema } from './objects/PedidoUpdateInput.schema';
import { PedidoUncheckedUpdateInputObjectSchema } from './objects/PedidoUncheckedUpdateInput.schema';

export const PedidoUpsertSchema = z.object({
  where: PedidoWhereUniqueInputObjectSchema,
  create: z.union([
    PedidoCreateInputObjectSchema,
    PedidoUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PedidoUpdateInputObjectSchema,
    PedidoUncheckedUpdateInputObjectSchema,
  ]),
});
