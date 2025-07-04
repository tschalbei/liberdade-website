import { Link } from 'react-router-dom';
import { colors } from '../lib/colors';
import { motion } from 'framer-motion';
import { useLanguageStore, t } from '../lib/i18n';

const Footer = () => {
  const { language } = useLanguageStore();

  return (
    <footer style={{ backgroundColor: colors.background.lightGray }} className="mt-16 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span style={{ color: colors.primary }} className="text-2xl font-bold">
                liberdade
              </span>
              <span style={{ color: colors.accent }} className="text-2xl font-bold ml-2">
                AI
              </span>
            </motion.div>
            <p className="mt-4 text-sm text-gray-600">
              {language === 'de' 
                ? 'Maßgeschneiderte KI-Lösungen für Ihr Unternehmen. Wir helfen Ihnen, das volle Potenzial künstlicher Intelligenz zu nutzen.'
                : 'Tailored AI solutions for your business. We help you harness the full potential of artificial intelligence.'}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: colors.text.dark }}>Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-gray-900">{t('nav.home', language)}</Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-600 hover:text-gray-900">{t('nav.services', language)}</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-gray-900">{t('nav.about', language)}</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900">{t('nav.contact', language)}</Link>
              </li>
              <li>
                <Link to="/appointment" className="text-sm text-gray-600 hover:text-gray-900">{t('nav.appointment', language)}</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: colors.text.dark }}>{language === 'de' ? 'Kontakt' : 'Contact'}</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">
                <span className="font-medium">{language === 'de' ? 'E-Mail:' : 'Email:'}</span>{' '}
                <a 
                  href="mailto:info@liberdade.ai" 
                  className="hover:text-gray-900 hover:underline transition-colors"
                  aria-label={language === 'de' ? 'E-Mail an info@liberdade.ai senden' : 'Send email to info@liberdade.ai'}
                >
                  info@liberdade.ai
                </a>
              </li>
              <li className="text-sm text-gray-600">
                <span className="font-medium">{language === 'de' ? 'Telefon:' : 'Phone:'}</span>{' '}
                <a 
                  href="tel:+4917026811111" 
                  className="hover:text-gray-900 hover:underline transition-colors"
                  aria-label={language === 'de' ? 'Anrufen unter +49 170 268 1111' : 'Call +49 170 268 1111'}
                >
                  +49 170 268 1111
                </a>
              </li>
              <li className="mt-4 pt-4 border-t border-gray-300">
                <Link 
                  to="/impressum" 
                  className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition-colors block mb-2"
                >
                  {t('footer.imprint', language)}
                </Link>
                <Link 
                  to="/datenschutz" 
                  className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition-colors block"
                >
                  {t('footer.privacy', language)}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            {t('footer.copyright', language)}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
