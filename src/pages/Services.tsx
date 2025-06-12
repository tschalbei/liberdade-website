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
              Unsere Dienstleistungen
            </h1>
            
            <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.text.dark }}>
              Maßgeschneiderte KI-Lösungen für Ihr Unternehmen
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
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
              Übersicht
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bei Liberdade AI bieten wir ein umfassendes Spektrum an KI-Dienstleistungen, die darauf ausgerichtet sind, Ihr Unternehmen zu transformieren und zu optimieren.
            </p>
          </motion.div>
        </div>
      </section>

      {/* LLM Integration */}
      <section className="py-16" style={{ backgroundColor: colors.background.lightGray }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6" style={{ color: colors.text.dark }}>
                LLM-Integration
              </h2>
              
              <p className="text-lg text-gray-600 mb-6">
                Large Language Models (LLMs) wie ChatGPT revolutionieren die Art und Weise, wie Unternehmen mit Daten und Kunden interagieren. Wir helfen Ihnen, diese leistungsstarken Modelle in Ihre bestehenden Systeme zu integrieren.
              </p>
              
              <h3 className="text-xl font-semibold mb-4" style={{ color: colors.primary }}>
                Anwendungsfälle
              </h3>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Automatisierte Kundenservice-Lösungen</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Inhaltsanalyse und -erstellung</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Wissensmanagement und Informationsextraktion</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Personalisierte Kommunikation</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-4" style={{ color: colors.primary }}>
                Vorteile
              </h3>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.accent}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Erhöhte Effizienz durch Automatisierung</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.accent}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Verbesserte Kundenerfahrung</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.accent}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Skalierbare Lösungen für wachsende Anforderungen</span>
                </li>
              </ul>
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
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary}11, ${colors.primary}33)`,
                  border: `1px solid ${colors.primary}22`
                }}
              >
                <div className="p-8">
                  <div className="flex justify-center mb-6">
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${colors.primary}33` }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="h-2 rounded-full" style={{ backgroundColor: `${colors.primary}44` }}></div>
                    <div className="h-2 rounded-full w-5/6" style={{ backgroundColor: `${colors.primary}44` }}></div>
                    <div className="h-2 rounded-full w-4/6" style={{ backgroundColor: `${colors.primary}44` }}></div>
                  </div>
                  
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="h-16 rounded-md" style={{ backgroundColor: `${colors.primary}22` }}></div>
                    <div className="h-16 rounded-md" style={{ backgroundColor: `${colors.primary}22` }}></div>
                    <div className="h-16 rounded-md" style={{ backgroundColor: `${colors.primary}22` }}></div>
                    <div className="h-16 rounded-md" style={{ backgroundColor: `${colors.primary}22` }}></div>
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

      {/* KI-Agenten */}
      <section className="py-16 bg-white">
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
                  background: `linear-gradient(135deg, ${colors.accent}11, ${colors.accent}33)`,
                  border: `1px solid ${colors.accent}22`
                }}
              >
                <div className="p-8">
                  <div className="flex justify-center mb-6">
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${colors.accent}33` }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke={colors.accent}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 mb-6">
                    <div className="h-24 w-1/3 rounded-md" style={{ backgroundColor: `${colors.accent}22` }}></div>
                    <div className="h-24 w-1/3 rounded-md" style={{ backgroundColor: `${colors.accent}22` }}></div>
                    <div className="h-24 w-1/3 rounded-md" style={{ backgroundColor: `${colors.accent}22` }}></div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-2 rounded-full" style={{ backgroundColor: `${colors.accent}44` }}></div>
                    <div className="h-2 rounded-full w-5/6" style={{ backgroundColor: `${colors.accent}44` }}></div>
                    <div className="h-2 rounded-full w-4/6" style={{ backgroundColor: `${colors.accent}44` }}></div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full" style={{ backgroundColor: colors.accent, opacity: 0.2 }}></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full" style={{ backgroundColor: colors.primary, opacity: 0.2 }}></div>
            </motion.div>
            
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6" style={{ color: colors.text.dark }}>
                KI-Agenten
              </h2>
              
              <p className="text-lg text-gray-600 mb-6">
                KI-Agenten automatisieren komplexe Prozesse und Workflows durch die Integration verschiedener Systeme und Datenquellen. Mit Tools wie n8n, Flowise und MCP entwickeln wir intelligente Agenten, die Ihre Geschäftsprozesse optimieren.
              </p>
              
              <h3 className="text-xl font-semibold mb-4" style={{ color: colors.accent }}>
                Technologien
              </h3>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.accent}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Integration von APIs und HTTP-Requests</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.accent}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Lokale Modelle für datenschutzkonforme Lösungen</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.accent}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Vektordatenbanken für semantische Suche und Ähnlichkeitsanalyse</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-4" style={{ color: colors.accent }}>
                Anwendungsfälle
              </h3>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Automatisierte Datenverarbeitung und -analyse</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Intelligente Workflow-Automatisierung</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Proaktive Entscheidungsunterstützung</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Generative KI */}
      <section className="py-16" style={{ backgroundColor: colors.background.lightGray }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6" style={{ color: colors.text.dark }}>
                Generative KI
              </h2>
              
              <p className="text-lg text-gray-600 mb-6">
                Generative KI-Modelle revolutionieren die Erstellung von Inhalten. Mit Technologien wie Midjourney, Stable Diffusion und Flux helfen wir Ihnen, beeindruckende Bilder, Texte und andere Medien zu generieren.
              </p>
              
              <h3 className="text-xl font-semibold mb-4" style={{ color: colors.primary }}>
                Technologien
              </h3>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Midjourney für hochwertige Bildgenerierung</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Stable Diffusion für lokale Bildgenerierung</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">ComfyUI für fortgeschrittene Bildbearbeitung</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">ControlNets für präzise Bildmanipulation</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-4" style={{ color: colors.primary }}>
                Anwendungsfälle
              </h3>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.accent}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Erstellung von Marketingmaterialien</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.accent}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Produktvisualisierung und -design</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.accent}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Automatisierte Inhaltserstellung für verschiedene Kanäle</span>
                </li>
              </ul>
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
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary}11, ${colors.accent}33)`,
                  border: `1px solid ${colors.accent}22`
                }}
              >
                <div className="p-8">
                  <div className="flex justify-center mb-6">
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${colors.accent}33` }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke={colors.accent}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="h-32 rounded-md" style={{ backgroundColor: `${colors.primary}22` }}></div>
                    <div className="h-32 rounded-md" style={{ backgroundColor: `${colors.accent}22` }}></div>
                    <div className="h-32 rounded-md" style={{ backgroundColor: `${colors.accent}22` }}></div>
                    <div className="h-32 rounded-md" style={{ backgroundColor: `${colors.primary}22` }}></div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-2 rounded-full" style={{ backgroundColor: `${colors.primary}44` }}></div>
                    <div className="h-2 rounded-full w-5/6" style={{ backgroundColor: `${colors.accent}44` }}></div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full" style={{ backgroundColor: colors.accent, opacity: 0.2 }}></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full" style={{ backgroundColor: colors.primary, opacity: 0.2 }}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Unser Prozess
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Wir arbeiten eng mit Ihnen zusammen, um maßgeschneiderte KI-Lösungen zu entwickeln, die Ihre spezifischen Anforderungen erfüllen.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: colors.primary }}
                >
                  1
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-center" style={{ color: colors.text.dark }}>
                Analyse
              </h3>
              
              <p className="text-gray-600 text-center">
                Wir analysieren Ihre Anforderungen und identifizieren die optimalen KI-Lösungen für Ihr Unternehmen.
              </p>
              
              {/* Connector line */}
              <div className="hidden md:block absolute top-6 left-full w-full h-0.5 -ml-4" style={{ backgroundColor: colors.primary, opacity: 0.3 }}></div>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: colors.primary }}
                >
                  2
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-center" style={{ color: colors.text.dark }}>
                Konzeption
              </h3>
              
              <p className="text-gray-600 text-center">
                Wir entwickeln ein maßgeschneidertes Konzept und definieren die technischen Spezifikationen.
              </p>
              
              {/* Connector line */}
              <div className="hidden md:block absolute top-6 left-full w-full h-0.5 -ml-4" style={{ backgroundColor: colors.primary, opacity: 0.3 }}></div>
            </motion.div>
            
            {/* Step 3 */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: colors.primary }}
                >
                  3
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-center" style={{ color: colors.text.dark }}>
                Umsetzung
              </h3>
              
              <p className="text-gray-600 text-center">
                Wir implementieren die KI-Lösung und integrieren sie in Ihre bestehenden Systeme.
              </p>
              
              {/* Connector line */}
              <div className="hidden md:block absolute top-6 left-full w-full h-0.5 -ml-4" style={{ backgroundColor: colors.primary, opacity: 0.3 }}></div>
            </motion.div>
            
            {/* Step 4 */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: colors.primary }}
                >
                  4
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-center" style={{ color: colors.text.dark }}>
                Optimierung
              </h3>
              
              <p className="text-gray-600 text-center">
                Wir überwachen, testen und optimieren die Lösung kontinuierlich für maximale Leistung.
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
              Bereit, Ihr Unternehmen mit KI zu transformieren?
            </h2>
            
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch oder vereinbaren Sie direkt einen Termin.
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

export default Services;
