import { z } from 'zod';

export const PromocionScalarFieldEnumSchema = z.enum([
  'id',
  'titulo',
  'codigo',
  'descripcion',
  'imagenUrl',
  'fechaInicio',
  'fechaFin',
  'activa',
  'creadaEn',
  'actualizadaEn',
]);
