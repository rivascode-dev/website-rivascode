'use server';

import { Resend } from 'resend';
import { emailSchema } from '@/schemas/emailSchema';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState: unknown, formData: FormData) {
  try {
    const rawData = Object.fromEntries(formData.entries());

    // Validación con Zod
    const validatedFields = emailSchema.safeParse(rawData);

    if (!validatedFields.success) {
      // Extraemos el primer error para mostrarlo al usuario de forma amigable
      const firstError =
        validatedFields.error?.issues[0]?.message ||
        'Error de validación en el formulario.';
      return { success: false, message: firstError };
    }

    const { nombre, email, mensaje, fax, startTime, interactionToken } = validatedFields.data;
    
    // Honeypot validation (bots tend to fill all fields)
    if (fax) {
      console.warn('Posible SPAM detectado via Honeypot. Bloqueando envío.');
      return {
        success: true,
        message: '¡Propuesta enviada con éxito! Nos pondremos en contacto pronto.',
      };
    }

    // Human interaction honeypot validation
    if (!interactionToken || !interactionToken.startsWith('human_verified_')) {
      console.warn('Posible SPAM detectado via Interaction Honeypot. Bloqueando envío.');
      return {
        success: true,
        message: '¡Propuesta enviada con éxito! Nos pondremos en contacto pronto.',
      };
    }

    // Time-based Honeypot validation (bots submit instantly)
    if (startTime) {
      const submitTime = Date.now();
      const timeDiff = submitTime - parseInt(startTime, 10);
      if (timeDiff < 4000) {
        console.warn('Posible SPAM detectado via Time-Honeypot. Bloqueando envío.');
        return {
          success: true,
          message: '¡Propuesta enviada con éxito! Nos pondremos en contacto pronto.',
        };
      }
    }

    // Content heuristics validation (gibberish detection)
    if (isSpamContent(nombre, email, mensaje)) {
      console.warn('Posible SPAM detectado via heurísticas de contenido. Bloqueando envío.');
      return {
        success: true,
        message: '¡Propuesta enviada con éxito! Nos pondremos en contacto pronto.',
      };
    }

    if (
      !process.env.RESEND_API_KEY ||
      process.env.RESEND_API_KEY === 're_tuclave'
    ) {
      return {
        success: false,
        message:
          'Aún no has configurado tu RESEND_API_KEY en .env.local. Revisar el plan para instrucciones.',
      };
    }

    const { error } = await resend.emails.send({
      from: 'rivascode.dev <onboarding@resend.dev>',
      to: ['rivascode.dev@gmail.com'],
      subject: `Mensaje de Contacto - ${nombre}`,
      html: `
        <h2>Nuevo mensaje recibido desde el sitio web</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <br/>
        <h3>Mensaje:</h3>
        <p style="white-space: pre-wrap;">${mensaje}</p>
      `,
    });

    if (error) {
      console.error('Error de Resend:', error);
      return {
        success: false,
        message: 'Ocurrió un error al enviar el correo a través de Resend.',
      };
    }

    return {
      success: true,
      message:
        '¡Propuesta enviada con éxito! Nos pondremos en contacto pronto.',
    };
  } catch (err: unknown) {
    console.error('Action error:', err);
    return { success: false, message: 'Error interno del servidor.' };
  }
}

function isSpamContent(nombre: string, email: string, mensaje: string): boolean {
  // 1. Gibberish check: Palabras sospechosamente largas sin espacios
  const words = mensaje.trim().split(/\s+/);
  for (const word of words) {
    if (word.length > 20) {
      return true;
    }
  }

  const nombreWords = nombre.trim().split(/\s+/);
  for (const word of nombreWords) {
    if (word.length > 15) {
      return true;
    }
  }

  // 2. Comprobar patrones de Gmail con múltiples puntos consecutivos o repetidos
  const emailLower = email.toLowerCase();
  if (emailLower.endsWith('@gmail.com')) {
    const localPart = emailLower.split('@')[0];
    const dotCount = (localPart.match(/\./g) || []).length;
    if (dotCount > 4) {
      return true;
    }
  }

  // 3. Patrón de consonantes consecutivas excesivas (gibberish/caracteres aleatorios)
  const gibberishConsonantsRegex = /[bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ]{5,}/;
  if (gibberishConsonantsRegex.test(nombre) || gibberishConsonantsRegex.test(mensaje)) {
    return true;
  }

  return false;
}
