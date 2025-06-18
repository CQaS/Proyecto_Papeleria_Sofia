import { z } from 'zod';
import { ConsultaWhereUniqueInputObjectSchema } from './objects/ConsultaWhereUniqueInput.schema';
import { ConsultaCreateInputObjectSchema } from './objects/ConsultaCreateInput.schema';
import { ConsultaUncheckedCreateInputObjectSchema } from './objects/ConsultaUncheckedCreateInput.schema';
import { ConsultaUpdateInputObjectSchema } from './objects/ConsultaUpdateInput.schema';
import { ConsultaUncheckedUpdateInputObjectSchema } from './objects/ConsultaUncheckedUpdateInput.schema';

export const ConsultaUpsertSchema = z.object({
  where: ConsultaWhereUniqueInputObjectSchema,
  create: z.union([
    ConsultaCreateInputObjectSchema,
    ConsultaUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ConsultaUpdateInputObjectSchema,
    ConsultaUncheckedUpdateInputObjectSchema,
  ]),
});
