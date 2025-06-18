import { z } from 'zod';
import { PromocionUpdateInputObjectSchema } from './objects/PromocionUpdateInput.schema';
import { PromocionUncheckedUpdateInputObjectSchema } from './objects/PromocionUncheckedUpdateInput.schema';
import { PromocionWhereUniqueInputObjectSchema } from './objects/PromocionWhereUniqueInput.schema';

export const PromocionUpdateOneSchema = z.object({
  data: z.union([
    PromocionUpdateInputObjectSchema,
    PromocionUncheckedUpdateInputObjectSchema,
  ]),
  where: PromocionWhereUniqueInputObjectSchema,
});
