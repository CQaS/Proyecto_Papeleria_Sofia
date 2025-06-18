import { z } from 'zod';
import { PromoProductoCreateInputObjectSchema } from './objects/PromoProductoCreateInput.schema';
import { PromoProductoUncheckedCreateInputObjectSchema } from './objects/PromoProductoUncheckedCreateInput.schema';

export const PromoProductoCreateOneSchema = z.object({
  data: z.union([
    PromoProductoCreateInputObjectSchema,
    PromoProductoUncheckedCreateInputObjectSchema,
  ]),
});
