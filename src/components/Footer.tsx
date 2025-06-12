import { Link } from 'react-router-dom';
import { colors } from '../lib/colors';
import { motion } from 'framer-motion';

const Footer = () => {
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
              Maßgeschneiderte KI-Lösungen für Ihr Unternehmen. Wir helfen Ihnen, das volle Potenzial künstlicher Intelligenz zu nutzen.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: colors.text.dark }}>Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-gray-900">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-600 hover:text-gray-900">Dienstleistungen</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-gray-900">Über uns</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900">Kontakt</Link>
              </li>
              <li>
                <Link to="/appointment" className="text-sm text-gray-600 hover:text-gray-900">Termin buchen</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: colors.text.dark }}>Kontakt</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">
                <span className="font-medium">E-Mail:</span> info@liberade.ai
              </li>
              <li className="text-sm text-gray-600">
                <span className="font-medium">Telefon:</span> +49 170 268 1111
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Liberdade AI. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
