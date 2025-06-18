import { z } from 'zod';

export const PromoProductoScalarFieldEnumSchema = z.enum([
  'id',
  'productoId',
  'promocionId',
]);
