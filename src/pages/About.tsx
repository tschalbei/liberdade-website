import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { colors } from '../lib/colors';
import { Link } from 'react-router-dom';
import { useLanguageStore, t } from '../lib/i18n';

const About = () => {
  const { language } = useLanguageStore();

  return (
    <>
      <Helmet>
        <title>{language === 'de' ? 'Über uns - Liberdade AI' : 'About us - Liberdade AI'}</title>
        <meta name="description" content={language === 'de' 
          ? 'Lernen Sie Liberdade AI kennen. Unsere Philosophie verbindet Freiheit mit KI-Technologien. Wir entwickeln verantwortungsvolle KI-Lösungen mit Fokus auf Transparenz und ethische Grundsätze.'
          : 'Get to know Liberdade AI. Our philosophy combines freedom with AI technologies. We develop responsible AI solutions with a focus on transparency and ethical principles.'} />
        <meta name="keywords" content={language === 'de'
          ? 'Über Liberdade AI, KI Philosophie, Verantwortungsvolle KI, Transparenz, Datenschutz, Ethische KI, KI Expertise, Innovation'
          : 'About Liberdade AI, AI Philosophy, Responsible AI, Transparency, Data Protection, Ethical AI, AI Expertise, Innovation'} />
        <meta property="og:title" content={language === 'de' ? 'Über uns - Liberdade AI' : 'About us - Liberdade AI'} />
        <meta property="og:description" content={language === 'de' 
          ? 'Lernen Sie Liberdade AI kennen. Unsere Philosophie verbindet Freiheit mit KI-Technologien. Wir entwickeln verantwortungsvolle KI-Lösungen mit Fokus auf Transparenz und ethische Grundsätze.'
          : 'Get to know Liberdade AI. Our philosophy combines freedom with AI technologies. We develop responsible AI solutions with a focus on transparency and ethical principles.'} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://liberdade.ai/about" />
        <meta property="og:image" content="https://liberdade.ai/images/about_us_philosophy.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={language === 'de' ? 'Über uns - Liberdade AI' : 'About us - Liberdade AI'} />
        <meta name="twitter:description" content={language === 'de' 
          ? 'Lernen Sie Liberdade AI kennen. Unsere Philosophie verbindet Freiheit mit KI-Technologien. Wir entwickeln verantwortungsvolle KI-Lösungen mit Fokus auf Transparenz und ethische Grundsätze.'
          : 'Get to know Liberdade AI. Our philosophy combines freedom with AI technologies. We develop responsible AI solutions with a focus on transparency and ethical principles.'} />
        <meta name="twitter:image" content="https://liberdade.ai/images/about_us_philosophy.png" />
        <link rel="canonical" href="https://liberdade.ai/about" />
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
              {t('about.header.title', language)}
            </h1>
            
            <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.text.dark }}>
              {t('about.header.subtitle', language)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6" style={{ color: colors.text.dark }}>
                {language === 'de' ? 'Unsere Philosophie' : 'Our Philosophy'}
              </h2>
              
              <p className="text-lg text-gray-600 mb-6">
                {language === 'de' 
                  ? 'Bei Liberdade AI verbinden wir die Bedeutung von "Freiheit" mit den Möglichkeiten der künstlichen Intelligenz. Wir glauben, dass KI-Technologien das Potenzial haben, Menschen und Unternehmen zu befreien – von repetitiven Aufgaben, von Einschränkungen und von veralteten Prozessen.'
                  : 'At Liberdade AI, we connect the meaning of "freedom" with the possibilities of artificial intelligence. We believe that AI technologies have the potential to liberate people and businesses – from repetitive tasks, from limitations, and from outdated processes.'}
              </p>
              
              <p className="text-lg text-gray-600 mb-6">
                {language === 'de'
                  ? 'Unser Name "Liberdade" steht für diese Freiheit und für unsere Vision: KI-Lösungen zu entwickeln, die nicht nur technologisch fortschrittlich sind, sondern auch echten Mehrwert schaffen und neue Möglichkeiten eröffnen.'
                  : 'Our name "Liberdade" represents this freedom and our vision: to develop AI solutions that are not only technologically advanced but also create real value and open up new possibilities.'}
              </p>
              
              <p className="text-lg text-gray-600">
                {language === 'de'
                  ? 'Wir setzen auf eine verantwortungsvolle Nutzung von KI-Technologien und legen großen Wert auf Transparenz, Datenschutz und ethische Grundsätze in allen unseren Projekten.'
                  : 'We focus on responsible use of AI technologies and place great emphasis on transparency, data protection, and ethical principles in all our projects.'}
              </p>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div 
                className="rounded-lg shadow-xl overflow-hidden"
              >
                <img 
                  src="/images/about_us_philosophy.png" 
                  alt={language === 'de' ? "KI und menschliche Intelligenz - Liberdade AI Philosophie" : "AI and human intelligence - Liberdade AI Philosophy"} 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full" style={{ backgroundColor: colors.primary, opacity: 0.2 }}></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full" style={{ backgroundColor: colors.accent, opacity: 0.2 }}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              {language === 'de' ? 'Unsere Werte' : 'Our Values'}
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {language === 'de' ? 'Diese Grundsätze leiten uns bei allem, was wir tun.' : 'These principles guide us in everything we do.'}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div 
                className="h-3"
                style={{ backgroundColor: colors.primary }}
              ></div>
              <div className="p-6">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                  style={{ backgroundColor: `${colors.primary}22` }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-center" style={{ color: colors.text.dark }}>
                  {language === 'de' ? 'Vertrauen & Sicherheit' : 'Trust & Security'}
                </h3>
                
                <p className="text-gray-600 text-center">
                  {language === 'de'
                    ? 'Wir legen größten Wert auf Datenschutz, Sicherheit und den verantwortungsvollen Umgang mit Technologie.'
                    : 'We place the highest value on data protection, security, and responsible use of technology.'}
                </p>
              </div>
            </motion.div>
            
            {/* Value 2 */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div 
                className="h-3"
                style={{ backgroundColor: colors.accent }}
              ></div>
              <div className="p-6">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                  style={{ backgroundColor: `${colors.accent}22` }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke={colors.accent}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-center" style={{ color: colors.text.dark }}>
                  {language === 'de' ? 'Innovation & Exzellenz' : 'Innovation & Excellence'}
                </h3>
                
                <p className="text-gray-600 text-center">
                  {language === 'de'
                    ? 'Wir streben kontinuierlich nach neuen Lösungen und höchster Qualität in allen unseren Projekten.'
                    : 'We continuously strive for new solutions and the highest quality in all our projects.'}
                </p>
              </div>
            </motion.div>
            
            {/* Value 3 */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div 
                className="h-3"
                style={{ backgroundColor: colors.primary }}
              ></div>
              <div className="p-6">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                  style={{ backgroundColor: `${colors.primary}22` }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-center" style={{ color: colors.text.dark }}>
                  {language === 'de' ? 'Partnerschaft & Zusammenarbeit' : 'Partnership & Collaboration'}
                </h3>
                
                <p className="text-gray-600 text-center">
                  {language === 'de'
                    ? 'Wir arbeiten eng mit unseren Kunden zusammen und verstehen uns als langfristiger Partner für Ihren Erfolg.'
                    : 'We work closely with our customers and see ourselves as a long-term partner for your success.'}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
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
              {language === 'de' ? 'Unsere Expertise' : 'Our Expertise'}
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {language === 'de'
                ? 'Wir vereinen tiefgreifendes Fachwissen in verschiedenen Bereichen der künstlichen Intelligenz.'
                : 'We combine deep expertise in various areas of artificial intelligence.'}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Expertise 1 */}
            <motion.div 
              className="flex"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                style={{ backgroundColor: `${colors.primary}22` }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.dark }}>
                  {language === 'de' ? 'KI-Entwicklung' : 'AI Development'}
                </h3>
                
                <p className="text-gray-600">
                  {language === 'de'
                    ? 'Entwicklung und Integration von KI-Lösungen mit modernsten Technologien und Frameworks. Wir beherrschen die gesamte Bandbreite von der Konzeption bis zur Implementierung.'
                    : 'Development and integration of AI solutions with state-of-the-art technologies and frameworks. We master the entire spectrum from conception to implementation.'}
                </p>
              </div>
            </motion.div>
            
            {/* Expertise 2 */}
            <motion.div 
              className="flex"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                style={{ backgroundColor: `${colors.accent}22` }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke={colors.accent}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.dark }}>
                  {language === 'de' ? 'Datenanalyse' : 'Data Analysis'}
                </h3>
                
                <p className="text-gray-600">
                  {language === 'de'
                    ? 'Umfassende Analyse und Interpretation von Daten zur Gewinnung wertvoller Erkenntnisse. Wir nutzen fortschrittliche Algorithmen, um verborgene Muster zu erkennen.'
                    : 'Comprehensive analysis and interpretation of data to gain valuable insights. We use advanced algorithms to identify hidden patterns.'}
                </p>
              </div>
            </motion.div>
            
            {/* Expertise 3 */}
            <motion.div 
              className="flex"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                style={{ backgroundColor: `${colors.primary}22` }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.dark }}>
                  {language === 'de' ? 'Prozessautomatisierung' : 'Process Automation'}
                </h3>
                
                <p className="text-gray-600">
                  {language === 'de'
                    ? 'Automatisierung von Geschäftsprozessen durch intelligente KI-Lösungen. Wir identifizieren Optimierungspotenziale und setzen diese effizient um.'
                    : 'Automation of business processes through intelligent AI solutions. We identify optimization potential and implement it efficiently.'}
                </p>
              </div>
            </motion.div>
            
            {/* Expertise 4 */}
            <motion.div 
              className="flex"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                style={{ backgroundColor: `${colors.accent}22` }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke={colors.accent}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.dark }}>
                  {language === 'de' ? 'Mobile KI-Lösungen' : 'Mobile AI Solutions'}
                </h3>
                
                <p className="text-gray-600">
                  {language === 'de'
                    ? 'Entwicklung von mobilen Anwendungen mit KI-Funktionalität. Wir bringen intelligente Lösungen auf Smartphones und Tablets.'
                    : 'Development of mobile applications with AI functionality. We bring intelligent solutions to smartphones and tablets.'}
                </p>
              </div>
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
              {language === 'de' ? 'Bereit für die KI-Revolution?' : 'Ready for the AI Revolution?'}
            </h2>
            
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              {language === 'de'
                ? 'Kontaktieren Sie uns noch heute, um zu besprechen, wie wir Ihr Unternehmen mit KI-Lösungen unterstützen können.'
                : 'Contact us today to discuss how we can support your business with AI solutions.'}
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

export default About;
