import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { colors } from '../lib/colors';
import { Link } from 'react-router-dom';
import { useLanguageStore, t } from '../lib/i18n';

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
  const { language } = useLanguageStore();

  return (
    <>
      <Helmet>
        <title>{language === 'de' ? 'Liberdade AI - KI Lösungen für Ihr Unternehmen' : 'Liberdade AI - AI Solutions for Your Business'}</title>
        <meta name="description" content={language === 'de' 
          ? 'Maßgeschneiderte KI-Dienstleistungen von Liberdade AI. Wir bieten LLM Integration, KI-Agenten, generative KI und KI-gestützten Businessaufbau.'
          : 'Tailored AI services by Liberdade AI. We offer LLM integration, AI agents, generative AI, and AI-supported business development.'} />
        <meta name="keywords" content={language === 'de'
          ? 'KI, Künstliche Intelligenz, LLM, ChatGPT, KI-Agenten, Generative KI, Midjourney, Stable Diffusion, n8n, Flowise, MCP, Automatisierung'
          : 'AI, Artificial Intelligence, LLM, ChatGPT, AI Agents, Generative AI, Midjourney, Stable Diffusion, n8n, Flowise, MCP, Automation'} />
        <meta property="og:title" content={language === 'de' ? 'Liberdade AI - KI Lösungen für Ihr Unternehmen' : 'Liberdade AI - AI Solutions for Your Business'} />
        <meta property="og:description" content={language === 'de' 
          ? 'Maßgeschneiderte KI-Dienstleistungen von Liberdade AI. Wir bieten LLM Integration, KI-Agenten, generative KI und KI-gestützten Businessaufbau.'
          : 'Tailored AI services by Liberdade AI. We offer LLM integration, AI agents, generative AI, and AI-supported business development.'} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://liberdade.ai" />
        <meta property="og:image" content="https://liberdade.ai/images/ki_header.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={language === 'de' ? 'Liberdade AI - KI Lösungen für Ihr Unternehmen' : 'Liberdade AI - AI Solutions for Your Business'} />
        <meta name="twitter:description" content={language === 'de' 
          ? 'Maßgeschneiderte KI-Dienstleistungen von Liberdade AI. Wir bieten LLM Integration, KI-Agenten, generative KI und KI-gestützten Businessaufbau.'
          : 'Tailored AI services by Liberdade AI. We offer LLM integration, AI agents, generative AI, and AI-supported business development.'} />
        <meta name="twitter:image" content="https://liberdade.ai/images/ki_header.jpg" />
        <link rel="canonical" href="https://liberdade.ai" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Liberdade AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content={language === 'de' ? 'de-DE' : 'en-US'} />
      </Helmet>
      <div className="pt-16">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center"
        style={{ 
          background: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5))`,
          backgroundImage: `url('/images/ki_header.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
              variants={fadeIn}
            >
              {t('home.hero.title', language)}
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-white"
              variants={fadeIn}
            >
              {t('home.hero.subtitle', language)}
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
                {t('home.hero.discoverServices', language)}
              </Link>
              
              <Link 
                to="/appointment" 
                className="px-8 py-3 rounded-md font-medium shadow-lg hover:shadow-xl transition-all"
                style={{ backgroundColor: 'white', color: colors.primary }}
              >
                {t('home.hero.scheduleAppointment', language)}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6" style={{ color: colors.text.dark }}>
                {t('home.about.title', language)}
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                {t('home.about.content', language)}
              </p>
              
              <div className="inline-block md:block">
                <div 
                  className="h-1 w-20 mx-auto md:mx-0 rounded"
                  style={{ backgroundColor: colors.accent }}
                ></div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="/images/ki_visualization.png" 
                alt={language === 'de' ? "KI Visualisierung" : "AI Visualization"} 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
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
              {t('home.services.title', language)}
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('home.services.subtitle', language)}
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
                <div className="mb-6 h-48 overflow-hidden rounded-lg">
                  <img 
                    src="/images/ki_header.jpg" 
                    alt="LLM Integration" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-center" style={{ color: colors.text.dark }}>
                  {t('services.llm.title', language)}
                </h3>
                
                <p className="text-gray-600 text-center">
                  {t('services.llm.description', language)}
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
                <div className="mb-6 h-48 overflow-hidden rounded-lg">
                  <img 
                    src="/images/ki_agents.jpg" 
                    alt={language === 'de' ? "KI Agenten" : "AI Agents"} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-center" style={{ color: colors.text.dark }}>
                  {t('services.agents.title', language)}
                </h3>
                
                <p className="text-gray-600 text-center">
                  {t('services.agents.description', language)}
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
                <div className="mb-6 h-48 overflow-hidden rounded-lg">
                  <img 
                    src="/images/generative_ai.webp" 
                    alt={language === 'de' ? "Generative KI" : "Generative AI"} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-center" style={{ color: colors.text.dark }}>
                  {t('services.generative.title', language)}
                </h3>
                
                <p className="text-gray-600 text-center">
                  {t('services.generative.description', language)}
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
              {t('home.services.viewAll', language)}
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
              {t('home.benefits.title', language)}
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
                {t('home.benefits.expertise.title', language)}
              </h3>
              
              <p className="text-gray-600 text-center">
                {t('home.benefits.expertise.description', language)}
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
                {t('home.benefits.tailored.title', language)}
              </h3>
              
              <p className="text-gray-600 text-center">
                {t('home.benefits.tailored.description', language)}
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
                {t('home.benefits.efficiency.title', language)}
              </h3>
              
              <p className="text-gray-600 text-center">
                {t('home.benefits.efficiency.description', language)}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              
                 <h3 className="text-lg font-semibold mb-2" style={{ color: colors.text.dark }}>
                {t('home.benefits.support.title', language)}
              </h3>
              
              <p className="text-gray-600 text-center">
                {t('home.benefits.support.description', language)}
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
              {t('home.cta.title', language)}
            </h2>
            
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              {t('home.cta.content', language)}
            </p>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg bg-white text-gray-800 hover:bg-gray-100 transition-all"
            >
              {t('home.cta.button', language)}
            </Link>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Home;
