import { motion } from 'framer-motion';
import { colors } from '../lib/colors';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Appointment = () => {
  const [date, setDate] = useState<Value>(new Date());
  const [timeSlot, setTimeSlot] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleDateChange = (value: Value) => {
    setDate(value);
    setTimeSlot(null); // Reset time slot when date changes
  };
  
  const handleTimeSlotSelect = (slot: string) => {
    setTimeSlot(slot);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the appointment data to a backend
    console.log('Appointment submitted:', {
      date,
      timeSlot,
      ...formData
    });
    setFormSubmitted(true);
  };
  
  const nextStep = () => {
    setStep(step + 1);
  };
  
  const prevStep = () => {
    setStep(step - 1);
  };
  
  // Generate available time slots (in a real app, these would come from a backend)
  const getAvailableTimeSlots = () => {
    return [
      '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'
    ];
  };
  
  // Format date for display
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('de-DE', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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
              Termin vereinbaren
            </h1>
            
            <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.text.dark }}>
              Buchen Sie einen Beratungstermin mit unserem KI-Team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Appointment Booking Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {formSubmitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 bg-white rounded-lg shadow-xl"
            >
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: `${colors.primary}22` }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h2 className="text-2xl font-bold mb-4" style={{ color: colors.text.dark }}>
                Termin erfolgreich gebucht!
              </h2>
              
              <p className="text-lg text-gray-600 mb-6">
                Vielen Dank für Ihre Terminanfrage. Wir haben Ihnen eine Bestätigung per E-Mail gesendet und freuen uns auf das Gespräch mit Ihnen.
              </p>
              
              <div className="bg-gray-100 rounded-lg p-6 max-w-md mx-auto mb-8">
                <h3 className="font-semibold mb-2" style={{ color: colors.text.dark }}>
                  Termindetails:
                </h3>
                <p className="text-gray-600">
                  {date instanceof Date && (
                    <>
                      <span className="font-medium">Datum:</span> {formatDate(date)}<br />
                      <span className="font-medium">Uhrzeit:</span> {timeSlot} Uhr<br />
                      <span className="font-medium">Thema:</span> {formData.topic}
                    </>
                  )}
                </p>
              </div>
              
              <Link 
                to="/" 
                className="inline-flex items-center px-6 py-3 rounded-md shadow-lg text-white hover:opacity-90 transition-all"
                style={{ backgroundColor: colors.primary }}
              >
                Zurück zur Startseite
              </Link>
            </motion.div>
          ) : (
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              {/* Progress Steps */}
              <div className="bg-gray-100 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-medium"
                      style={{ backgroundColor: step >= 1 ? colors.primary : 'rgba(0,0,0,0.2)' }}
                    >
                      1
                    </div>
                    <span className="ml-2 text-sm font-medium" style={{ color: step >= 1 ? colors.text.dark : 'rgba(0,0,0,0.4)' }}>
                      Datum & Uhrzeit
                    </span>
                  </div>
                  
                  <div className="hidden sm:block w-16 h-0.5 bg-gray-300"></div>
                  
                  <div className="flex items-center">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-medium"
                      style={{ backgroundColor: step >= 2 ? colors.primary : 'rgba(0,0,0,0.2)' }}
                    >
                      2
                    </div>
                    <span className="ml-2 text-sm font-medium" style={{ color: step >= 2 ? colors.text.dark : 'rgba(0,0,0,0.4)' }}>
                      Persönliche Daten
                    </span>
                  </div>
                  
                  <div className="hidden sm:block w-16 h-0.5 bg-gray-300"></div>
                  
                  <div className="flex items-center">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-medium"
                      style={{ backgroundColor: step >= 3 ? colors.primary : 'rgba(0,0,0,0.2)' }}
                    >
                      3
                    </div>
                    <span className="ml-2 text-sm font-medium" style={{ color: step >= 3 ? colors.text.dark : 'rgba(0,0,0,0.4)' }}>
                      Bestätigung
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h2 className="text-2xl font-bold mb-6" style={{ color: colors.text.dark }}>
                      Wählen Sie einen Termin
                    </h2>
                    
                    <div className="mb-8">
                      <div className="flex justify-center mb-6">
                        <div className="calendar-container" style={{ 
                          '--calendar-border-color': colors.primary + '33',
                          '--calendar-tile-hover': colors.primary + '22',
                          '--calendar-active-bg': colors.primary,
                        } as React.CSSProperties}>
                          <Calendar 
                            onChange={handleDateChange} 
                            value={date} 
                            minDate={new Date()}
                            locale="de-DE"
                          />
                        </div>
                      </div>
                      
                      {date && (
                        <div>
                          <h3 className="text-lg font-semibold mb-4" style={{ color: colors.text.dark }}>
                            Verfügbare Zeiten für {date instanceof Date && formatDate(date)}:
                          </h3>
                          
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {getAvailableTimeSlots().map((slot) => (
                              <button
                                key={slot}
                                onClick={() => handleTimeSlotSelect(slot)}
                                className={`py-2 px-4 rounded-md border transition-all ${
                                  timeSlot === slot 
                                    ? 'text-white border-transparent' 
                                    : 'text-gray-700 border-gray-300 hover:border-gray-400'
                                }`}
                                style={{ 
                                  backgroundColor: timeSlot === slot ? colors.primary : 'transparent',
                                }}
                              >
                                {slot} Uhr
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex justify-end">
                      <button
                        onClick={nextStep}
                        disabled={!timeSlot}
                        className={`px-6 py-2 rounded-md text-white font-medium shadow-lg transition-all ${
                          !timeSlot ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
                        }`}
                        style={{ backgroundColor: colors.primary }}
                      >
                        Weiter
                      </button>
                    </div>
                  </motion.div>
                )}
                
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h2 className="text-2xl font-bold mb-6" style={{ color: colors.text.dark }}>
                      Persönliche Daten
                    </h2>
                    
                    <form>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50"
                            style={{ borderColor: colors.primary }}
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            E-Mail *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50"
                            style={{ borderColor: colors.primary }}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50"
                          style={{ borderColor: colors.primary }}
                        />
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">
                          Gesprächsthema *
                        </label>
                        <select
                          id="topic"
                          name="topic"
                          value={formData.topic}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50"
                          style={{ borderColor: colors.primary }}
                          required
                        >
                          <option value="">Bitte wählen</option>
                          <option value="LLM-Integration">LLM-Integration</option>
                          <option value="KI-Agenten">KI-Agenten</option>
                          <option value="Generative KI">Generative KI</option>
                          <option value="Allgemeine Beratung">Allgemeine Beratung</option>
                          <option value="Sonstiges">Sonstiges</option>
                        </select>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Nachricht / Anmerkungen
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50"
                          style={{ borderColor: colors.primary }}
                        ></textarea>
                      </div>
                      
                      <div className="mb-6">
                        <div className="flex items-start">
                          <input
                            id="privacy"
                            name="privacy"
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            required
                          />
                          <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                            Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten zu. *
                          </label>
                        </div>
                      </div>
                    </form>
                    
                    <div className="flex justify-between">
                      <button
                        onClick={prevStep}
                        className="px-6 py-2 rounded-md border border-gray-300 font-medium hover:bg-gray-50 transition-all"
                      >
                        Zurück
                      </button>
                      
                      <button
                        onClick={nextStep}
                        disabled={!formData.name || !formData.email || !formData.topic}
                        className={`px-6 py-2 rounded-md text-white font-medium shadow-lg transition-all ${
                          !formData.name || !formData.email || !formData.topic 
                            ? 'opacity-50 cursor-not-allowed' 
                            : 'hover:opacity-90'
                        }`}
                        style={{ backgroundColor: colors.primary }}
                      >
                        Weiter
                      </button>
                    </div>
                  </motion.div>
                )}
                
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h2 className="text-2xl font-bold mb-6" style={{ color: colors.text.dark }}>
                      Terminbestätigung
                    </h2>
                    
                    <div className="bg-gray-100 rounded-lg p-6 mb-8">
                      <h3 className="text-lg font-semibold mb-4" style={{ color: colors.text.dark }}>
                        Termindetails:
                      </h3>
                      
                      <div className="space-y-3 text-gray-600">
                        <p>
                          <span className="font-medium">Datum:</span> {date instanceof Date && formatDate(date)}
                        </p>
                        <p>
                          <span className="font-medium">Uhrzeit:</span> {timeSlot} Uhr
                        </p>
                        <p>
                          <span className="font-medium">Name:</span> {formData.name}
                        </p>
                        <p>
                          <span className="font-medium">E-Mail:</span> {formData.email}
                        </p>
                        {formData.phone && (
                          <p>
                            <span className="font-medium">Telefon:</span> {formData.phone}
                          </p>
                        )}
                        <p>
                          <span className="font-medium">Gesprächsthema:</span> {formData.topic}
                        </p>
                        {formData.message && (
                          <p>
                            <span className="font-medium">Nachricht:</span> {formData.message}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <button
                        onClick={prevStep}
                        className="px-6 py-2 rounded-md border border-gray-300 font-medium hover:bg-gray-50 transition-all"
                      >
                        Zurück
                      </button>
                      
                      <button
                        onClick={handleSubmit}
                        className="px-6 py-2 rounded-md text-white font-medium shadow-lg hover:opacity-90 transition-all"
                        style={{ backgroundColor: colors.primary }}
                      >
                        Termin bestätigen
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16" style={{ backgroundColor: colors.background.lightGray }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Info 1 */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div 
                className="h-2"
                style={{ backgroundColor: colors.primary }}
              ></div>
              <div className="p-6">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${colors.primary}22` }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <h3 className="text-lg font-semibold mb-2" style={{ color: colors.text.dark }}>
                  Dauer des Gesprächs
                </h3>
                
                <p className="text-gray-600">
                  Unsere Erstberatungsgespräche dauern in der Regel 30-45 Minuten und sind kostenlos und unverbindlich.
                </p>
              </div>
            </motion.div>
            
            {/* Info 2 */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div 
                className="h-2"
                style={{ backgroundColor: colors.accent }}
              ></div>
              <div className="p-6">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${colors.accent}22` }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={colors.accent}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <h3 className="text-lg font-semibold mb-2" style={{ color: colors.text.dark }}>
                  Gesprächsformat
                </h3>
                
                <p className="text-gray-600">
                  Sie können zwischen einem Videogespräch oder einem Telefonat wählen. Die Details erhalten Sie in der Bestätigungsmail.
                </p>
              </div>
            </motion.div>
            
            {/* Info 3 */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div 
                className="h-2"
                style={{ backgroundColor: colors.primary }}
              ></div>
              <div className="p-6">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${colors.primary}22` }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={colors.primary}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <h3 className="text-lg font-semibold mb-2" style={{ color: colors.text.dark }}>
                  Terminänderungen
                </h3>
                
                <p className="text-gray-600">
                  Sollten Sie den Termin verschieben oder absagen müssen, kontaktieren Sie uns bitte mindestens 24 Stunden vorher.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
