import { z } from 'zod';

export const UsuarioScalarFieldEnumSchema = z.enum([
  'id',
  'nombre',
  'email',
  'password',
  'rol',
]);
