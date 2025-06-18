import { z } from 'zod';
import { PromoProductoUpdateInputObjectSchema } from './objects/PromoProductoUpdateInput.schema';
import { PromoProductoUncheckedUpdateInputObjectSchema } from './objects/PromoProductoUncheckedUpdateInput.schema';
import { PromoProductoWhereUniqueInputObjectSchema } from './objects/PromoProductoWhereUniqueInput.schema';

export const PromoProductoUpdateOneSchema = z.object({
  data: z.union([
    PromoProductoUpdateInputObjectSchema,
    PromoProductoUncheckedUpdateInputObjectSchema,
  ]),
  where: PromoProductoWhereUniqueInputObjectSchema,
});
