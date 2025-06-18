import { z } from 'zod';

export const EstadoPedidoSchema = z.enum([
  'PENDIENTE',
  'EN_PROCESO',
  'LISTO_PARA_RETIRO',
  'EN_CAMINO',
  'ENTREGADO',
  'CANCELADO',
]);
