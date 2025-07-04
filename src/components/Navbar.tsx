import { Link } from 'react-router-dom';
import { useState } from 'react';
import { colors } from '../lib/colors';
import { motion } from 'framer-motion';
import { useLanguageStore, t, Language } from '../lib/i18n';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguageStore();
  
  const toggleLanguage = () => {
    const newLanguage: Language = language === 'de' ? 'en' : 'de';
    setLanguage(newLanguage);
  };

  return (
    <nav 
      style={{ backgroundColor: colors.background.light }}
      className="shadow-md fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
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
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/" 
              style={{ color: colors.text.dark }} 
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100"
            >
              {t('nav.home', language)}
            </Link>
            <Link 
              to="/services" 
              style={{ color: colors.text.dark }} 
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100"
            >
              {t('nav.services', language)}
            </Link>
            <Link 
              to="/moeglichkeiten" 
              style={{ color: colors.text.dark }} 
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100"
            >
              {t('nav.moeglichkeiten', language)}
            </Link>
            <Link 
              to="/about" 
              style={{ color: colors.text.dark }} 
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100"
            >
              {t('nav.about', language)}
            </Link>
            <Link 
              to="/contact" 
              style={{ color: colors.text.dark }} 
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100"
            >
              {t('nav.contact', language)}
            </Link>
            <Link 
              to="/appointment" 
              style={{ backgroundColor: colors.primary, color: 'white' }} 
              className="px-4 py-2 rounded-md text-sm font-medium hover:opacity-90"
            >
              {t('nav.appointment', language)}
            </Link>
            <button
              onClick={toggleLanguage}
              className="ml-2 px-3 py-2 rounded-md text-sm font-medium border border-gray-300 hover:bg-gray-100"
              style={{ color: colors.text.dark }}
            >
              {t('nav.language', language)}
            </button>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleLanguage}
              className="mr-2 px-2 py-1 rounded-md text-sm font-medium border border-gray-300"
              style={{ color: colors.text.dark }}
            >
              {t('nav.language', language)}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Menü öffnen</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link 
              to="/" 
              style={{ color: colors.text.dark }} 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.home', language)}
            </Link>
            <Link 
              to="/services" 
              style={{ color: colors.text.dark }} 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.services', language)}
            </Link>
            <Link 
              to="/moeglichkeiten" 
              style={{ color: colors.text.dark }} 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.moeglichkeiten', language)}
            </Link>
            <Link 
              to="/about" 
              style={{ color: colors.text.dark }} 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.about', language)}
            </Link>
            <Link 
              to="/contact" 
              style={{ color: colors.text.dark }} 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.contact', language)}
            </Link>
            <Link 
              to="/appointment" 
              style={{ backgroundColor: colors.primary, color: 'white' }} 
              className="block px-4 py-2 rounded-md text-base font-medium hover:opacity-90"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.appointment', language)}
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
