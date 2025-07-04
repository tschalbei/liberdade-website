const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ success: false, message: 'Method not allowed' }),
    };
  }

  try {
    // Log incoming request body for debugging
    console.log('Received request body:', event.body);

    const { name, email, subject, message } = JSON.parse(event.body);

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          success: false, 
          message: 'Alle Felder sind erforderlich.' 
        }),
      };
    }

    // Log environment variables for debugging
    console.log('SMTP Configuration:', {
      SMTP_HOST: process.env.SMTP_HOST,
      SMTP_PORT: process.env.SMTP_PORT,
      SMTP_USER: process.env.SMTP_USER,
      EMAIL_RECIPIENT: process.env.EMAIL_RECIPIENT
    });

    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Validate transporter configuration
    if (!transporter) {
      return {
        statusCode: 500,
        body: JSON.stringify({ 
          success: false, 
          message: 'SMTP Transporter konnte nicht erstellt werden.' 
        }),
      };
    }

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_RECIPIENT,
      subject: `Kontaktformular: ${subject}`,
      html: `
        <h2>Neue Nachricht vom Kontaktformular</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Betreff:</strong> ${subject}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Diese Nachricht wurde über das Kontaktformular der Liberdade AI Webseite gesendet.</em></p>
      `,
      text: `
        Neue Nachricht vom Kontaktformular
        
        Name: ${name}
        E-Mail: ${email}
        Betreff: ${subject}
        
        Nachricht:
        ${message}
        
        ---
        Diese Nachricht wurde über das Kontaktformular der Liberdade AI Webseite gesendet.
      `,
    };

    // Send email
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
      
      return {
        statusCode: 200,
        body: JSON.stringify({ 
          success: true, 
          message: 'E-Mail wurde erfolgreich gesendet!' 
        }),
      };
    } catch (sendError) {
      console.error('Error sending email:', sendError);
      
      // Try to get more specific error information
      let errorMessage = 'Fehler beim Senden der E-Mail. Bitte versuchen Sie es später erneut.';
      if (sendError.response) {
        errorMessage = `Fehler beim Senden: ${sendError.response}`;
      } else if (sendError.message) {
        errorMessage = `Fehler: ${sendError.message}`;
      }
      
      return {
        statusCode: 500,
        body: JSON.stringify({ 
          success: false, 
          message: errorMessage
        }),
      };
    }
  } catch (error) {
    console.error('Unexpected error:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        success: false, 
        message: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.'
      }),
    };
  }
};

