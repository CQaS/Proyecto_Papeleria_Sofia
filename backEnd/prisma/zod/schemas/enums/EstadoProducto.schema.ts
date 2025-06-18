import { z } from 'zod';

export const EstadoProductoSchema = z.enum(['ACTIVO', 'INACTIVO', 'ARCHIVADO']);
