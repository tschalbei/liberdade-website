import { motion } from 'framer-motion';
import { colors } from '../lib/colors';
import { Link } from 'react-router-dom';

const About = () => {
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
              Über uns
            </h1>
            
            <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.text.dark }}>
              Lernen Sie Liberdade AI kennen
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
                Unsere Philosophie
              </h2>
              
              <p className="text-lg text-gray-600 mb-6">
                Bei Liberdade AI verbinden wir die Bedeutung von "Freiheit" mit den Möglichkeiten der künstlichen Intelligenz. Wir glauben, dass KI-Technologien das Potenzial haben, Menschen und Unternehmen zu befreien – von repetitiven Aufgaben, von Einschränkungen und von veralteten Prozessen.
              </p>
              
              <p className="text-lg text-gray-600 mb-6">
                Unser Name "Liberdade" steht für diese Freiheit und für unsere Vision: KI-Lösungen zu entwickeln, die nicht nur technologisch fortschrittlich sind, sondern auch echten Mehrwert schaffen und neue Möglichkeiten eröffnen.
              </p>
              
              <p className="text-lg text-gray-600">
                Wir setzen auf eine verantwortungsvolle Nutzung von KI-Technologien und legen großen Wert auf Transparenz, Datenschutz und ethische Grundsätze in allen unseren Projekten.
              </p>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="rounded-lg overflow-hidden relative">
                <img 
                  src="/images/about_us_philosophy.webp" 
                  alt="liberdade AI Philosophy" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black/10 flex flex-col justify-center items-center p-8">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center mb-8" style={{ backgroundColor: `${colors.primary}99` }}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span style={{ color: 'white' }} className="text-4xl font-bold">
                        liberdade
                      </span>
                      <span style={{ color: colors.accent }} className="text-4xl font-bold ml-2">
                        AI
                      </span>
                    </motion.div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-xl italic text-white mb-4">
                      "KI für mehr Freiheit und Innovation"
                    </p>
                    
                    <div 
                      className="h-1 w-20 mx-auto rounded"
                      style={{ backgroundColor: colors.accent }}
                    />
                  </div>
                </div>
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
              Unsere Werte
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Diese Grundsätze leiten uns bei allem, was wir tun.
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
                  Vertrauen & Sicherheit
                </h3>
                
                <p className="text-gray-600 text-center">
                  Wir legen größten Wert auf Datenschutz, Sicherheit und den verantwortungsvollen Umgang mit Technologie.
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
                  Innovation & Exzellenz
                </h3>
                
                <p className="text-gray-600 text-center">
                  Wir streben kontinuierlich nach neuen Lösungen und höchster Qualität in allen unseren Projekten.
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
                  Partnerschaft & Zusammenarbeit
                </h3>
                
                <p className="text-gray-600 text-center">
                  Wir arbeiten eng mit unseren Kunden zusammen und verstehen uns als langfristiger Partner für Ihren Erfolg.
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
              Unsere Expertise
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Wir vereinen tiefgreifendes Fachwissen in verschiedenen Bereichen der künstlichen Intelligenz.
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
                  KI-Entwicklung
                </h3>
                
                <p className="text-gray-600">
                  Entwicklung und Integration von KI-Lösungen mit modernsten Technologien und Frameworks. Wir beherrschen die gesamte Bandbreite von der Konzeption bis zur Implementierung.
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
                  Datenanalyse
                </h3>
                
                <p className="text-gray-600">
                  Umfassende Analyse und Interpretation von Daten zur Gewinnung wertvoller Erkenntnisse. Wir nutzen fortschrittliche Algorithmen, um verborgene Muster zu erkennen.
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
                  Prozessautomatisierung
                </h3>
                
                <p className="text-gray-600">
                  Automatisierung von Geschäftsprozessen durch intelligente KI-Agenten und Workflows. Wir optimieren Abläufe und steigern die Effizienz.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.dark }}>
                  Kreative KI
                </h3>
                
                <p className="text-gray-600">
                  Einsatz generativer KI für kreative Anwendungen wie Bild- und Texterstellung. Wir erschließen neue Möglichkeiten für Marketing und Produktentwicklung.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16" style={{ backgroundColor: colors.background.lightGray }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1 relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div 
                className="rounded-lg shadow-xl overflow-hidden"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary}11, ${colors.accent}33)`,
                  border: `1px solid ${colors.accent}22`
                }}
              >
                <div className="p-8">
                  <div className="space-y-6">
                    {/* Feature 1 */}
                    <div className="flex items-start">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                        style={{ backgroundColor: `${colors.primary}33` }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold mb-1" style={{ color: colors.text.dark }}>
                          Maßgeschneiderte Lösungen
                        </h4>
                        
                        <p className="text-gray-600">
                          Keine Standardlösungen, sondern individuell auf Ihre Bedürfnisse zugeschnittene KI-Anwendungen.
                        </p>
                      </div>
                    </div>
                    
                    {/* Feature 2 */}
                    <div className="flex items-start">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                        style={{ backgroundColor: `${colors.accent}33` }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke={colors.accent}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold mb-1" style={{ color: colors.text.dark }}>
                          Umfassende Betreuung
                        </h4>
                        
                        <p className="text-gray-600">
                          Von der ersten Beratung bis zur Implementierung und darüber hinaus stehen wir Ihnen zur Seite.
                        </p>
                      </div>
                    </div>
                    
                    {/* Feature 3 */}
                    <div className="flex items-start">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                        style={{ backgroundColor: `${colors.primary}33` }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold mb-1" style={{ color: colors.text.dark }}>
                          Zukunftssichere Technologien
                        </h4>
                        
                        <p className="text-gray-600">
                          Wir setzen auf die neuesten Technologien und halten Ihre Lösungen stets auf dem aktuellen Stand.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6" style={{ color: colors.text.dark }}>
                Warum Liberdade AI wählen?
              </h2>
              
              <p className="text-lg text-gray-600 mb-6">
                Als Ihr Partner für KI-Lösungen bieten wir nicht nur technologisches Know-how, sondern auch ein tiefes Verständnis für Ihre geschäftlichen Anforderungen.
              </p>
              
              <p className="text-lg text-gray-600 mb-6">
                Wir verstehen KI nicht als Selbstzweck, sondern als Werkzeug, um reale Probleme zu lösen und echten Mehrwert zu schaffen. Unser Ziel ist es, Ihnen zu helfen, das volle Potenzial der künstlichen Intelligenz für Ihr Unternehmen zu erschließen.
              </p>
              
              <p className="text-lg text-gray-600">
                Mit Liberdade AI entscheiden Sie sich für einen Partner, der Ihre Vision versteht und mit Ihnen gemeinsam an innovativen Lösungen arbeitet, die Ihr Unternehmen voranbringen.
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
              Bereit, mit uns zusammenzuarbeiten?
            </h2>
            
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Kontaktieren Sie uns für ein unverbindliches Gespräch über Ihre KI-Projekte.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/contact" 
                className="px-8 py-3 rounded-md shadow-lg bg-white hover:bg-gray-100 transition-all"
                style={{ color: colors.primary }}
              >
                Kontakt aufnehmen
              </Link>
              
              <Link 
                to="/appointment" 
                className="px-8 py-3 rounded-md shadow-lg hover:bg-opacity-90 transition-all"
                style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid white' }}
              >
                Termin vereinbaren
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
