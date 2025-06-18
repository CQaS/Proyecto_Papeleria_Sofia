import { z } from 'zod';
import { PedidoScalarWhereInputObjectSchema } from './PedidoScalarWhereInput.schema';
import { PedidoUpdateManyMutationInputObjectSchema } from './PedidoUpdateManyMutationInput.schema';
import { PedidoUncheckedUpdateManyWithoutPedidosInputObjectSchema } from './PedidoUncheckedUpdateManyWithoutPedidosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PedidoUpdateManyWithWhereWithoutUsuarioInput> = z
  .object({
    where: z.lazy(() => PedidoScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => PedidoUpdateManyMutationInputObjectSchema),
      z.lazy(() => PedidoUncheckedUpdateManyWithoutPedidosInputObjectSchema),
    ]),
  })
  .strict();

export const PedidoUpdateManyWithWhereWithoutUsuarioInputObjectSchema = Schema;
