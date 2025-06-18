import { z } from 'zod';

export const ConsultaScalarFieldEnumSchema = z.enum([
  'id',
  'usuarioId',
  'mensaje',
  'leido',
  'creadoEn',
]);
