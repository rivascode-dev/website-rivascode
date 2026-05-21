import { z } from 'zod';

const urlRegex = /(http:\/\/|https:\/\/|www\.)/i;

export const emailSchema = z.object({
  nombre: z
    .string()
    .min(2, { message: 'El nombre debe tener al menos 2 caracteres.' })
    .max(50, { message: 'El nombre es demasiado largo.' })
    .refine((val) => !urlRegex.test(val), {
      message: 'El nombre no puede contener enlaces.',
    }),
  email: z
    .string()
    .email({ message: 'Debe ser un correo electrónico válido.' }),
  mensaje: z
    .string()
    .min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' })
    .refine((val) => !urlRegex.test(val), {
      message: 'Por razones de seguridad, no se permiten enlaces en el mensaje.',
    }),
  // Honeypot field for anti-spam
  fax: z.string().optional(),
  // Time-based honeypot
  startTime: z.string().optional(),
  // Human interaction token honeypot
  interactionToken: z.string().optional(),
});

// Inferimos el tipo de TypeScript automáticamente desde el esquema.
// Esto es súper útil para tener autocompletado exacto en los formularios.
export type EmailFormValues = z.infer<typeof emailSchema>;
