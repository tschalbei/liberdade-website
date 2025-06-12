import { motion } from 'framer-motion';
import { colors } from '../lib/colors';
import { Link } from 'react-router-dom';

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center"
        style={{ 
          background: `linear-gradient(135deg, ${colors.primary}22, ${colors.accent}33)`,
          minHeight: '600px'
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
            className="text-center md:text-left md:max-w-2xl"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ color: colors.text.dark }}
              variants={fadeIn}
            >
              KI-Lösungen für Ihr Unternehmen
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8"
              style={{ color: colors.text.dark }}
              variants={fadeIn}
            >
              Maßgeschneiderte KI-Dienstleistungen von Liberdade AI
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              variants={fadeIn}
            >
              <Link 
                to="/services" 
                className="px-8 py-3 rounded-md text-white font-medium shadow-lg hover:shadow-xl transition-all"
                style={{ backgroundColor: colors.primary }}
              >
                Dienstleistungen entdecken
              </Link>
              
              <Link 
                to="/appointment" 
                className="px-8 py-3 rounded-md font-medium shadow-lg hover:shadow-xl transition-all"
                style={{ backgroundColor: 'white', color: colors.primary }}
              >
                Termin vereinbaren
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                backgroundColor: i % 2 === 0 ? colors.primary : colors.accent,
                width: Math.random() * 10 + 5 + 'px',
                height: Math.random() * 10 + 5 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                opacity: 0.3
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0.3, 0.1, 0.3],
                scale: [1, Math.random() * 1.5 + 0.5, 1]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6" style={{ color: colors.text.dark }}>
              Über Liberdade AI
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Liberdade AI ist Ihre Agentur für maßgeschneiderte KI-Lösungen. Wir kombinieren tiefgreifendes Fachwissen in künstlicher Intelligenz mit einem klaren Fokus auf Ihre geschäftlichen Anforderungen, um innovative und effektive Lösungen zu entwickeln.
            </p>
            
            <div className="inline-block">
              <div 
                className="h-1 w-20 mx-auto rounded"
                style={{ backgroundColor: colors.accent }}
              ></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
              Unsere Dienstleistungen
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Wir bieten ein breites Spektrum an KI-Dienstleistungen, die auf Ihre spezifischen Bedürfnisse zugeschnitten sind.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-center" style={{ color: colors.text.dark }}>
                  LLM-Integration
                </h3>
                
                <p className="text-gray-600 text-center">
                  Integration von Large Language Models wie ChatGPT in Ihre bestehenden Systeme und Prozesse.
                </p>
              </div>
            </motion.div>
            
            {/* Service 2 */}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-center" style={{ color: colors.text.dark }}>
                  KI-Agenten
                </h3>
                
                <p className="text-gray-600 text-center">
                  Entwicklung von KI-Agenten mit Tools wie n8n, Flowise und MCP für automatisierte Prozesse.
                </p>
              </div>
            </motion.div>
            
            {/* Service 3 */}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-center" style={{ color: colors.text.dark }}>
                  Generative KI
                </h3>
                
                <p className="text-gray-600 text-center">
                  Einsatz von generativer KI für Bild- und Textgenerierung mit Midjourney, Stable Diffusion und mehr.
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:opacity-90 transition-all"
              style={{ backgroundColor: colors.primary }}
            >
              Alle Dienstleistungen ansehen
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Warum Liberdade AI wählen?
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: `${colors.primary}22` }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              
              <h3 className="text-lg font-semibold mb-2" style={{ color: colors.text.dark }}>
                Expertise
              </h3>
              
              <p className="text-gray-600 text-center">
                Tiefgreifendes Fachwissen in allen Bereichen der künstlichen Intelligenz.
              </p>
            </motion.div>
            
            {/* Benefit 2 */}
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: `${colors.accent}22` }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke={colors.accent}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              
              <h3 className="text-lg font-semibold mb-2" style={{ color: colors.text.dark }}>
                Maßgeschneidert
              </h3>
              
              <p className="text-gray-600 text-center">
                Individuelle Lösungen, die genau auf Ihre Anforderungen zugeschnitten sind.
              </p>
            </motion.div>
            
            {/* Benefit 3 */}
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: `${colors.primary}22` }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <h3 className="text-lg font-semibold mb-2" style={{ color: colors.text.dark }}>
                Effizient
              </h3>
              
              <p className="text-gray-600 text-center">
                Schnelle Implementierung und messbare Ergebnisse für Ihr Unternehmen.
              </p>
            </motion.div>
            
            {/* Benefit 4 */}
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: `${colors.accent}22` }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke={colors.accent}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h3 className="text-lg font-semibold mb-2" style={{ color: colors.text.dark }}>
                Zukunftssicher
              </h3>
              
              <p className="text-gray-600 text-center">
                Immer auf dem neuesten Stand der KI-Technologie für langfristigen Erfolg.
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
              Bereit für die KI-Revolution?
            </h2>
            
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Kontaktieren Sie uns noch heute, um zu besprechen, wie wir Ihr Unternehmen mit KI-Lösungen unterstützen können.
            </p>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg bg-white hover:bg-gray-100 transition-all"
              style={{ color: colors.primary }}
            >
              Kontakt aufnehmen
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
