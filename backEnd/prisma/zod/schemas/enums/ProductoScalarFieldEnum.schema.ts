import { z } from 'zod';

export const ProductoScalarFieldEnumSchema = z.enum([
  'id',
  'nombre',
  'descripcion',
  'precio',
  'imagenUrl',
  'creadoEn',
  'estado',
]);
