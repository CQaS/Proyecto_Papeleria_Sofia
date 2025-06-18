import { z } from 'zod';
import { ConsultaUpdateInputObjectSchema } from './objects/ConsultaUpdateInput.schema';
import { ConsultaUncheckedUpdateInputObjectSchema } from './objects/ConsultaUncheckedUpdateInput.schema';
import { ConsultaWhereUniqueInputObjectSchema } from './objects/ConsultaWhereUniqueInput.schema';

export const ConsultaUpdateOneSchema = z.object({
  data: z.union([
    ConsultaUpdateInputObjectSchema,
    ConsultaUncheckedUpdateInputObjectSchema,
  ]),
  where: ConsultaWhereUniqueInputObjectSchema,
});
