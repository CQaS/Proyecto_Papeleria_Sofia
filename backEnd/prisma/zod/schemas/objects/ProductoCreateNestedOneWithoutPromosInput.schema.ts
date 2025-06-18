import { z } from 'zod';
import { ProductoCreateWithoutPromosInputObjectSchema } from './ProductoCreateWithoutPromosInput.schema';
import { ProductoUncheckedCreateWithoutPromosInputObjectSchema } from './ProductoUncheckedCreateWithoutPromosInput.schema';
import { ProductoCreateOrConnectWithoutPromosInputObjectSchema } from './ProductoCreateOrConnectWithoutPromosInput.schema';
import { ProductoWhereUniqueInputObjectSchema } from './ProductoWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductoCreateNestedOneWithoutPromosInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ProductoCreateWithoutPromosInputObjectSchema),
        z.lazy(() => ProductoUncheckedCreateWithoutPromosInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ProductoCreateOrConnectWithoutPromosInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ProductoWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ProductoCreateNestedOneWithoutPromosInputObjectSchema = Schema;
