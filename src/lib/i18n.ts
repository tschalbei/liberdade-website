// i18n.ts - Internationalization utility for Liberdade AI website

import { create } from 'zustand';

// Define available languages
export type Language = 'de' | 'en';

// Define language store interface
interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
}

// Create language store with Zustand
export const useLanguageStore = create<LanguageState>((set) => ({
  language: 'de', // Default language is German
  setLanguage: (language: Language) => set({ language }),
}));

// Translation dictionaries
export const translations = {
  // Navigation
  nav: {
    home: {
      de: 'Home',
      en: 'Home',
    },
    services: {
      de: 'Dienstleistungen',
      en: 'Services',
    },
    about: {
      de: 'Über uns',
      en: 'About us',
    },
    contact: {
      de: 'Kontakt',
      en: 'Contact',
    },
    appointment: {
      de: 'Termin buchen',
      en: 'Book appointment',
    },
    moeglichkeiten: {
      de: 'Möglichkeiten',
      en: 'Possibilities',
    },
    language: {
      de: 'EN',
      en: 'DE',
    },
  },
  
  // Home page
  home: {
    hero: {
      title: {
        de: 'KI-Lösungen für Ihr Unternehmen',
        en: 'AI Solutions for Your Business',
      },
      subtitle: {
        de: 'Maßgeschneiderte KI-Dienstleistungen von Liberdade AI',
        en: 'Tailored AI services by Liberdade AI',
      },
      cta: {
        de: 'Mehr erfahren',
        en: 'Learn more',
      },
      discoverServices: {
        de: 'Dienstleistungen entdecken',
        en: 'Discover services',
      },
      scheduleAppointment: {
        de: 'Termin vereinbaren',
        en: 'Schedule appointment',
      },
    },
    services: {
      title: {
        de: 'Unsere Dienstleistungen',
        en: 'Our Services',
      },
      subtitle: {
        de: 'Wir bieten ein breites Spektrum an KI-Dienstleistungen, die auf Ihre spezifischen Bedürfnisse zugeschnitten sind.',
        en: 'We offer a wide range of AI services tailored to your specific needs.',
      },
      viewAll: {
        de: 'Alle Dienstleistungen ansehen',
        en: 'View all services',
      },
    },
    about: {
      title: {
        de: 'Über Liberdade AI',
        en: 'About Liberdade AI',
      },
      content: {
        de: 'Liberdade AI steht für innovative KI-Lösungen, die Unternehmen dabei helfen, effizienter zu arbeiten und neue Möglichkeiten zu erschließen.',
        en: 'Liberdade AI stands for innovative AI solutions that help companies work more efficiently and unlock new opportunities.',
      },
      cta: {
        de: 'Mehr über uns',
        en: 'More about us',
      },
    },
    testimonials: {
      title: {
        de: 'Was unsere Kunden sagen',
        en: 'What our clients say',
      },
    },
    cta: {
      title: {
        de: 'Bereit für den nächsten Schritt?',
        en: 'Ready for the next step?',
      },
      content: {
        de: 'Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.',
        en: 'Contact us for a non-binding consultation.',
      },
      button: {
        de: 'Kontakt aufnehmen',
        en: 'Get in touch',
      },
    },
    benefits: {
      title: {
        de: 'Warum Liberdade AI wählen?',
        en: 'Why choose Liberdade AI?',
      },
      expertise: {
        title: {
          de: 'Expertise',
          en: 'Expertise',
        },
        description: {
          de: 'Tiefgreifendes Fachwissen in allen Bereichen der künstlichen Intelligenz.',
          en: 'Deep expertise in all areas of artificial intelligence.',
        },
      },
      tailored: {
        title: {
          de: 'Maßgeschneidert',
          en: 'Tailored',
        },
        description: {
          de: 'Individuelle Lösungen, die genau auf Ihre Anforderungen zugeschnitten sind.',
          en: 'Individual solutions precisely tailored to your requirements.',
        },
      },
      efficiency: {
        title: {
          de: 'Effizienz',
          en: 'Efficiency',
        },
        description: {
          de: 'Optimierte Prozesse und schnelle Implementierung für maximale Effizienz.',
          en: 'Optimized processes and fast implementation for maximum efficiency.',
        },
      },
      support: {
        title: {
          de: 'Support',
          en: 'Support',
        },
        description: {
          de: 'Umfassender Support und langfristige Betreuung für nachhaltigen Erfolg.',
          en: 'Comprehensive support and long-term care for sustainable success.',
        },
      },
    },
  },
  
  // Services page
  services: {
    header: {
      title: {
        de: 'Dienstleistungen',
        en: 'Services',
      },
      subtitle: {
        de: 'Unsere KI-Lösungen für Ihren Erfolg',
        en: 'Our AI solutions for your success',
      },
    },
    overview: {
      title: {
        de: 'Unsere KI-Dienstleistungen im Überblick',
        en: 'Overview of our AI services',
      },
      subtitle: {
        de: 'Wir bieten ein umfassendes Portfolio an KI-Dienstleistungen, die auf Ihre individuellen Anforderungen zugeschnitten sind.',
        en: 'We offer a comprehensive portfolio of AI services tailored to your individual requirements.',
      },
    },
    llm: {
      title: {
        de: 'LLM Integration',
        en: 'LLM Integration',
      },
      description: {
        de: 'Wir integrieren Large Language Models (LLMs) wie ChatGPT in Ihre bestehenden Systeme und Prozesse, um Ihre Geschäftsabläufe zu optimieren und zu automatisieren.',
        en: 'We integrate Large Language Models (LLMs) like ChatGPT into your existing systems and processes to optimize and automate your business operations.',
      },
      features: {
        integration: {
          de: 'Nahtlose Integration in bestehende Systeme',
          en: 'Seamless integration into existing systems',
        },
        customization: {
          de: 'Anpassung und Feinabstimmung der Modelle',
          en: 'Customization and fine-tuning of models',
        },
        prompts: {
          de: 'Entwicklung von benutzerdefinierten Prompts',
          en: 'Development of custom prompts',
        },
        training: {
          de: 'Schulung und Support für Ihr Team',
          en: 'Training and support for your team',
        },
      },
    },
    agents: {
      title: {
        de: 'KI-Agenten',
        en: 'AI Agents',
      },
      description: {
        de: 'Wir entwickeln intelligente KI-Agenten, die komplexe Aufgaben automatisieren und Ihre Mitarbeiter bei repetitiven Tätigkeiten entlasten können.',
        en: 'We develop intelligent AI agents that can automate complex tasks and relieve your employees of repetitive activities.',
      },
      features: {
        tools: {
          de: 'Entwicklung mit n8n, Flowise und MCP',
          en: 'Development with n8n, Flowise, and MCP',
        },
        apis: {
          de: 'Integration von APIs und HTTP-Requests',
          en: 'Integration of APIs and HTTP requests',
        },
        models: {
          de: 'Anbindung lokaler Modelle',
          en: 'Connection of local models',
        },
        databases: {
          de: 'Einsatz von Vektordatenbanken',
          en: 'Use of vector databases',
        },
      },
    },
    generative: {
      title: {
        de: 'Generative KI',
        en: 'Generative AI',
      },
      description: {
        de: 'Wir nutzen generative KI-Technologien, um beeindruckende visuelle Inhalte zu erstellen und Ihre Bildbearbeitungsprozesse zu optimieren.',
        en: 'We use generative AI technologies to create impressive visual content and optimize your image editing processes.',
      },
      features: {
        midjourney: {
          de: 'Einsatz von Midjourney und Stable Diffusion',
          en: 'Use of Midjourney and Stable Diffusion',
        },
        flux: {
          de: 'Arbeit mit Flux und ComfyUI',
          en: 'Work with Flux and ComfyUI',
        },
        controlnets: {
          de: 'Fortgeschrittene Bildmanipulation mit ControlNets',
          en: 'Advanced image manipulation with ControlNets',
        },
        workflows: {
          de: 'Erstellung von benutzerdefinierten Workflows',
          en: 'Creation of custom workflows',
        },
      },
    },
    business: {
      title: {
        de: 'KI-gestützter Businessaufbau',
        en: 'AI-supported Business Development',
      },
      description: {
        de: 'Wir unterstützen Sie bei der Entwicklung von Geschäftsmodellen mit KI – ohne Hype, mit echten Strategien und Systemen.',
        en: 'We support you in developing business models with AI – without hype, with real strategies and systems.',
      },
      features: {
        consulting: {
          de: 'Strategische Beratung für KI-Integration',
          en: 'Strategic consulting for AI integration',
        },
        models: {
          de: 'Entwicklung von KI-basierten Geschäftsmodellen',
          en: 'Development of AI-based business models',
        },
        jobmarket: {
          de: 'Zugang zur KI-Job-Börse',
          en: 'Access to the AI job market',
        },
        training: {
          de: 'Schulungen und Vorträge zu KI-Themen',
          en: 'Training and lectures on AI topics',
        },
      },
    },
    cta: {
      title: {
        de: 'Maßgeschneiderte Lösungen',
        en: 'Tailored Solutions',
      },
      content: {
        de: 'Wir entwickeln individuelle KI-Lösungen für Ihre spezifischen Anforderungen.',
        en: 'We develop individual AI solutions for your specific requirements.',
      },
      button: {
        de: 'Kontaktieren Sie uns',
        en: 'Contact us',
      },
    },
  },
  
  // About page
  about: {
    header: {
      title: {
        de: 'Über uns',
        en: 'About us',
      },
      subtitle: {
        de: 'Lernen Sie Liberdade AI kennen',
        en: 'Get to know Liberdade AI',
      },
    },
    philosophy: {
      title: {
        de: 'Unsere Philosophie',
        en: 'Our Philosophy',
      },
      content1: {
        de: 'Bei Liberdade AI verbinden wir die Bedeutung von "Freiheit" mit den Möglichkeiten der künstlichen Intelligenz. Wir glauben, dass KI-Technologien das Potenzial haben, Menschen und Unternehmen zu befreien – von repetitiven Aufgaben, von Einschränkungen und von veralteten Prozessen.',
        en: 'At Liberdade AI, we combine the meaning of "freedom" with the possibilities of artificial intelligence. We believe that AI technologies have the potential to liberate people and businesses - from repetitive tasks, from limitations, and from outdated processes.',
      },
      content2: {
        de: 'Unser Name "Liberdade" steht für diese Freiheit und für unsere Vision: KI-Lösungen zu entwickeln, die nicht nur technologisch fortschrittlich sind, sondern auch echten Mehrwert schaffen und neue Möglichkeiten eröffnen.',
        en: 'Our name "Liberdade" stands for this freedom and for our vision: to develop AI solutions that are not only technologically advanced but also create real value and open up new possibilities.',
      },
      content3: {
        de: 'Wir setzen auf eine verantwortungsvolle Nutzung von KI-Technologien und legen großen Wert auf Transparenz, Datenschutz und ethische Grundsätze in allen unseren Projekten.',
        en: 'We focus on responsible use of AI technologies and place great emphasis on transparency, data protection, and ethical principles in all our projects.',
      },
    },
    values: {
      title: {
        de: 'Unsere Werte',
        en: 'Our Values',
      },
      subtitle: {
        de: 'Diese Grundsätze leiten uns bei allem, was wir tun.',
        en: 'These principles guide us in everything we do.',
      },
      value1: {
        title: {
          de: 'Vertrauen & Sicherheit',
          en: 'Trust & Security',
        },
        description: {
          de: 'Wir legen größten Wert auf Datenschutz, Sicherheit und den verantwortungsvollen Umgang mit Technologie.',
          en: 'We place the highest value on data protection, security, and responsible use of technology.',
        },
      },
      value2: {
        title: {
          de: 'Innovation & Exzellenz',
          en: 'Innovation & Excellence',
        },
        description: {
          de: 'Wir streben kontinuierlich nach neuen Lösungen und höchster Qualität in allen unseren Projekten.',
          en: 'We continuously strive for new solutions and the highest quality in all our projects.',
        },
      },
      value3: {
        title: {
          de: 'Partnerschaft & Zusammenarbeit',
          en: 'Partnership & Collaboration',
        },
        description: {
          de: 'Wir arbeiten eng mit unseren Kunden zusammen und verstehen uns als langfristiger Partner für Ihren Erfolg.',
          en: 'We work closely with our customers and see ourselves as a long-term partner for your success.',
        },
      },
    },
    expertise: {
      title: {
        de: 'Unsere Expertise',
        en: 'Our Expertise',
      },
      subtitle: {
        de: 'Wir vereinen tiefgreifendes Fachwissen in verschiedenen Bereichen der künstlichen Intelligenz.',
        en: 'We combine deep expertise in various areas of artificial intelligence.',
      },
      expertise1: {
        title: {
          de: 'KI-Entwicklung',
          en: 'AI Development',
        },
        description: {
          de: 'Entwicklung und Integration von KI-Lösungen mit modernsten Technologien und Frameworks. Wir beherrschen die gesamte Bandbreite von der Konzeption bis zur Implementierung.',
          en: 'Development and integration of AI solutions with state-of-the-art technologies and frameworks. We master the entire spectrum from conception to implementation.',
        },
      },
      expertise2: {
        title: {
          de: 'Datenanalyse',
          en: 'Data Analysis',
        },
        description: {
          de: 'Umfassende Analyse und Interpretation von Daten zur Gewinnung wertvoller Erkenntnisse. Wir nutzen fortschrittliche Algorithmen, um verborgene Muster zu erkennen.',
          en: 'Comprehensive analysis and interpretation of data to gain valuable insights. We use advanced algorithms to identify hidden patterns.',
        },
      },
      expertise3: {
        title: {
          de: 'Prozessautomatisierung',
          en: 'Process Automation',
        },
        description: {
          de: 'Automatisierung von Geschäftsprozessen durch intelligente KI-Lösungen. Wir identifizieren Optimierungspotenziale und setzen diese effizient um.',
          en: 'Automation of business processes through intelligent AI solutions. We identify optimization potentials and implement them efficiently.',
        },
      },
      expertise4: {
        title: {
          de: 'KI-Beratung',
          en: 'AI Consulting',
        },
        description: {
          de: 'Strategische Beratung zur Integration von KI in bestehende Geschäftsmodelle. Wir helfen Ihnen, die richtigen Technologien für Ihre spezifischen Anforderungen zu finden.',
          en: 'Strategic consulting on integrating AI into existing business models. We help you find the right technologies for your specific requirements.',
        },
      },
    },
    cta: {
      title: {
        de: 'Bereit für den nächsten Schritt?',
        en: 'Ready for the next step?',
      },
      content: {
        de: 'Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch und erfahren Sie, wie KI Ihr Unternehmen voranbringen kann.',
        en: 'Contact us for a non-binding consultation and learn how AI can advance your business.',
      },
      button: {
        de: 'Kontakt aufnehmen',
        en: 'Get in touch',
      },
    },
  },
  
  // Contact page
  contact: {
    header: {
      title: {
        de: 'Kontakt',
        en: 'Contact',
      },
      subtitle: {
        de: 'Wir freuen uns auf Ihre Nachricht',
        en: 'We look forward to hearing from you',
      },
    },
    form: {
      title: {
        de: 'Kontaktieren Sie uns',
        en: 'Contact us',
      },
      intro: {
        de: 'Haben Sie Fragen zu unseren KI-Dienstleistungen oder möchten Sie ein Projekt besprechen? Füllen Sie das Formular aus, und wir melden uns umgehend bei Ihnen.',
        en: 'Do you have questions about our AI services or would you like to discuss a project? Fill out the form, and we will get back to you promptly.',
      },
      email: {
        de: 'E-Mail',
        en: 'Email',
      },
      phone: {
        de: 'Telefon',
        en: 'Phone',
      },
      hours: {
        title: {
          de: 'Geschäftszeiten',
          en: 'Business hours',
        },
        content: {
          de: 'Montag - Freitag: 9:00 - 17:00 Uhr',
          en: 'Monday - Friday: 9:00 AM - 5:00 PM',
        },
      },
      name: {
        de: 'Name',
        en: 'Name',
      },
      subject: {
        de: 'Betreff',
        en: 'Subject',
      },
      message: {
        de: 'Nachricht',
        en: 'Message',
      },
      privacy: {
        de: 'Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten zu.',
        en: 'I have read the privacy policy and agree to the processing of my data.',
      },
      submit: {
        de: 'Nachricht senden',
        en: 'Send message',
      },
      success: {
        title: {
          de: 'Vielen Dank!',
          en: 'Thank you!',
        },
        message: {
          de: 'Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns in Kürze bei Ihnen melden.',
          en: 'Your message has been successfully sent. We will get back to you shortly.',
        },
      },
    },
    location: {
      title: {
        de: 'Standort',
        en: 'Location',
      },
      address: {
        de: 'Schöffengasse 21\n41751 Viersen\nDeutschland',
        en: 'Schöffengasse 21\n41751 Viersen\nGermany',
      },
    },
    cta: {
      title: {
        de: 'Lieber direkt einen Termin vereinbaren?',
        en: 'Prefer to schedule an appointment directly?',
      },
      content: {
        de: 'Nutzen Sie unser Terminplanungstool für ein persönliches Gespräch.',
        en: 'Use our appointment scheduling tool for a personal conversation.',
      },
      button: {
        de: 'Termin vereinbaren',
        en: 'Schedule appointment',
      },
    },
  },
  
  // Appointment page
  appointment: {
    header: {
      title: {
        de: 'Termin buchen',
        en: 'Book appointment',
      },
      subtitle: {
        de: 'Vereinbaren Sie einen Beratungstermin mit uns',
        en: 'Schedule a consultation with us',
      },
    },
    intro: {
      title: {
        de: 'Persönliche Beratung',
        en: 'Personal consultation',
      },
      content: {
        de: 'Wählen Sie einen passenden Termin für ein persönliches Gespräch mit unseren KI-Experten. Wir freuen uns darauf, Ihre Anforderungen kennenzulernen und gemeinsam Lösungen zu entwickeln.',
        en: 'Choose a suitable time for a personal conversation with our AI experts. We look forward to learning about your requirements and developing solutions together.',
      },
    },
  },
  
  // Impressum page
  impressum: {
    header: {
      title: {
        de: 'Impressum',
        en: 'Legal Notice',
      },
      subtitle: {
        de: 'Rechtliche Hinweise und Angaben gemäß § 5 DDG',
        en: 'Legal information and details according to § 5 DDG',
      },
    },
    company: {
      title: {
        de: 'Unternehmen',
        en: 'Company',
      },
      representative: {
        de: 'Vertreten durch',
        en: 'Represented by',
      },
    },
    contact: {
      title: {
        de: 'Kontakt',
        en: 'Contact',
      },
      phone: {
        de: 'Telefon',
        en: 'Phone',
      },
    },
    vat: {
      title: {
        de: 'Umsatzsteuer-ID',
        en: 'VAT ID',
      },
      description: {
        de: 'Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz',
        en: 'VAT identification number according to §27a VAT law',
      },
    },
    disclaimer: {
      title: {
        de: 'Haftungsausschluss',
        en: 'Disclaimer',
      },
      content: {
        title: {
          de: 'Haftung für Inhalte',
          en: 'Liability for content',
        },
        text: {
          de: 'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.',
          en: 'The contents of our pages have been created with the greatest care. However, we cannot guarantee the accuracy, completeness and timeliness of the content. As a service provider, we are responsible for our own content on these pages according to general laws in accordance with § 7 para.1 DDG.',
        },
      },
      links: {
        title: {
          de: 'Haftung für Links',
          en: 'Liability for links',
        },
        text: {
          de: 'Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.',
          en: 'Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the contents of the linked pages.',
        },
      },
      copyright: {
        title: {
          de: 'Urheberrecht',
          en: 'Copyright',
        },
        text: {
          de: 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.',
          en: 'The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution and any form of commercialization of such material beyond the scope of the copyright law shall require the prior written consent of its respective author or creator.',
        },
      },
    },
  },

  // Datenschutz page
  datenschutz: {
    header: {
      title: {
        de: 'Datenschutzerklärung',
        en: 'Privacy Policy',
      },
      subtitle: {
        de: 'Informationen zur Erhebung und Verarbeitung personenbezogener Daten',
        en: 'Information on the collection and processing of personal data',
      },
    },
    overview: {
      title: {
        de: 'Datenschutz auf einen Blick',
        en: 'Data protection at a glance',
      },
      intro: {
        de: 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.',
        en: 'The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to identify you personally.',
      },
    },
    responsible: {
      title: {
        de: 'Verantwortliche Stelle',
        en: 'Responsible party',
      },
      phone: {
        de: 'Telefon',
        en: 'Phone',
      },
    },
    collection: {
      title: {
        de: 'Wie erfassen wir Ihre Daten?',
        en: 'How do we collect your data?',
      },
      text1: {
        de: 'Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.',
        en: 'Your data is collected on the one hand by you providing it to us. This can be data that you enter in a contact form, for example.',
      },
      text2: {
        de: 'Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).',
        en: 'Other data is automatically collected by our IT systems when you visit the website. This is mainly technical data (e.g. internet browser, operating system or time of page access).',
      },
    },
    usage: {
      title: {
        de: 'Wofür nutzen wir Ihre Daten?',
        en: 'What do we use your data for?',
      },
      text: {
        de: 'Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.',
        en: 'Part of the data is collected to ensure error-free provision of the website. Other data may be used to analyze your user behavior.',
      },
    },
    rights: {
      title: {
        de: 'Welche Rechte haben Sie bezüglich Ihrer Daten?',
        en: 'What rights do you have regarding your data?',
      },
      access: {
        de: 'Recht auf Auskunft über Ihre gespeicherten Daten',
        en: 'Right to information about your stored data',
      },
      correction: {
        de: 'Recht auf Berichtigung unrichtiger Daten',
        en: 'Right to correction of incorrect data',
      },
      deletion: {
        de: 'Recht auf Löschung Ihrer Daten',
        en: 'Right to deletion of your data',
      },
      restriction: {
        de: 'Recht auf Einschränkung der Datenverarbeitung',
        en: 'Right to restriction of data processing',
      },
      portability: {
        de: 'Recht auf Datenübertragbarkeit',
        en: 'Right to data portability',
      },
      objection: {
        de: 'Widerspruchsrecht gegen die Datenverarbeitung',
        en: 'Right to object to data processing',
      },
      complaint: {
        de: 'Beschwerderecht bei der Aufsichtsbehörde',
        en: 'Right to complain to the supervisory authority',
      },
    },
    ssl: {
      title: {
        de: 'SSL- bzw. TLS-Verschlüsselung',
        en: 'SSL or TLS encryption',
      },
      text: {
        de: 'Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt.',
        en: 'This site uses SSL or TLS encryption for security reasons and to protect the transmission of confidential content. You can recognize an encrypted connection by the fact that the address line of the browser changes from "http://" to "https://".',
      },
    },
    contact: {
      title: {
        de: 'Fragen zum Datenschutz',
        en: 'Questions about data protection',
      },
      text: {
        de: 'Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns gerne eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person in unserem Unternehmen.',
        en: 'If you have any questions about data protection, please feel free to send us an email or contact the person responsible for data protection in our company directly.',
      },
    },
  },
  
  // Möglichkeiten page
  moeglichkeiten: {
    header: {
      title: {
        de: 'Möglichkeiten mit KI',
        en: 'Possibilities with AI',
      },
      subtitle: {
        de: '10 konkrete Anwendungsbeispiele für deinen Business-Alltag',
        en: '10 concrete application examples for your business everyday life',
      },
    },
    intro: {
      text: {
        de: 'Viele Unternehmen wissen, dass KI ihnen helfen kann – aber nicht genau wie. Deshalb findest du hier 10 ganz konkrete Ideen, wie kleine und mittlere Unternehmen sowie Solopreneure KI in ihrem Tagesgeschäft nutzen können. Alle Beispiele basieren auf erprobten KI-Automationen, die Zeit sparen, Umsatz steigern und Abläufe professionalisieren.',
        en: 'Many companies know that AI can help them – but not exactly how. That\'s why you\'ll find 10 very concrete ideas here on how small and medium-sized companies as well as solopreneurs can use AI in their daily business. All examples are based on proven AI automations that save time, increase revenue and professionalize processes.',
      },
    },
    useCases: {
      customerSupport: {
        title: {
          de: 'Kundenanfragen automatisch beantworten',
          en: 'Automatically answer customer inquiries',
        },
        description: {
          de: 'Mit einem KI-basierten Support-Agent kannst du wiederkehrende Fragen zu Produkten, Angeboten oder Öffnungszeiten rund um die Uhr beantworten lassen – auf Website, WhatsApp oder via E-Mail.',
          en: 'With an AI-based support agent, you can have recurring questions about products, offers or opening hours answered around the clock – on website, WhatsApp or via email.',
        },
        benefit: {
          de: '24/7 Support ohne zusätzlichen Personalaufwand',
          en: '24/7 support without additional personnel costs',
        },
      },
      socialMedia: {
        title: {
          de: 'Social Media Inhalte automatisch erstellen',
          en: 'Automatically create social media content',
        },
        description: {
          de: 'Deine Zielgruppe erwartet regelmäßig Content. KI kann Posts, Captions, Hashtags und sogar ganze Redaktionspläne automatisch erstellen – abgestimmt auf deine Marke und Branche.',
          en: 'Your target audience expects regular content. AI can automatically create posts, captions, hashtags and even entire editorial plans – tailored to your brand and industry.',
        },
        benefit: {
          de: 'Mehr Reichweite mit weniger Aufwand',
          en: 'More reach with less effort',
        },
      },
      documents: {
        title: {
          de: 'Angebote und Rechnungen automatisiert erstellen',
          en: 'Automatically create offers and invoices',
        },
        description: {
          de: 'Du erhältst eine Anfrage? Die KI generiert automatisch ein individuelles Angebot – auf Basis deiner Vorlagen. Auch Rechnungen lassen sich so automatisieren.',
          en: 'You receive an inquiry? The AI automatically generates an individual offer – based on your templates. Invoices can also be automated this way.',
        },
        benefit: {
          de: 'Schnellerer Sales-Prozess und weniger Admin-Aufwand',
          en: 'Faster sales process and less administrative effort',
        },
      },
      leadQualification: {
        title: {
          de: 'Lead-Qualifizierung mit KI-Formularen',
          en: 'Lead qualification with AI forms',
        },
        description: {
          de: 'Interaktive Formulare oder Chatbots mit KI filtern automatisch die besten Leads heraus – z. B. durch gezielte Fragen, NLP-Auswertung oder Scoring-Systeme.',
          en: 'Interactive forms or chatbots with AI automatically filter out the best leads – e.g. through targeted questions, NLP evaluation or scoring systems.',
        },
        benefit: {
          de: 'Fokus auf qualifizierte Kontakte statt Kaltakquise',
          en: 'Focus on qualified contacts instead of cold calling',
        },
      },
      newsletter: {
        title: {
          de: 'Newsletter-Texte in Sekunden generieren',
          en: 'Generate newsletter texts in seconds',
        },
        description: {
          de: 'Deine E-Mail-Newsletter können von der KI geplant, betextet und segmentiert werden – inklusive A/B-Tests und Personalisierung.',
          en: 'Your email newsletters can be planned, written and segmented by AI – including A/B tests and personalization.',
        },
        benefit: {
          de: 'Professioneller E-Mail-Marketing mit minimalem Zeitaufwand',
          en: 'Professional email marketing with minimal time investment',
        },
      },
      research: {
        title: {
          de: 'Recherchen und Zusammenfassungen automatisieren',
          en: 'Automate research and summaries',
        },
        description: {
          de: 'Ob Marktanalysen, Wettbewerbsvergleiche oder juristische Texte – KI kann dir in Sekunden strukturierte Zusammenfassungen liefern, inkl. Quellenangabe.',
          en: 'Whether market analyses, competitive comparisons or legal texts – AI can provide you with structured summaries in seconds, including source references.',
        },
        benefit: {
          de: 'Schneller Zugriff auf fundiertes Wissen',
          en: 'Quick access to well-founded knowledge',
        },
      },
      digitalProducts: {
        title: {
          de: 'Online-Kurse, E-Books & digitale Produkte entwickeln',
          en: 'Develop online courses, e-books & digital products',
        },
        description: {
          de: 'Du willst skalierbare digitale Produkte? KI unterstützt dich beim Skripten, Strukturieren und Schreiben von Kursmodulen, Verkaufsseiten oder Workbooks.',
          en: 'You want scalable digital products? AI supports you in scripting, structuring and writing course modules, sales pages or workbooks.',
        },
        benefit: {
          de: 'Von Idee zu Produkt in wenigen Tagen',
          en: 'From idea to product in just a few days',
        },
      },
      processes: {
        title: {
          de: 'Interne SOPs und Prozesse dokumentieren',
          en: 'Document internal SOPs and processes',
        },
        description: {
          de: 'Du willst effizienter arbeiten oder Aufgaben delegieren? Die KI erstellt aus deinen Arbeitsabläufen automatisch dokumentierte Prozesse (SOPs).',
          en: 'You want to work more efficiently or delegate tasks? The AI automatically creates documented processes (SOPs) from your workflows.',
        },
        benefit: {
          de: 'Skalierbares Business mit System',
          en: 'Scalable business with system',
        },
      },
      feedback: {
        title: {
          de: 'Kundenfeedback automatisch analysieren',
          en: 'Automatically analyze customer feedback',
        },
        description: {
          de: 'Bewertungen, Umfragen oder E-Mails – die KI kann Stimmung und Themen automatisch auswerten und dir konkrete Verbesserungsansätze liefern.',
          en: 'Reviews, surveys or emails – AI can automatically evaluate mood and topics and provide you with concrete improvement approaches.',
        },
        benefit: {
          de: 'Schnelles Erkennen von Trends und Pain Points',
          en: 'Quick recognition of trends and pain points',
        },
      },
      coPilot: {
        title: {
          de: 'Persönlicher Business-Co-Pilot',
          en: 'Personal business co-pilot',
        },
        description: {
          de: 'Mit einem individuellen KI-Agenten an deiner Seite hast du rund um die Uhr einen Berater für Strategie, Texte, Entscheidungen und Analysen.',
          en: 'With an individual AI agent at your side, you have a consultant for strategy, texts, decisions and analyses around the clock.',
        },
        benefit: {
          de: 'Smarter Sparringspartner für deinen Business-Alltag',
          en: 'Smart sparring partner for your business everyday life',
        },
      },
    },
    customization: {
      title: {
        de: 'Und das Beste: Alles ist individuell anpassbar',
        en: 'And the best part: Everything is individually customizable',
      },
      description: {
        de: 'Diese Beispiele sind nur ein Einstieg. Gemeinsam entwickeln wir deine individuelle KI-Strategie – abgestimmt auf dein Unternehmen, deine Tools und deine Ziele.',
        en: 'These examples are just a starting point. Together we develop your individual AI strategy – tailored to your company, your tools and your goals.',
      },
    },
    cta: {
      title: {
        de: 'Lust auf eine Demo oder ein kostenloses Erstgespräch?',
        en: 'Interested in a demo or a free initial consultation?',
      },
      subtitle: {
        de: 'Dann jetzt Kontakt aufnehmen.',
        en: 'Then get in touch now.',
      },
      button: {
        de: 'Kontakt aufnehmen',
        en: 'Get in touch',
      },
    },
  },
  
  // Footer
  footer: {
    copyright: {
      de: '© 2025 Liberdade AI. Alle Rechte vorbehalten.',
      en: '© 2025 Liberdade AI. All rights reserved.',
    },
    privacy: {
      de: 'Datenschutz',
      en: 'Privacy Policy',
    },
    imprint: {
      de: 'Impressum',
      en: 'Imprint',
    },
  },
};

// Translation helper function
export const t = (key: string, language: Language): string => {
  const keys = key.split('.');
  let result: any = translations;
  
  for (const k of keys) {
    if (result[k] === undefined) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    result = result[k];
  }
  
  if (result[language] === undefined) {
    console.warn(`Translation for language ${language} not found for key: ${key}`);
    return key;
  }
  
  return result[language];
};
