import { z } from 'zod';
import { PromocionWhereUniqueInputObjectSchema } from './objects/PromocionWhereUniqueInput.schema';
import { PromocionCreateInputObjectSchema } from './objects/PromocionCreateInput.schema';
import { PromocionUncheckedCreateInputObjectSchema } from './objects/PromocionUncheckedCreateInput.schema';
import { PromocionUpdateInputObjectSchema } from './objects/PromocionUpdateInput.schema';
import { PromocionUncheckedUpdateInputObjectSchema } from './objects/PromocionUncheckedUpdateInput.schema';

export const PromocionUpsertSchema = z.object({
  where: PromocionWhereUniqueInputObjectSchema,
  create: z.union([
    PromocionCreateInputObjectSchema,
    PromocionUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PromocionUpdateInputObjectSchema,
    PromocionUncheckedUpdateInputObjectSchema,
  ]),
});
