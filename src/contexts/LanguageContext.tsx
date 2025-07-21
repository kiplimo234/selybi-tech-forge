import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'EN' | 'ES' | 'FR';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  EN: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.showcase': 'Showcase',
    'nav.ailab': 'AI Lab',
    'nav.journal': 'Journal',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Building Tomorrow.',
    'hero.titleAccent': 'Today.',
    'hero.subtitle': 'Selybi transforms ideas into powerful digital solutions. We craft cutting-edge software that shapes the future of technology.',
    'hero.exploreServices': 'Explore Our Services',
    'hero.viewWork': 'View Our Work',
    'hero.projectsDelivered': 'Projects Delivered',
    'hero.happyClients': 'Happy Clients',
    'hero.yearsExperience': 'Years Experience',
    'hero.support': 'Support',
    
    // Services Preview
    'services.whatWeCreate': 'What We Create',
    'services.subtitle': 'From concept to deployment, we deliver innovative solutions that drive business growth.',
    'services.softwareDev': 'Software Development',
    'services.softwareDesc': 'Custom applications built with modern technologies and best practices.',
    'services.cloudSolutions': 'Cloud Solutions',
    'services.cloudDesc': 'Scalable cloud infrastructure and deployment strategies for modern applications.',
    'services.aiIntegration': 'AI Integration',
    'services.aiDesc': 'Intelligent automation and AI-powered features to enhance user experiences.',
    'services.learnMore': 'Learn More →',
    
    // Why Choose Section
    'why.title': 'Why Choose Selybi',
    'why.subtitle': 'We combine technical excellence with creative innovation to deliver exceptional results.',
    'why.innovation': 'Innovation First',
    'why.innovationDesc': 'We stay ahead of technology trends to deliver cutting-edge solutions.',
    'why.global': 'Global Reach',
    'why.globalDesc': 'Serving clients worldwide with 24/7 support and remote collaboration.',
    'why.fast': 'Fast Delivery',
    'why.fastDesc': 'Agile development process ensuring rapid deployment and iteration.',
    
    // CTA Section
    'cta.title': 'Ready to Build Something Amazing?',
    'cta.subtitle': "Let's discuss your project and turn your vision into reality.",
    'cta.startProject': 'Start Your Project',
    
    // Footer
    'footer.tagline': 'Building Tomorrow. Today.',
    'footer.description': 'Selybi is a cutting-edge software development company dedicated to creating innovative digital solutions.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.connect': 'Connect',
    'footer.rights': 'All rights reserved.',
    
    // Chat
    'chat.title': 'Need Help?',
    'chat.subtitle': 'Chat with our team',
    'chat.placeholder': 'Type your message...',
    'chat.send': 'Send',
    'chat.close': 'Close',
    
    // Journal
    'journal.title': 'Insights &',
    'journal.titleAccent': 'Perspectives',
    'journal.subtitle': 'Dive into our thoughts on technology, development, and the future of digital innovation.',
    'journal.storiesProgress': 'Stories in Progress',
    'journal.crafting': 'Our journal is being carefully crafted to bring you the most valuable insights from the world of software development and technology innovation.',
    'journal.expect': 'What to Expect:',
    'journal.tutorials': 'Technical Deep Dives and Tutorials',
    'journal.trends': 'Industry Trends and Analysis',
    'journal.caseStudies': 'Case Studies and Project Stories',
    'journal.insights': 'Team Insights and Development Tips'
  },
  ES: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Acerca',
    'nav.services': 'Servicios',
    'nav.showcase': 'Portafolio',
    'nav.ailab': 'Laboratorio IA',
    'nav.journal': 'Diario',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'Construyendo el Mañana.',
    'hero.titleAccent': 'Hoy.',
    'hero.subtitle': 'Selybi transforma ideas en poderosas soluciones digitales. Creamos software de vanguardia que da forma al futuro de la tecnología.',
    'hero.exploreServices': 'Explorar Servicios',
    'hero.viewWork': 'Ver Nuestro Trabajo',
    'hero.projectsDelivered': 'Proyectos Entregados',
    'hero.happyClients': 'Clientes Satisfechos',
    'hero.yearsExperience': 'Años de Experiencia',
    'hero.support': 'Soporte',
    
    // Services Preview
    'services.whatWeCreate': 'Lo Que Creamos',
    'services.subtitle': 'Desde el concepto hasta el despliegue, entregamos soluciones innovadoras que impulsan el crecimiento empresarial.',
    'services.softwareDev': 'Desarrollo de Software',
    'services.softwareDesc': 'Aplicaciones personalizadas construidas con tecnologías modernas y mejores prácticas.',
    'services.cloudSolutions': 'Soluciones en la Nube',
    'services.cloudDesc': 'Infraestructura escalable en la nube y estrategias de despliegue para aplicaciones modernas.',
    'services.aiIntegration': 'Integración de IA',
    'services.aiDesc': 'Automatización inteligente y características impulsadas por IA para mejorar las experiencias de usuario.',
    'services.learnMore': 'Saber Más →',
    
    // Why Choose Section
    'why.title': 'Por Qué Elegir Selybi',
    'why.subtitle': 'Combinamos excelencia técnica con innovación creativa para entregar resultados excepcionales.',
    'why.innovation': 'Innovación Primero',
    'why.innovationDesc': 'Nos mantenemos a la vanguardia de las tendencias tecnológicas para entregar soluciones de vanguardia.',
    'why.global': 'Alcance Global',
    'why.globalDesc': 'Sirviendo clientes en todo el mundo con soporte 24/7 y colaboración remota.',
    'why.fast': 'Entrega Rápida',
    'why.fastDesc': 'Proceso de desarrollo ágil que asegura despliegue e iteración rápidos.',
    
    // CTA Section
    'cta.title': '¿Listo para Construir Algo Increíble?',
    'cta.subtitle': 'Hablemos de tu proyecto y convirtamos tu visión en realidad.',
    'cta.startProject': 'Iniciar Tu Proyecto',
    
    // Footer
    'footer.tagline': 'Construyendo el Mañana. Hoy.',
    'footer.description': 'Selybi es una empresa de desarrollo de software de vanguardia dedicada a crear soluciones digitales innovadoras.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.services': 'Servicios',
    'footer.connect': 'Conectar',
    'footer.rights': 'Todos los derechos reservados.',
    
    // Chat
    'chat.title': '¿Necesitas Ayuda?',
    'chat.subtitle': 'Chatea con nuestro equipo',
    'chat.placeholder': 'Escribe tu mensaje...',
    'chat.send': 'Enviar',
    'chat.close': 'Cerrar',
    
    // Journal
    'journal.title': 'Perspectivas e',
    'journal.titleAccent': 'Insights',
    'journal.subtitle': 'Sumérgete en nuestros pensamientos sobre tecnología, desarrollo y el futuro de la innovación digital.',
    'journal.storiesProgress': 'Historias en Progreso',
    'journal.crafting': 'Nuestro diario está siendo cuidadosamente elaborado para traerte los insights más valiosos del mundo del desarrollo de software e innovación tecnológica.',
    'journal.expect': 'Qué Esperar:',
    'journal.tutorials': 'Análisis Técnicos Profundos y Tutoriales',
    'journal.trends': 'Tendencias de la Industria y Análisis',
    'journal.caseStudies': 'Estudios de Caso e Historias de Proyectos',
    'journal.insights': 'Insights del Equipo y Consejos de Desarrollo'
  },
  FR: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.services': 'Services',
    'nav.showcase': 'Portfolio',
    'nav.ailab': 'Labo IA',
    'nav.journal': 'Journal',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Construire Demain.',
    'hero.titleAccent': "Aujourd'hui.",
    'hero.subtitle': 'Selybi transforme les idées en solutions numériques puissantes. Nous créons des logiciels de pointe qui façonnent l\'avenir de la technologie.',
    'hero.exploreServices': 'Explorer Nos Services',
    'hero.viewWork': 'Voir Notre Travail',
    'hero.projectsDelivered': 'Projets Livrés',
    'hero.happyClients': 'Clients Satisfaits',
    'hero.yearsExperience': "Années d'Expérience",
    'hero.support': 'Support',
    
    // Services Preview
    'services.whatWeCreate': 'Ce Que Nous Créons',
    'services.subtitle': 'Du concept au déploiement, nous livrons des solutions innovantes qui stimulent la croissance des entreprises.',
    'services.softwareDev': 'Développement Logiciel',
    'services.softwareDesc': 'Applications personnalisées construites avec des technologies modernes et les meilleures pratiques.',
    'services.cloudSolutions': 'Solutions Cloud',
    'services.cloudDesc': 'Infrastructure cloud évolutive et stratégies de déploiement pour applications modernes.',
    'services.aiIntegration': 'Intégration IA',
    'services.aiDesc': 'Automatisation intelligente et fonctionnalités alimentées par IA pour améliorer les expériences utilisateur.',
    'services.learnMore': 'En Savoir Plus →',
    
    // Why Choose Section
    'why.title': 'Pourquoi Choisir Selybi',
    'why.subtitle': 'Nous combinons excellence technique et innovation créative pour livrer des résultats exceptionnels.',
    'why.innovation': "Innovation d'Abord",
    'why.innovationDesc': 'Nous restons en avance sur les tendances technologiques pour livrer des solutions de pointe.',
    'why.global': 'Portée Mondiale',
    'why.globalDesc': 'Servir des clients dans le monde entier avec un support 24/7 et une collaboration à distance.',
    'why.fast': 'Livraison Rapide',
    'why.fastDesc': 'Processus de développement agile assurant un déploiement et une itération rapides.',
    
    // CTA Section
    'cta.title': 'Prêt à Construire Quelque Chose d\'Incroyable?',
    'cta.subtitle': 'Discutons de votre projet et transformons votre vision en réalité.',
    'cta.startProject': 'Démarrer Votre Projet',
    
    // Footer
    'footer.tagline': 'Construire Demain. Aujourd\'hui.',
    'footer.description': 'Selybi est une entreprise de développement logiciel de pointe dédiée à la création de solutions numériques innovantes.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.services': 'Services',
    'footer.connect': 'Se Connecter',
    'footer.rights': 'Tous droits réservés.',
    
    // Chat
    'chat.title': 'Besoin d\'Aide?',
    'chat.subtitle': 'Chattez avec notre équipe',
    'chat.placeholder': 'Tapez votre message...',
    'chat.send': 'Envoyer',
    'chat.close': 'Fermer',
    
    // Journal
    'journal.title': 'Insights &',
    'journal.titleAccent': 'Perspectives',
    'journal.subtitle': 'Plongez dans nos réflexions sur la technologie, le développement et l\'avenir de l\'innovation numérique.',
    'journal.storiesProgress': 'Histoires en Cours',
    'journal.crafting': 'Notre journal est soigneusement élaboré pour vous apporter les insights les plus précieux du monde du développement logiciel et de l\'innovation technologique.',
    'journal.expect': 'À Quoi S\'Attendre:',
    'journal.tutorials': 'Analyses Techniques Approfondies et Tutoriels',
    'journal.trends': 'Tendances de l\'Industrie et Analyses',
    'journal.caseStudies': 'Études de Cas et Histoires de Projets',
    'journal.insights': 'Insights d\'Équipe et Conseils de Développement'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem('selybi-language');
    return (stored as Language) || 'EN';
  });

  useEffect(() => {
    localStorage.setItem('selybi-language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const value = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};