import { z } from 'zod';

export const UsuarioScalarFieldEnumSchema = z.enum([
  'id',
  'nombre',
  'apellido',
  'email',
  'password',
  'rol',
  'telefono',
  'direccion',
  'creadoEn',
  'actualizadoEn',
  'resetPasswordToken',
  'resetPasswordExpires',
]);
