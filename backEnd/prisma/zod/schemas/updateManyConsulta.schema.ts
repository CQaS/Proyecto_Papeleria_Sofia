import { z } from 'zod';
import { ConsultaUpdateManyMutationInputObjectSchema } from './objects/ConsultaUpdateManyMutationInput.schema';
import { ConsultaWhereInputObjectSchema } from './objects/ConsultaWhereInput.schema';

export const ConsultaUpdateManySchema = z.object({
  data: ConsultaUpdateManyMutationInputObjectSchema,
  where: ConsultaWhereInputObjectSchema.optional(),
});
