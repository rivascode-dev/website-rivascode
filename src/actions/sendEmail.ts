'use server';

import { Resend } from 'resend';
import { emailSchema } from '@/schemas/emailSchema';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState: any, formData: FormData) {
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

    const { nombre, email, mensaje, fax } = validatedFields.data;
    
    // Honeypot validation (bots tend to fill all fields)
    if (fax) {
      console.warn('Posible SPAM detectado via Honeypot. Bloqueando envío.');
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

    const { data, error } = await resend.emails.send({
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
