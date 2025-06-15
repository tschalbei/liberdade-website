// netlify/functions/send-email.js

import nodemailer from 'nodemailer';

// Die Handler-Funktion für Netlify. Beachten Sie "event" anstelle von "req".
export async function handler(event) {
  // Nur POST-Anfragen erlauben
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    // Die Daten aus dem Body der Anfrage auslesen und parsen
    const data = JSON.parse(event.body);
    const { name, email, subject, message } = data;

    // Prüfen, ob alle Felder ausgefüllt sind
    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, message: 'Bitte alle Felder ausfüllen.' }),
      };
    }

    // Transporter-Objekt mit den Daten aus den Umgebungsvariablen erstellen
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true, // true für Port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // E-Mail senden
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_RECIPIENT,
      replyTo: email,
      subject: `Webseite-Kontakt: ${subject}`,
      html: `
        <h3>Neue Nachricht vom Kontaktformular</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Betreff:</strong> ${subject}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });
    
    // Dies ist das korrekte Antwortformat für Netlify Functions
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Email erfolgreich gesendet.' }),
    };

  } catch (error) {
    // Loggen Sie den Fehler im Netlify Functions Log für die Fehlersuche
    console.error('Fehler in der send-email Funktion:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: 'E-Mail konnte nicht gesendet werden.' }),
    };
  }
}