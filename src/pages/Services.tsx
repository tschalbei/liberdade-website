import { motion } from 'framer-motion';
import { colors } from '../lib/colors';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="pt-16">
      {/* Header Section */}
      <section 
        className="relative py-20"
        style={{ 
          background: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5))`,
          backgroundImage: `url('/images/ki_visualization.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Unsere Dienstleistungen
            </h1>
            
            <p className="text-xl max-w-3xl mx-auto text-white">
              Maßgeschneiderte KI-Lösungen für Ihr Unternehmen
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6" style={{ color: colors.text.dark }}>
              Unsere KI-Dienstleistungen im Überblick
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Wir bieten ein umfassendes Portfolio an KI-Dienstleistungen, die auf Ihre individuellen Anforderungen zugeschnitten sind.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Service 1 */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/ki_header.jpg" 
                  alt="LLM Integration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.text.dark }}>
                  LLM-Integration
                </h3>
                
                <p className="text-gray-600 mb-6">
                  Wir integrieren Large Language Models (LLMs) wie ChatGPT in Ihre bestehenden Systeme und Prozesse, um Ihre Geschäftsabläufe zu optimieren und zu automatisieren.
                </p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Nahtlose Integration in bestehende Systeme</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Anpassung und Feinabstimmung der Modelle</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Entwicklung von benutzerdefinierten Prompts</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Schulung und Support für Ihr Team</span>
                  </li>
                </ul>
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
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/ki_agents.jpg" 
                  alt="KI Agenten" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.text.dark }}>
                  KI-Agenten
                </h3>
                
                <p className="text-gray-600 mb-6">
                  Wir entwickeln intelligente KI-Agenten, die komplexe Aufgaben automatisieren und Ihre Mitarbeiter bei repetitiven Tätigkeiten entlasten können.
                </p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Entwicklung mit n8n, Flowise und MCP</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Integration von APIs und HTTP-Requests</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Anbindung lokaler Modelle</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Einsatz von Vektordatenbanken</span>
                  </li>
                </ul>
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
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/generative_ai.webp" 
                  alt="Generative KI" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.text.dark }}>
                  Generative KI & Bildbearbeitung
                </h3>
                
                <p className="text-gray-600 mb-6">
                  Wir nutzen generative KI-Technologien, um beeindruckende visuelle Inhalte zu erstellen und Ihre Bildbearbeitungsprozesse zu optimieren.
                </p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Einsatz von Midjourney und Stable Diffusion</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Arbeit mit Flux und ComfyUI</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Fortgeschrittene Bildmanipulation mit ControlNets</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Erstellung von benutzerdefinierten Workflows</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            {/* Service 4 */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="/images/ki_visualization.png" 
                  alt="KI Business" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.text.dark }}>
                  KI-gestützter Businessaufbau
                </h3>
                
                <p className="text-gray-600 mb-6">
                  Wir unterstützen Sie bei der Entwicklung von Geschäftsmodellen mit KI – ohne Hype, mit echten Strategien und Systemen.
                </p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Strategische Beratung für KI-Integration</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Entwicklung von KI-basierten Geschäftsmodellen</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Zugang zur KI-Job-Börse</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Schulungen und Vorträge zu KI-Themen</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16" style={{ backgroundColor: colors.background.lightGray }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6" style={{ color: colors.text.dark }}>
              Unser Prozess
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Wir arbeiten eng mit Ihnen zusammen, um maßgeschneiderte KI-Lösungen zu entwickeln, die Ihre Geschäftsziele unterstützen.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl absolute -top-6 left-1/2 transform -translate-x-1/2"
                style={{ backgroundColor: colors.primary }}
              >
                1
              </div>
              
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-center" style={{ color: colors.text.dark }}>
                  Analyse
                </h3>
                
                <p className="text-gray-600 text-center">
                  Wir analysieren Ihre Anforderungen und identifizieren Potenziale für den Einsatz von KI in Ihrem Unternehmen.
                </p>
              </div>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl absolute -top-6 left-1/2 transform -translate-x-1/2"
                style={{ backgroundColor: colors.accent }}
              >
                2
              </div>
              
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-center" style={{ color: colors.text.dark }}>
                  Konzeption
                </h3>
                
                <p className="text-gray-600 text-center">
                  Wir entwickeln ein maßgeschneidertes Konzept für Ihre KI-Lösung und definieren klare Ziele und Metriken.
                </p>
              </div>
            </motion.div>
            
            {/* Step 3 */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl absolute -top-6 left-1/2 transform -translate-x-1/2"
                style={{ backgroundColor: colors.primary }}
              >
                3
              </div>
              
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-center" style={{ color: colors.text.dark }}>
                  Umsetzung
                </h3>
                
                <p className="text-gray-600 text-center">
                  Wir setzen die KI-Lösung um und integrieren sie nahtlos in Ihre bestehenden Systeme und Prozesse.
                </p>
              </div>
            </motion.div>
            
            {/* Step 4 */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl absolute -top-6 left-1/2 transform -translate-x-1/2"
                style={{ backgroundColor: colors.accent }}
              >
                4
              </div>
              
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-center" style={{ color: colors.text.dark }}>
                  Optimierung
                </h3>
                
                <p className="text-gray-600 text-center">
                  Wir überwachen die Performance Ihrer KI-Lösung und optimieren sie kontinuierlich für maximalen ROI.
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
              Bereit, Ihr Unternehmen mit KI zu transformieren?
            </h2>
            
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Kontaktieren Sie uns noch heute für ein unverbindliches Beratungsgespräch.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/contact" 
                className="px-8 py-3 rounded-md text-white font-medium shadow-lg hover:shadow-xl transition-all border-2 border-white hover:bg-white hover:text-gray-800"
              >
                Kontakt aufnehmen
              </Link>
              
              <Link 
                to="/appointment" 
                className="px-8 py-3 rounded-md font-medium shadow-lg hover:shadow-xl transition-all bg-white text-gray-800 hover:bg-gray-100"
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

export default Services;
