import { motion } from 'framer-motion';
import { colors } from '../lib/colors';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
// Fügen Sie diese Zeilen zu Ihren anderen useState-Hooks am Anfang der Komponente hinzu:
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitError, setSubmitError] = useState<string | null>(null);

// Ersetzen Sie Ihre komplette alte handleSubmit-Funktion durch diese hier:
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitError(null);

  try {
    // Rufe DEINE EIGENE API auf. Der Pfad ist einfach, da sie auf der gleichen Domain liegt.
    const response = await fetch('/.netlify/functions/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // Wir senden nur die Formulardaten, keine SMTP-Details!
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      // Fehlermeldung vom Server anzeigen
      throw new Error(result.message || 'Ein unbekannter Fehler ist aufgetreten.');
    }
    
    // Alles hat geklappt, zeige die "Vielen Dank"-Nachricht
    setFormSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' }); // Formular zurücksetzen

    // "Vielen Dank"-Nachricht nach 5 Sekunden ausblenden
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);

  } catch (error) {
    if (error instanceof Error) {
      setSubmitError(`Fehler: ${error.message}`);
    } else {
      setSubmitError('Ein unbekannter Fehler ist aufgetreten.');
    }
  } finally {
    setIsSubmitting(false); // Ladezustand beenden, egal ob Erfolg oder Fehler
  }
};

// ... der Rest Ihrer Komponente (return ...)

// Innerhalb des <form>...</form> Blocks:
// Passen Sie Ihren Senden-Button an und fügen Sie eine Fehleranzeige hinzu:

<button
  type="submit"
  disabled={isSubmitting} // Verhindert mehrfaches Klicken
  className="w-full px-6 py-3 rounded-md text-white font-medium shadow-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
  style={{ backgroundColor: colors.primary }}
>
  {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
</button>

{submitError && (
  <p className="mt-4 text-sm text-center text-red-600">
    {submitError}
  </p>
)}

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section 
        className="relative py-20"
        style={{ 
          background: `linear-gradient(135deg, ${colors.primary}22, ${colors.accent}33)`,
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.5
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: colors.text.dark }}>
              Kontakt
            </h1>
            
            <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.text.dark }}>
              Wir freuen uns auf Ihre Nachricht
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6" style={{ color: colors.text.dark }}>
                Kontaktieren Sie uns
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                Haben Sie Fragen zu unseren KI-Dienstleistungen oder möchten Sie ein Projekt besprechen? Füllen Sie das Formular aus, und wir melden uns umgehend bei Ihnen.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                    style={{ backgroundColor: `${colors.primary}22` }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-1" style={{ color: colors.text.dark }}>
                      E-Mail
                    </h3>
                    
                    <p className="text-gray-600">
                      <a 
                        href="mailto:info@liberdade.ai" 
                        className="hover:text-gray-900 hover:underline transition-colors"
                        aria-label="E-Mail an info@liberdade.ai senden"
                      >
                        info@liberdade.ai
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                    style={{ backgroundColor: `${colors.accent}22` }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={colors.accent}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-1" style={{ color: colors.text.dark }}>
                      Telefon
                    </h3>
                    
                    <p className="text-gray-600">
                      <a 
                        href="tel:+4917026811111" 
                        className="hover:text-gray-900 hover:underline transition-colors"
                        aria-label="Anrufen unter +49 170 268 1111"
                      >
                        +49 170 268 1111
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                    style={{ backgroundColor: `${colors.primary}22` }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-1" style={{ color: colors.text.dark }}>
                      Geschäftszeiten
                    </h3>
                    
                    <p className="text-gray-600">
                      Montag - Freitag: 9:00 - 17:00 Uhr
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="p-8">
                  {formSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center py-8"
                    >
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                        style={{ backgroundColor: `${colors.primary}22` }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.dark }}>
                        Vielen Dank!
                      </h3>
                      
                      <p className="text-gray-600">
                        Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns in Kürze bei Ihnen melden.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="mb-6">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50"
                          style={{ borderColor: colors.primary }}
                          required
                        />
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          E-Mail
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50"
                          style={{ borderColor: colors.primary }}
                          required
                        />
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Betreff
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50"
                          style={{ borderColor: colors.primary }}
                          required
                        />
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Nachricht
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50"
                          style={{ borderColor: colors.primary }}
                          required
                        ></textarea>
                      </div>
                      
                      <div className="mb-6">
                        <div className="flex items-start">
                          <input
                            id="privacy"
                            name="privacy"
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            required
                          />
                          <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                            Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten zu.
                          </label>
                        </div>
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full px-6 py-3 rounded-md text-white font-medium shadow-lg hover:opacity-90 transition-all"
                        style={{ backgroundColor: colors.primary }}
                      >
                        Nachricht senden
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16" style={{ backgroundColor: colors.background.lightGray }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6" style={{ color: colors.text.dark }}>
              Standort
            </h2>
          </motion.div>
          
          <motion.div
            className="rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Google Maps iframe for Schöffengasse 21, 41751 Viersen */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.5631506559377!2d6.3889889!3d51.2556499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8ac1e56fb51e3%3A0x9dd5709c7889e9e0!2sSch%C3%B6ffengasse%2021%2C%2041751%20Viersen%2C%20Germany!5e0!3m2!1sen!2sus!4v1718348512345!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Liberdade AI Standort"
              className="w-full h-96"
            ></iframe>
            
            <div className="bg-white p-6 text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `${colors.primary}33` }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.dark }}>
                Liberdade AI
              </h3>
              
              <p className="text-gray-600">
                Schöffengasse 21<br />
                41751 Viersen<br />
                Deutschland
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-16"
        style={{ 
          background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              Lieber direkt einen Termin vereinbaren?
            </h2>
            
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Nutzen Sie unser Terminplanungstool für ein persönliches Gespräch.
            </p>
            
            <Link 
              to="/appointment" 
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg bg-white text-gray-800 hover:bg-gray-100 transition-all"
            >
              Termin vereinbaren
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
