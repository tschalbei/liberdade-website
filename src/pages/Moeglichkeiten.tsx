import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { colors } from '../lib/colors';
import { Link } from 'react-router-dom';
import { useLanguageStore, t } from '../lib/i18n';

const Moeglichkeiten = () => {
  const { language } = useLanguageStore();

  const useCases = [
    {
      id: 1,
      icon: "💬",
      titleKey: "moeglichkeiten.useCases.customerSupport.title",
      descriptionKey: "moeglichkeiten.useCases.customerSupport.description",
      benefitKey: "moeglichkeiten.useCases.customerSupport.benefit"
    },
    {
      id: 2,
      icon: "📱",
      titleKey: "moeglichkeiten.useCases.socialMedia.title",
      descriptionKey: "moeglichkeiten.useCases.socialMedia.description",
      benefitKey: "moeglichkeiten.useCases.socialMedia.benefit"
    },
    {
      id: 3,
      icon: "📄",
      titleKey: "moeglichkeiten.useCases.documents.title",
      descriptionKey: "moeglichkeiten.useCases.documents.description",
      benefitKey: "moeglichkeiten.useCases.documents.benefit"
    },
    {
      id: 4,
      icon: "🎯",
      titleKey: "moeglichkeiten.useCases.leadQualification.title",
      descriptionKey: "moeglichkeiten.useCases.leadQualification.description",
      benefitKey: "moeglichkeiten.useCases.leadQualification.benefit"
    },
    {
      id: 5,
      icon: "📧",
      titleKey: "moeglichkeiten.useCases.newsletter.title",
      descriptionKey: "moeglichkeiten.useCases.newsletter.description",
      benefitKey: "moeglichkeiten.useCases.newsletter.benefit"
    },
    {
      id: 6,
      icon: "🔍",
      titleKey: "moeglichkeiten.useCases.research.title",
      descriptionKey: "moeglichkeiten.useCases.research.description",
      benefitKey: "moeglichkeiten.useCases.research.benefit"
    },
    {
      id: 7,
      icon: "🎓",
      titleKey: "moeglichkeiten.useCases.digitalProducts.title",
      descriptionKey: "moeglichkeiten.useCases.digitalProducts.description",
      benefitKey: "moeglichkeiten.useCases.digitalProducts.benefit"
    },
    {
      id: 8,
      icon: "📋",
      titleKey: "moeglichkeiten.useCases.processes.title",
      descriptionKey: "moeglichkeiten.useCases.processes.description",
      benefitKey: "moeglichkeiten.useCases.processes.benefit"
    },
    {
      id: 9,
      icon: "📊",
      titleKey: "moeglichkeiten.useCases.feedback.title",
      descriptionKey: "moeglichkeiten.useCases.feedback.description",
      benefitKey: "moeglichkeiten.useCases.feedback.benefit"
    },
    {
      id: 10,
      icon: "🤖",
      titleKey: "moeglichkeiten.useCases.coPilot.title",
      descriptionKey: "moeglichkeiten.useCases.coPilot.description",
      benefitKey: "moeglichkeiten.useCases.coPilot.benefit"
    }
  ];

  return (
    <>
      <Helmet>
        <title>{language === 'de' ? 'Möglichkeiten - Liberdade AI' : 'Possibilities - Liberdade AI'}</title>
        <meta name="description" content={language === 'de' 
          ? '10 konkrete KI-Anwendungsfälle für KMUs und Solopreneure. Entdecken Sie praktische Möglichkeiten, wie KI Ihr Business automatisieren und optimieren kann.'
          : '10 concrete AI use cases for SMEs and solopreneurs. Discover practical possibilities how AI can automate and optimize your business.'} />
        <meta name="keywords" content={language === 'de'
          ? 'KI Anwendungsfälle, KI für KMU, Business Automatisierung, KI Möglichkeiten, Solopreneure KI, KI im Alltag'
          : 'AI use cases, AI for SME, Business automation, AI possibilities, Solopreneurs AI, AI in everyday life'} />
        <meta property="og:title" content={language === 'de' ? 'Möglichkeiten - Liberdade AI' : 'Possibilities - Liberdade AI'} />
        <meta property="og:description" content={language === 'de' 
          ? '10 konkrete KI-Anwendungsfälle für KMUs und Solopreneure. Entdecken Sie praktische Möglichkeiten, wie KI Ihr Business automatisieren und optimieren kann.'
          : '10 concrete AI use cases for SMEs and solopreneurs. Discover practical possibilities how AI can automate and optimize your business.'} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://liberdade.ai/moeglichkeiten" />
        <meta property="og:image" content="https://liberdade.ai/images/ki_header.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={language === 'de' ? 'Möglichkeiten - Liberdade AI' : 'Possibilities - Liberdade AI'} />
        <meta name="twitter:description" content={language === 'de' 
          ? '10 konkrete KI-Anwendungsfälle für KMUs und Solopreneure. Entdecken Sie praktische Möglichkeiten, wie KI Ihr Business automatisieren und optimieren kann.'
          : '10 concrete AI use cases for SMEs and solopreneurs. Discover practical possibilities how AI can automate and optimize your business.'} />
        <meta name="twitter:image" content="https://liberdade.ai/images/ki_header.jpg" />
        <link rel="canonical" href="https://liberdade.ai/moeglichkeiten" />
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
                {t('moeglichkeiten.header.title', language)}
              </h1>
              
              <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.text.dark }}>
                {t('moeglichkeiten.header.subtitle', language)}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('moeglichkeiten.intro.text', language)}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl mb-4">{useCase.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3" style={{ color: colors.text.dark }}>
                        {useCase.id}. {t(useCase.titleKey, language)}
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {t(useCase.descriptionKey, language)}
                      </p>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm font-medium" style={{ color: colors.primary }}>
                          <strong>{language === 'de' ? 'Vorteil:' : 'Benefit:'}</strong> {t(useCase.benefitKey, language)}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Customization Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6" style={{ color: colors.text.dark }}>
                {t('moeglichkeiten.customization.title', language)}
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {t('moeglichkeiten.customization.description', language)}
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          className="py-20"
          style={{ 
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
          }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                {t('moeglichkeiten.cta.title', language)}
              </h2>
              <p className="text-xl text-white mb-8 opacity-90">
                {t('moeglichkeiten.cta.subtitle', language)}
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg bg-white text-gray-800 hover:bg-gray-100 transition-all"
              >
                {t('moeglichkeiten.cta.button', language)}
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Moeglichkeiten;

