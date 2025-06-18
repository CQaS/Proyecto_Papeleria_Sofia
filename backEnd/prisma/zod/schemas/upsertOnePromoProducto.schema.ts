import { z } from 'zod';
import { PromoProductoWhereUniqueInputObjectSchema } from './objects/PromoProductoWhereUniqueInput.schema';
import { PromoProductoCreateInputObjectSchema } from './objects/PromoProductoCreateInput.schema';
import { PromoProductoUncheckedCreateInputObjectSchema } from './objects/PromoProductoUncheckedCreateInput.schema';
import { PromoProductoUpdateInputObjectSchema } from './objects/PromoProductoUpdateInput.schema';
import { PromoProductoUncheckedUpdateInputObjectSchema } from './objects/PromoProductoUncheckedUpdateInput.schema';

export const PromoProductoUpsertSchema = z.object({
  where: PromoProductoWhereUniqueInputObjectSchema,
  create: z.union([
    PromoProductoCreateInputObjectSchema,
    PromoProductoUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PromoProductoUpdateInputObjectSchema,
    PromoProductoUncheckedUpdateInputObjectSchema,
  ]),
});
