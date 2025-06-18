import { z } from 'zod';

export const PedidoScalarFieldEnumSchema = z.enum([
  'id',
  'usuarioId',
  'archivoUrl',
  'detalles',
  'estado',
  'total',
  'direccionEnvio',
  'notasInternas',
  'creadoEn',
  'actualizadoEn',
]);
