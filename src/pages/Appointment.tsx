import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { colors } from '../lib/colors';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLanguageStore } from '../lib/i18n';

const Appointment = () => {
  const { language } = useLanguageStore();
  
  // Effect to load TidyCal script
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
    script.async = true;
    
    // Append to document
    document.body.appendChild(script);
    
    // Cleanup function
    return () => {
      // Only remove if script exists
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>{language === 'de' ? 'Termin vereinbaren - Liberdade AI' : 'Book appointment - Liberdade AI'}</title>
        <meta name="description" content={language === 'de' 
          ? 'Buchen Sie einen Beratungstermin mit unserem KI-Team. Nutzen Sie unser Online-Buchungssystem, um einen Termin zu vereinbaren, der Ihnen am besten passt.'
          : 'Book a consultation appointment with our AI team. Use our online booking system to schedule an appointment that suits you best.'} />
        <meta name="keywords" content={language === 'de'
          ? 'Termin buchen, KI Beratung, Liberdade AI Termin, Online Buchung, KI Beratungstermin, TidyCal, Terminvereinbarung'
          : 'Book appointment, AI consultation, Liberdade AI appointment, Online booking, AI consultation appointment, TidyCal, Schedule appointment'} />
        <meta property="og:title" content={language === 'de' ? 'Termin vereinbaren - Liberdade AI' : 'Book appointment - Liberdade AI'} />
        <meta property="og:description" content={language === 'de' 
          ? 'Buchen Sie einen Beratungstermin mit unserem KI-Team. Nutzen Sie unser Online-Buchungssystem, um einen Termin zu vereinbaren, der Ihnen am besten passt.'
          : 'Book a consultation appointment with our AI team. Use our online booking system to schedule an appointment that suits you best.'} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://liberdade.ai/appointment" />
        <meta property="og:image" content="https://liberdade.ai/images/ki_header.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={language === 'de' ? 'Termin vereinbaren - Liberdade AI' : 'Book appointment - Liberdade AI'} />
        <meta name="twitter:description" content={language === 'de' 
          ? 'Buchen Sie einen Beratungstermin mit unserem KI-Team. Nutzen Sie unser Online-Buchungssystem, um einen Termin zu vereinbaren, der Ihnen am besten passt.'
          : 'Book a consultation appointment with our AI team. Use our online booking system to schedule an appointment that suits you best.'} />
        <meta name="twitter:image" content="https://liberdade.ai/images/ki_header.jpg" />
        <link rel="canonical" href="https://liberdade.ai/appointment" />
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
              {language === 'de' ? 'Termin vereinbaren' : 'Schedule an Appointment'}
            </h1>
            
            <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.text.dark }}>
              {language === 'de' 
                ? 'Buchen Sie einen Beratungstermin mit unserem KI-Team' 
                : 'Book a consultation with our AI team'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* TidyCal Integration Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6" style={{ color: colors.text.dark }}>
              {language === 'de' ? 'Wählen Sie einen passenden Termin' : 'Choose a Suitable Time'}
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {language === 'de'
                ? 'Nutzen Sie unser Online-Buchungssystem, um einen Termin zu vereinbaren, der Ihnen am besten passt.'
                : 'Use our online booking system to schedule an appointment that works best for you.'}
            </p>
          </motion.div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="p-0 md:p-6">
              {/* TidyCal Inline Widget */}
              <div className="tidycal-embed" data-path="liberdade/45"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              {language === 'de' ? 'Vorteile eines persönlichen Gesprächs' : 'Benefits of a Personal Consultation'}
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                style={{ backgroundColor: `${colors.primary}22` }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-center" style={{ color: colors.text.dark }}>
                {language === 'de' ? 'Maßgeschneiderte Beratung' : 'Tailored Consultation'}
              </h3>
              
              <p className="text-gray-600 text-center">
                {language === 'de'
                  ? 'Wir analysieren Ihre individuellen Anforderungen und entwickeln passgenaue KI-Lösungen für Ihr Unternehmen.'
                  : 'We analyze your individual requirements and develop customized AI solutions for your business.'}
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                style={{ backgroundColor: `${colors.accent}22` }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke={colors.accent}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-center" style={{ color: colors.text.dark }}>
                {language === 'de' ? 'Zeitersparnis' : 'Time Savings'}
              </h3>
              
              <p className="text-gray-600 text-center">
                {language === 'de'
                  ? 'Durch die direkte Beratung sparen Sie Zeit und können schneller von den Vorteilen der KI-Technologie profitieren.'
                  : 'Through direct consultation, you save time and can benefit more quickly from the advantages of AI technology.'}
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                style={{ backgroundColor: `${colors.primary}22` }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-center" style={{ color: colors.text.dark }}>
                {language === 'de' ? 'Expertenwissen' : 'Expert Knowledge'}
              </h3>
              
              <p className="text-gray-600 text-center">
                {language === 'de'
                  ? 'Profitieren Sie von unserem umfassenden Fachwissen in den Bereichen LLMs, KI-Agenten und generative KI.'
                  : 'Benefit from our comprehensive expertise in LLMs, AI agents, and generative AI.'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6" style={{ color: colors.text.dark }}>
              {language === 'de' ? 'Häufig gestellte Fragen' : 'Frequently Asked Questions'}
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3" style={{ color: colors.text.dark }}>
                {language === 'de' ? 'Wie läuft ein Beratungsgespräch ab?' : 'How does a consultation work?'}
              </h3>
              <p className="text-gray-600">
                {language === 'de'
                  ? 'Nach der Terminbuchung erhalten Sie eine Bestätigungs-E-Mail mit allen Details. Das Gespräch findet per Zoom statt und dauert in der Regel 60 Minuten. Wir analysieren Ihre Anforderungen und entwickeln gemeinsam erste Lösungsansätze.'
                  : 'After booking an appointment, you will receive a confirmation email with all details. The conversation takes place via Zoom and usually lasts 60 minutes. We analyze your requirements and develop initial solution approaches together.'}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3" style={{ color: colors.text.dark }}>
                {language === 'de' ? 'Ist das Erstgespräch kostenpflichtig?' : 'Is the initial consultation chargeable?'}
              </h3>
              <p className="text-gray-600">
                {language === 'de'
                  ? 'Das erste Beratungsgespräch ist unverbindlich und kostenfrei. Es dient dazu, Ihre Anforderungen zu verstehen und zu prüfen, ob und wie wir Ihnen helfen können.'
                  : 'The first consultation is non-binding and free of charge. It serves to understand your requirements and to check if and how we can help you.'}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3" style={{ color: colors.text.dark }}>
                {language === 'de' ? 'Wie bereite ich mich auf das Gespräch vor?' : 'How do I prepare for the conversation?'}
              </h3>
              <p className="text-gray-600">
                {language === 'de'
                  ? 'Überlegen Sie sich, welche Herausforderungen Sie mit KI lösen möchten und welche Prozesse in Ihrem Unternehmen optimiert werden könnten. Je konkreter Ihre Vorstellungen, desto zielgerichteter können wir beraten.'
                  : 'Consider which challenges you want to solve with AI and which processes in your company could be optimized. The more concrete your ideas, the more targeted we can advise.'}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3" style={{ color: colors.text.dark }}>
                {language === 'de' ? 'Was passiert nach dem Erstgespräch?' : 'What happens after the initial consultation?'}
              </h3>
              <p className="text-gray-600">
                {language === 'de'
                  ? 'Nach dem Gespräch erhalten Sie von uns ein unverbindliches Angebot mit einem konkreten Lösungsvorschlag und Kostenrahmen. Sie entscheiden dann, ob und wie Sie mit uns zusammenarbeiten möchten.'
                  : 'After the conversation, you will receive a non-binding offer from us with a concrete solution proposal and cost framework. You then decide if and how you would like to work with us.'}
              </p>
            </motion.div>
          </div>
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
              {language === 'de' ? 'Haben Sie noch Fragen?' : 'Do you have any questions?'}
            </h2>
            
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              {language === 'de'
                ? 'Kontaktieren Sie uns direkt, wenn Sie weitere Informationen benötigen.'
                : 'Contact us directly if you need more information.'}
            </p>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg bg-white text-gray-800 hover:bg-gray-100 transition-all"
            >
              {language === 'de' ? 'Kontakt aufnehmen' : 'Get in Touch'}
            </Link>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Appointment;
