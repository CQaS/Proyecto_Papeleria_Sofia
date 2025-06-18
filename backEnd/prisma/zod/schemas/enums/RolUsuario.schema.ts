import { z } from 'zod';

export const RolUsuarioSchema = z.enum(['ADMIN', 'CLIENTE', 'EMPLEADO']);
