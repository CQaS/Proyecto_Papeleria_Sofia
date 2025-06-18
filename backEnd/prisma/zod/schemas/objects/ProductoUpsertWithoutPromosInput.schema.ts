import { z } from 'zod';
import { ProductoUpdateWithoutPromosInputObjectSchema } from './ProductoUpdateWithoutPromosInput.schema';
import { ProductoUncheckedUpdateWithoutPromosInputObjectSchema } from './ProductoUncheckedUpdateWithoutPromosInput.schema';
import { ProductoCreateWithoutPromosInputObjectSchema } from './ProductoCreateWithoutPromosInput.schema';
import { ProductoUncheckedCreateWithoutPromosInputObjectSchema } from './ProductoUncheckedCreateWithoutPromosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductoUpsertWithoutPromosInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProductoUpdateWithoutPromosInputObjectSchema),
      z.lazy(() => ProductoUncheckedUpdateWithoutPromosInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ProductoCreateWithoutPromosInputObjectSchema),
      z.lazy(() => ProductoUncheckedCreateWithoutPromosInputObjectSchema),
    ]),
  })
  .strict();

export const ProductoUpsertWithoutPromosInputObjectSchema = Schema;
