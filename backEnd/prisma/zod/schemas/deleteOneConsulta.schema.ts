import { z } from 'zod';
import { ConsultaWhereUniqueInputObjectSchema } from './objects/ConsultaWhereUniqueInput.schema';

export const ConsultaDeleteOneSchema = z.object({
  where: ConsultaWhereUniqueInputObjectSchema,
});
