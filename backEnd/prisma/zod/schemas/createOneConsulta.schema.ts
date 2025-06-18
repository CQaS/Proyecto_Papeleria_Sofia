import { z } from 'zod';
import { ConsultaCreateInputObjectSchema } from './objects/ConsultaCreateInput.schema';
import { ConsultaUncheckedCreateInputObjectSchema } from './objects/ConsultaUncheckedCreateInput.schema';

export const ConsultaCreateOneSchema = z.object({
  data: z.union([
    ConsultaCreateInputObjectSchema,
    ConsultaUncheckedCreateInputObjectSchema,
  ]),
});
