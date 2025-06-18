import { z } from 'zod';
import { ConsultaCreateManyInputObjectSchema } from './objects/ConsultaCreateManyInput.schema';

export const ConsultaCreateManySchema = z.object({
  data: z.union([
    ConsultaCreateManyInputObjectSchema,
    z.array(ConsultaCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
