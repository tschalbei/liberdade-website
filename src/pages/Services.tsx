import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { colors } from '../lib/colors';
import { Link } from 'react-router-dom';
import { useLanguageStore, t } from '../lib/i18n';

const Services = () => {
  const { language } = useLanguageStore();

  return (
    <>
      <Helmet>
        <title>{language === 'de' ? 'Dienstleistungen - Liberdade AI' : 'Services - Liberdade AI'}</title>
        <meta name="description" content={language === 'de' 
          ? 'Entdecken Sie unsere KI-Dienstleistungen: LLM Integration, KI-Agenten mit n8n und Flowise, generative KI mit Midjourney und Stable Diffusion, sowie KI-gestützter Businessaufbau.'
          : 'Discover our AI services: LLM integration, AI agents with n8n and Flowise, generative AI with Midjourney and Stable Diffusion, and AI-supported business development.'} />
        <meta name="keywords" content={language === 'de'
          ? 'LLM Integration, ChatGPT, KI-Agenten, n8n, Flowise, MCP, Generative KI, Midjourney, Stable Diffusion, ComfyUI, ControlNets, KI Business'
          : 'LLM Integration, ChatGPT, AI Agents, n8n, Flowise, MCP, Generative AI, Midjourney, Stable Diffusion, ComfyUI, ControlNets, AI Business'} />
        <meta property="og:title" content={language === 'de' ? 'Dienstleistungen - Liberdade AI' : 'Services - Liberdade AI'} />
        <meta property="og:description" content={language === 'de' 
          ? 'Entdecken Sie unsere KI-Dienstleistungen: LLM Integration, KI-Agenten mit n8n und Flowise, generative KI mit Midjourney und Stable Diffusion, sowie KI-gestützter Businessaufbau.'
          : 'Discover our AI services: LLM integration, AI agents with n8n and Flowise, generative AI with Midjourney and Stable Diffusion, and AI-supported business development.'} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://liberdade.ai/services" />
        <meta property="og:image" content="https://liberdade.ai/images/ki_visualization.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={language === 'de' ? 'Dienstleistungen - Liberdade AI' : 'Services - Liberdade AI'} />
        <meta name="twitter:description" content={language === 'de' 
          ? 'Entdecken Sie unsere KI-Dienstleistungen: LLM Integration, KI-Agenten mit n8n und Flowise, generative KI mit Midjourney und Stable Diffusion, sowie KI-gestützter Businessaufbau.'
          : 'Discover our AI services: LLM integration, AI agents with n8n and Flowise, generative AI with Midjourney and Stable Diffusion, and AI-supported business development.'} />
        <meta name="twitter:image" content="https://liberdade.ai/images/ki_visualization.png" />
        <link rel="canonical" href="https://liberdade.ai/services" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Language" content={language === 'de' ? 'de-DE' : 'en-US'} />
      </Helmet>
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
              {t('services.header.title', language)}
            </h1>
            
            <p className="text-xl max-w-3xl mx-auto text-white">
              {t('services.header.subtitle', language)}
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
              {t('services.overview.title', language)}
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('services.overview.subtitle', language)}
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
                  {t('services.llm.title', language)}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {t('services.llm.description', language)}
                </p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">
                      {t('services.llm.features.integration', language)}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">
                      {t('services.llm.features.customization', language)}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">
                      {t('services.llm.features.prompts', language)}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">
                      {t('services.llm.features.training', language)}
                    </span>
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
                  alt={language === 'de' ? "KI Agenten" : "AI Agents"} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.text.dark }}>
                  {t('services.agents.title', language)}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {t('services.agents.description', language)}
                </p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">
                      {t('services.agents.features.tools', language)}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">
                      {t('services.agents.features.apis', language)}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">
                      {t('services.agents.features.models', language)}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">
                      {t('services.agents.features.databases', language)}
                    </span>
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
                  alt={language === 'de' ? "Generative KI" : "Generative AI"} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.text.dark }}>
                  {t('services.generative.title', language)}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {t('services.generative.description', language)}
                </p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">
                      {t('services.generative.features.midjourney', language)}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">
                      {t('services.generative.features.flux', language)}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">
                      {t('services.generative.features.controlnets', language)}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">
                      {t('services.generative.features.workflows', language)}
                    </span>
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
                  alt={language === 'de' ? "KI Business" : "AI Business"} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.text.dark }}>
                  {t('services.business.title', language)}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {t('services.business.description', language)}
                </p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">
                      {t('services.business.features.consulting', language)}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">
                      {t('services.business.features.models', language)}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">
                      {t('services.business.features.jobmarket', language)}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">
                      {t('services.business.features.training', language)}
                    </span>
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
              {language === 'de' ? 'Unser Prozess' : 'Our Process'}
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {language === 'de'
                ? 'Wir arbeiten eng mit Ihnen zusammen, um maßgeschneiderte KI-Lösungen zu entwickeln, die Ihre Geschäftsziele unterstützen.'
                : 'We work closely with you to develop customized AI solutions that support your business goals.'}
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
                className="w-12 h-12 rounded-full flex items-center justify-center absolute -top-6 left-1/2 transform -translate-x-1/2"
                style={{ backgroundColor: colors.primary }}
              >
                <span className="text-white font-bold text-lg">1</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 mt-6 text-center" style={{ color: colors.text.dark }}>
                {language === 'de' ? 'Analyse' : 'Analysis'}
              </h3>
              
              <p className="text-gray-600 text-center">
                {language === 'de'
                  ? 'Wir analysieren Ihre Anforderungen und identifizieren Potenziale für KI-Integration.'
                  : 'We analyze your requirements and identify potential for AI integration.'}
              </p>
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
                className="w-12 h-12 rounded-full flex items-center justify-center absolute -top-6 left-1/2 transform -translate-x-1/2"
                style={{ backgroundColor: colors.accent }}
              >
                <span className="text-white font-bold text-lg">2</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 mt-6 text-center" style={{ color: colors.text.dark }}>
                {language === 'de' ? 'Konzeption' : 'Conception'}
              </h3>
              
              <p className="text-gray-600 text-center">
                {language === 'de'
                  ? 'Wir entwickeln ein maßgeschneidertes Konzept für Ihre individuellen Anforderungen.'
                  : 'We develop a tailored concept for your individual requirements.'}
              </p>
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
                className="w-12 h-12 rounded-full flex items-center justify-center absolute -top-6 left-1/2 transform -translate-x-1/2"
                style={{ backgroundColor: colors.primary }}
              >
                <span className="text-white font-bold text-lg">3</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 mt-6 text-center" style={{ color: colors.text.dark }}>
                {language === 'de' ? 'Umsetzung' : 'Implementation'}
              </h3>
              
              <p className="text-gray-600 text-center">
                {language === 'de'
                  ? 'Wir setzen die KI-Lösung um und integrieren sie in Ihre bestehenden Systeme.'
                  : 'We implement the AI solution and integrate it into your existing systems.'}
              </p>
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
                className="w-12 h-12 rounded-full flex items-center justify-center absolute -top-6 left-1/2 transform -translate-x-1/2"
                style={{ backgroundColor: colors.accent }}
              >
                <span className="text-white font-bold text-lg">4</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 mt-6 text-center" style={{ color: colors.text.dark }}>
                {language === 'de' ? 'Optimierung' : 'Optimization'}
              </h3>
              
              <p className="text-gray-600 text-center">
                {language === 'de'
                  ? 'Wir optimieren die Lösung kontinuierlich und passen sie an Ihre sich ändernden Anforderungen an.'
                  : 'We continuously optimize the solution and adapt it to your changing requirements.'}
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
              {t('services.cta.title', language)}
            </h2>
            
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              {t('services.cta.content', language)}
            </p>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg bg-white text-gray-800 hover:bg-gray-100 transition-all"
            >
              {t('services.cta.button', language)}
            </Link>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Services;
