import { z } from 'zod';
import { ProductoWhereUniqueInputObjectSchema } from './ProductoWhereUniqueInput.schema';
import { ProductoCreateWithoutPromosInputObjectSchema } from './ProductoCreateWithoutPromosInput.schema';
import { ProductoUncheckedCreateWithoutPromosInputObjectSchema } from './ProductoUncheckedCreateWithoutPromosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductoCreateOrConnectWithoutPromosInput> = z
  .object({
    where: z.lazy(() => ProductoWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProductoCreateWithoutPromosInputObjectSchema),
      z.lazy(() => ProductoUncheckedCreateWithoutPromosInputObjectSchema),
    ]),
  })
  .strict();

export const ProductoCreateOrConnectWithoutPromosInputObjectSchema = Schema;
