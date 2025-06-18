import { z } from 'zod';
import { PromoProductoWhereUniqueInputObjectSchema } from './objects/PromoProductoWhereUniqueInput.schema';

export const PromoProductoFindUniqueSchema = z.object({
  where: PromoProductoWhereUniqueInputObjectSchema,
});
