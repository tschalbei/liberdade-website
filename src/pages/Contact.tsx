import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { colors } from '../lib/colors';
import { useState } from 'react';
import { useLanguageStore } from '../lib/i18n';
import { sendEmail } from '../api/emailService';

const Contact = () => {
  const { language } = useLanguageStore();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      const result = await sendEmail(formData);
      
      if (result.success) {
        setSubmitSuccess(true);
        setSubmitMessage(result.message);
        setFormSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset form submission status after 5 seconds
        setTimeout(() => {
          setFormSubmitted(false);
          setSubmitSuccess(false);
          setSubmitMessage('');
        }, 5000);
      } else {
        setSubmitSuccess(false);
        setSubmitMessage(result.message);
      }
    } catch (error) {
      setSubmitSuccess(false);
      setSubmitMessage(language === 'de' 
        ? 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.'
        : 'An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{language === 'de' ? 'Kontakt - Liberdade AI' : 'Contact - Liberdade AI'}</title>
        <meta name="description" content={language === 'de' 
          ? 'Kontaktieren Sie Liberdade AI für Ihre KI-Projekte. Wir beraten Sie gerne zu LLM Integration, KI-Agenten, generativer KI und KI-gestütztem Businessaufbau.'
          : 'Contact Liberdade AI for your AI projects. We are happy to advise you on LLM integration, AI agents, generative AI, and AI-supported business development.'} />
        <meta name="keywords" content={language === 'de'
          ? 'Kontakt Liberdade AI, KI Beratung, KI Projekte, LLM Beratung, KI-Agenten Beratung, Generative KI Beratung, KI Business Beratung'
          : 'Contact Liberdade AI, AI Consulting, AI Projects, LLM Consulting, AI Agents Consulting, Generative AI Consulting, AI Business Consulting'} />
        <meta property="og:title" content={language === 'de' ? 'Kontakt - Liberdade AI' : 'Contact - Liberdade AI'} />
        <meta property="og:description" content={language === 'de' 
          ? 'Kontaktieren Sie Liberdade AI für Ihre KI-Projekte. Wir beraten Sie gerne zu LLM Integration, KI-Agenten, generativer KI und KI-gestütztem Businessaufbau.'
          : 'Contact Liberdade AI for your AI projects. We are happy to advise you on LLM integration, AI agents, generative AI, and AI-supported business development.'} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://liberdade.ai/contact" />
        <meta property="og:image" content="https://liberdade.ai/images/ki_header.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={language === 'de' ? 'Kontakt - Liberdade AI' : 'Contact - Liberdade AI'} />
        <meta name="twitter:description" content={language === 'de' 
          ? 'Kontaktieren Sie Liberdade AI für Ihre KI-Projekte. Wir beraten Sie gerne zu LLM Integration, KI-Agenten, generativer KI und KI-gestütztem Businessaufbau.'
          : 'Contact Liberdade AI for your AI projects. We are happy to advise you on LLM integration, AI agents, generative AI, and AI-supported business development.'} />
        <meta name="twitter:image" content="https://liberdade.ai/images/ki_header.jpg" />
        <link rel="canonical" href="https://liberdade.ai/contact" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Language" content={language === 'de' ? 'de-DE' : 'en-US'} />
      </Helmet>
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
              {language === 'de' ? 'Kontakt' : 'Contact'}
            </h1>
            
            <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.text.dark }}>
              {language === 'de' ? 'Wir freuen uns auf Ihre Nachricht' : 'We look forward to hearing from you'}
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
                {language === 'de' ? 'Kontaktieren Sie uns' : 'Contact Us'}
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                {language === 'de' 
                  ? 'Haben Sie Fragen zu unseren KI-Dienstleistungen oder möchten Sie ein Projekt besprechen? Füllen Sie das Formular aus, und wir melden uns umgehend bei Ihnen.'
                  : 'Do you have questions about our AI services or would you like to discuss a project? Fill out the form, and we will get back to you promptly.'}
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
                      {language === 'de' ? 'E-Mail' : 'Email'}
                    </h3>
                    
                    <p className="text-gray-600">
                      <a 
                        href="mailto:info@liberdade.ai" 
                        className="hover:text-gray-900 hover:underline transition-colors"
                        aria-label={language === 'de' ? "E-Mail an info@liberdade.ai senden" : "Send email to info@liberdade.ai"}
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
                      {language === 'de' ? 'Telefon' : 'Phone'}
                    </h3>
                    
                    <p className="text-gray-600">
                      <a 
                        href="tel:+4917026811111" 
                        className="hover:text-gray-900 hover:underline transition-colors"
                        aria-label={language === 'de' ? "Anrufen unter +49 170 268 1111" : "Call +49 170 268 1111"}
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
                      {language === 'de' ? 'Geschäftszeiten' : 'Business Hours'}
                    </h3>
                    
                    <p className="text-gray-600">
                      {language === 'de' ? 'Montag - Freitag: 9:00 - 17:00 Uhr' : 'Monday - Friday: 9:00 AM - 5:00 PM'}
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
                        {language === 'de' ? 'Vielen Dank!' : 'Thank You!'}
                      </h3>
                      
                      <p className="text-gray-600">
                        {language === 'de' 
                          ? 'Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns in Kürze bei Ihnen melden.'
                          : 'Your message has been successfully sent. We will get back to you shortly.'}
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="mb-6">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          {language === 'de' ? 'Name' : 'Name'}
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
                          {language === 'de' ? 'E-Mail' : 'Email'}
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
                          {language === 'de' ? 'Betreff' : 'Subject'}
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
                          {language === 'de' ? 'Nachricht' : 'Message'}
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
                            {language === 'de'
                              ? 'Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten zu.'
                              : 'I have read the privacy policy and agree to the processing of my data.'}
                          </label>
                        </div>
                      </div>
                      
                      {/* Error/Success Message */}
                      {submitMessage && (
                        <div className={`mb-6 p-4 rounded-md ${submitSuccess ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                          <p className={`text-sm ${submitSuccess ? 'text-green-800' : 'text-red-800'}`}>
                            {submitMessage}
                          </p>
                        </div>
                      )}
                      
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-6 py-3 rounded-md text-white font-medium shadow-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{ backgroundColor: colors.primary }}
                      >
                        {isSubmitting 
                          ? (language === 'de' ? 'Wird gesendet...' : 'Sending...') 
                          : (language === 'de' ? 'Nachricht senden' : 'Send Message')
                        }
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
              {language === 'de' ? 'Standort' : 'Location'}
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
              title={language === 'de' ? "Liberdade AI Standort" : "Liberdade AI Location"}
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
                {language === 'de' ? 'Deutschland' : 'Germany'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Contact;
