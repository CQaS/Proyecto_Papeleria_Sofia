import { z } from 'zod';

export const ProductoScalarFieldEnumSchema = z.enum([
  'id',
  'nombre',
  'slug',
  'descripcion',
  'precio',
  'stock',
  'imagenUrl',
  'creadoEn',
  'actualizadoEn',
  'estado',
]);
