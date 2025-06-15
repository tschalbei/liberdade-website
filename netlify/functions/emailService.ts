// Email service for sending contact form messages
// This file would typically be used in a backend service
// For frontend-only applications, this would need to be adapted to use a serverless function or API

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    // In a real implementation, this would use a backend API or serverless function
    // to send the email using nodemailer
    
    const response = await fetch('/.netlify/functions/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        // SMTP configuration would be handled securely on the server side
        smtp: {
          host: 'w0187f46.kasserver.com',
          port: 465,
          secure: true,
          auth: {
            user: 'mailer@liberdadeagentur.de',
            // Password would be stored securely on the server, not in client code
          },
          recipient: 'christian@liberdade.de'
        }
      }),
    });

    const result = await response.json();
    
    if (result.success) {
      return { success: true, message: 'E-Mail wurde erfolgreich gesendet!' };
    } else {
      return { success: false, message: 'Fehler beim Senden der E-Mail. Bitte versuchen Sie es später erneut.' };
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      message: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt per E-Mail.' 
    };
  }
};
