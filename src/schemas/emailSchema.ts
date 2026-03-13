import { z } from 'zod';

export const emailSchema = z.object({
  nombre: z
    .string()
    .min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  email: z
    .string()
    .email({ message: 'Debe ser un correo electrónico válido.' }),
  mensaje: z
    .string()
    .min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
  // Honeypot field for anti-spam
  fax: z.string().optional(),
});

// Inferimos el tipo de TypeScript automáticamente desde el esquema.
// Esto es súper útil para tener autocompletado exacto en los formularios.
export type EmailFormValues = z.infer<typeof emailSchema>;
