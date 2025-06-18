import { z } from 'zod';
import { PromocionWhereInputObjectSchema } from './objects/PromocionWhereInput.schema';

export const PromocionDeleteManySchema = z.object({
  where: PromocionWhereInputObjectSchema.optional(),
});
