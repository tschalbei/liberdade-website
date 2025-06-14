// /api/send-email.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Nur POST-Anfragen erlauben
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  // Formulardaten aus der Anfrage holen
  const { name, email, subject, message } = req.body;
  
  // Prüfen, ob alle Felder ausgefüllt sind
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'Bitte alle Felder ausfüllen.' });
  }

  // Transporter-Objekt mit den Daten aus den Umgebungsvariablen erstellen
  // Diese Daten sind für den Besucher NICHT sichtbar.
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, // true für Port 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS, // Das Passwort
    },
  });

  try {
    // E-Mail senden
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`, // Absender ist Ihre Mailer-Adresse
      to: process.env.EMAIL_RECIPIENT, // Empfänger
      replyTo: email, // Setzt die "Antworten an"-Adresse auf die des Nutzers
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

    return res.status(200).json({ success: true, message: 'Email erfolgreich gesendet.' });

  } catch (error) {
    console.error('Fehler beim Senden der E-Mail:', error);
    return res.status(500).json({ success: false, message: 'E-Mail konnte nicht gesendet werden.' });
  }
}