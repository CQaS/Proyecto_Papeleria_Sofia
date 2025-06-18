import { z } from 'zod';
import { PromoProductoWhereUniqueInputObjectSchema } from './objects/PromoProductoWhereUniqueInput.schema';

export const PromoProductoDeleteOneSchema = z.object({
  where: PromoProductoWhereUniqueInputObjectSchema,
});
