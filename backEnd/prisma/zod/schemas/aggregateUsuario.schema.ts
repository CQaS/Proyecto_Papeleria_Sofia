import { z } from 'zod';
import { UsuarioOrderByWithRelationInputObjectSchema } from './objects/UsuarioOrderByWithRelationInput.schema';
import { UsuarioWhereInputObjectSchema } from './objects/UsuarioWhereInput.schema';
import { UsuarioWhereUniqueInputObjectSchema } from './objects/UsuarioWhereUniqueInput.schema';
import { UsuarioCountAggregateInputObjectSchema } from './objects/UsuarioCountAggregateInput.schema';
import { UsuarioMinAggregateInputObjectSchema } from './objects/UsuarioMinAggregateInput.schema';
import { UsuarioMaxAggregateInputObjectSchema } from './objects/UsuarioMaxAggregateInput.schema';
import { UsuarioAvgAggregateInputObjectSchema } from './objects/UsuarioAvgAggregateInput.schema';
import { UsuarioSumAggregateInputObjectSchema } from './objects/UsuarioSumAggregateInput.schema';

export const UsuarioAggregateSchema = z.object({
  orderBy: z
    .union([
      UsuarioOrderByWithRelationInputObjectSchema,
      UsuarioOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: UsuarioWhereInputObjectSchema.optional(),
  cursor: UsuarioWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), UsuarioCountAggregateInputObjectSchema])
    .optional(),
  _min: UsuarioMinAggregateInputObjectSchema.optional(),
  _max: UsuarioMaxAggregateInputObjectSchema.optional(),
  _avg: UsuarioAvgAggregateInputObjectSchema.optional(),
  _sum: UsuarioSumAggregateInputObjectSchema.optional(),
});
