import { z } from 'zod';

export const PromocionScalarFieldEnumSchema = z.enum([
  'id',
  'titulo',
  'descripcion',
  'imagenUrl',
  'activa',
  'creadaEn',
]);
