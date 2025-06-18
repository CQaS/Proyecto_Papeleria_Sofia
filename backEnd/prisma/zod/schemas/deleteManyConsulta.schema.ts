import { z } from 'zod';
import { ConsultaWhereInputObjectSchema } from './objects/ConsultaWhereInput.schema';

export const ConsultaDeleteManySchema = z.object({
  where: ConsultaWhereInputObjectSchema.optional(),
});
