import { z } from 'zod';
import { ProductoCreateWithoutPromosInputObjectSchema } from './ProductoCreateWithoutPromosInput.schema';
import { ProductoUncheckedCreateWithoutPromosInputObjectSchema } from './ProductoUncheckedCreateWithoutPromosInput.schema';
import { ProductoCreateOrConnectWithoutPromosInputObjectSchema } from './ProductoCreateOrConnectWithoutPromosInput.schema';
import { ProductoUpsertWithoutPromosInputObjectSchema } from './ProductoUpsertWithoutPromosInput.schema';
import { ProductoWhereUniqueInputObjectSchema } from './ProductoWhereUniqueInput.schema';
import { ProductoUpdateWithoutPromosInputObjectSchema } from './ProductoUpdateWithoutPromosInput.schema';
import { ProductoUncheckedUpdateWithoutPromosInputObjectSchema } from './ProductoUncheckedUpdateWithoutPromosInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductoUpdateOneRequiredWithoutPromosNestedInput> =
  z
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
      upsert: z
        .lazy(() => ProductoUpsertWithoutPromosInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ProductoWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ProductoUpdateWithoutPromosInputObjectSchema),
          z.lazy(() => ProductoUncheckedUpdateWithoutPromosInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ProductoUpdateOneRequiredWithoutPromosNestedInputObjectSchema =
  Schema;
