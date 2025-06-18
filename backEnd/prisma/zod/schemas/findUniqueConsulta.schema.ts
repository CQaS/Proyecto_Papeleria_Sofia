import { z } from 'zod';
import { ConsultaWhereUniqueInputObjectSchema } from './objects/ConsultaWhereUniqueInput.schema';

export const ConsultaFindUniqueSchema = z.object({
  where: ConsultaWhereUniqueInputObjectSchema,
});
