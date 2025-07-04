import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { colors } from '../lib/colors';
import { useLanguageStore, t } from '../lib/i18n';

const Impressum = () => {
  const { language } = useLanguageStore();

  return (
    <>
      <Helmet>
        <title>{language === 'de' ? 'Impressum - Liberdade AI' : 'Legal Notice - Liberdade AI'}</title>
        <meta name="description" content={language === 'de' 
          ? 'Impressum und rechtliche Hinweise von Liberdade AI. Angaben gemäß § 5 DDG, Kontaktdaten und Haftungsausschluss.'
          : 'Legal notice and legal information of Liberdade AI. Information according to § 5 DDG, contact details and disclaimer.'} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://liberdade.ai/impressum" />
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
                {t('impressum.header.title', language)}
              </h1>
              
              <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.text.dark }}>
                {t('impressum.header.subtitle', language)}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg max-w-none"
            >
              <div className="space-y-8">
                {/* Company Information */}
                <div>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: colors.text.dark }}>
                    {t('impressum.company.title', language)}
                  </h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="mb-2">
                      <strong>liberdade freedom consulting</strong><br />
                      Schöffengasse 21<br />
                      41751 Viersen
                    </p>
                    <p className="mb-2">
                      <strong>{t('impressum.company.representative', language)}:</strong> Christian Sailer
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: colors.text.dark }}>
                    {t('impressum.contact.title', language)}
                  </h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="mb-2">
                      <strong>{t('impressum.contact.phone', language)}:</strong> 
                      <a href="tel:+4917026811111" className="text-blue-600 hover:underline ml-2">
                        +49 170 268 1111
                      </a>
                    </p>
                    <p>
                      <strong>E-Mail:</strong> 
                      <a href="mailto:info@liberdade.ai" className="text-blue-600 hover:underline ml-2">
                        info@liberdade.ai
                      </a>
                    </p>
                  </div>
                </div>

                {/* VAT ID */}
                <div>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: colors.text.dark }}>
                    {t('impressum.vat.title', language)}
                  </h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p>
                      {t('impressum.vat.description', language)}: DE339633825
                    </p>
                  </div>
                </div>

                {/* Disclaimer */}
                <div>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: colors.text.dark }}>
                    {t('impressum.disclaimer.title', language)}
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3" style={{ color: colors.text.dark }}>
                        {t('impressum.disclaimer.content.title', language)}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {t('impressum.disclaimer.content.text', language)}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3" style={{ color: colors.text.dark }}>
                        {t('impressum.disclaimer.links.title', language)}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {t('impressum.disclaimer.links.text', language)}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3" style={{ color: colors.text.dark }}>
                        {t('impressum.disclaimer.copyright.title', language)}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {t('impressum.disclaimer.copyright.text', language)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Impressum;

