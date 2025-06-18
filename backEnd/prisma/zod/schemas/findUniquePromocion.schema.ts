import { z } from 'zod';
import { PromocionWhereUniqueInputObjectSchema } from './objects/PromocionWhereUniqueInput.schema';

export const PromocionFindUniqueSchema = z.object({
  where: PromocionWhereUniqueInputObjectSchema,
});
