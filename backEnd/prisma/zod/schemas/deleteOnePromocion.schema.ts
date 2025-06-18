import { z } from 'zod';
import { PromocionWhereUniqueInputObjectSchema } from './objects/PromocionWhereUniqueInput.schema';

export const PromocionDeleteOneSchema = z.object({
  where: PromocionWhereUniqueInputObjectSchema,
});
