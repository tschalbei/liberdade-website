import { API_CONFIG } from '../config';

// Email service for sending contact form messages via Netlify Functions
// Uses Netlify Functions with environment variables for SMTP configuration

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    // Call email sending function
    const response = await fetch(`${window.location.origin}${API_CONFIG.baseUrl}/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    
    if (result.success) {
      return { success: true, message: 'E-Mail wurde erfolgreich gesendet!' };
    } else {
      return { success: false, message: result.message || 'Fehler beim Senden der E-Mail. Bitte versuchen Sie es später erneut.' };
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      message: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt per E-Mail.' 
    };
  }
};
