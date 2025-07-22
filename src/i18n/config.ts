import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        showcase: 'Showcase',
        ailab: 'AI Lab',
        journal: 'Journal',
        contact: 'Contact'
      },
      hero: {
        title: 'Building Tomorrow.',
        titleAccent: 'Today.',
        subtitle: 'We are Selybi, a cutting-edge software development company that transforms ideas into digital excellence.',
        exploreServices: 'Explore Services',
        viewWork: 'View Our Work',
        projectsDelivered: 'Projects Delivered',
        happyClients: 'Happy Clients',
        yearsExperience: 'Years Experience',
        support: 'Support'
      },
      services: {
        title: 'Our Services',
        subtitle: 'The Digital Arsenal',
        web: {
          title: 'Web Development',
          description: 'Custom web applications built with modern technologies'
        },
        mobile: {
          title: 'Mobile Apps',
          description: 'Native and cross-platform mobile solutions'
        },
        ai: {
          title: 'AI Solutions',
          description: 'Intelligent systems and machine learning integration'
        },
        cloud: {
          title: 'Cloud Services',
          description: 'Scalable cloud infrastructure and deployment'
        },
        ui: {
          title: 'UI/UX Design',
          description: 'Beautiful and intuitive user experiences'
        },
        consulting: {
          title: 'Tech Consulting',
          description: 'Strategic technology guidance and architecture'
        }
      },
      showcase: {
        title: 'Our Showcase',
        subtitle: 'Experience the Selybi Impact',
        filter: {
          all: 'All Projects',
          web: 'Web Apps',
          mobile: 'Mobile',
          ai: 'AI/ML'
        }
      },
      about: {
        title: 'About Selybi',
        subtitle: 'The Soul of Innovation',
        story: 'Our Story',
        mission: 'Our Mission',
        vision: 'Our Vision',
        values: 'Our Values',
        team: 'Our Team'
      },
      contact: {
        title: 'Contact Us',
        subtitle: "Let's Build Something Extraordinary",
        name: 'Your Name',
        email: 'Email Address',
        company: 'Company (Optional)',
        project: 'Project Type',
        budget: 'Budget Range',
        message: 'Tell us about your project',
        send: 'Send Message',
        success: 'Message sent successfully!'
      },
      journal: {
        title: 'Journal',
        subtitle: 'Insights and Perspectives',
        search: 'Search articles...',
        categories: 'Categories',
        recent: 'Recent Posts',
        readMore: 'Read More'
      },
      ailab: {
        title: 'AI Lab',
        subtitle: 'Innovation in Motion',
        experiments: 'Live Experiments',
        tools: 'AI Tools',
        research: 'Research & Development'
      },
      footer: {
        company: 'Company',
        services: 'Services',
        resources: 'Resources',
        legal: 'Legal',
        newsletter: 'Subscribe to our newsletter',
        email: 'Enter your email',
        subscribe: 'Subscribe',
        rights: 'All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        cookies: 'Cookie Policy'
      },
      chat: {
        title: 'Need Help?',
        placeholder: 'Type your message...',
        send: 'Send',
        greeting: 'Hello! How can I help you today?'
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        about: 'Acerca de',
        services: 'Servicios',
        showcase: 'Portafolio',
        ailab: 'Laboratorio IA',
        journal: 'Blog',
        contact: 'Contacto'
      },
      hero: {
        title: 'Construyendo el Mañana.',
        subtitle: 'Hoy.',
        description: 'Somos Selybi, una empresa de desarrollo de software de vanguardia que transforma ideas en excelencia digital.',
        cta: 'Iniciar Proyecto',
        learn: 'Saber Más'
      },
      services: {
        title: 'Nuestros Servicios',
        subtitle: 'El Arsenal Digital',
        web: {
          title: 'Desarrollo Web',
          description: 'Aplicaciones web personalizadas con tecnologías modernas'
        },
        mobile: {
          title: 'Apps Móviles',
          description: 'Soluciones móviles nativas y multiplataforma'
        },
        ai: {
          title: 'Soluciones IA',
          description: 'Sistemas inteligentes e integración de aprendizaje automático'
        },
        cloud: {
          title: 'Servicios en la Nube',
          description: 'Infraestructura cloud escalable y despliegue'
        },
        ui: {
          title: 'Diseño UI/UX',
          description: 'Experiencias de usuario hermosas e intuitivas'
        },
        consulting: {
          title: 'Consultoría Tech',
          description: 'Orientación estratégica tecnológica y arquitectura'
        }
      },
      showcase: {
        title: 'Nuestro Portafolio',
        subtitle: 'Experimenta el Impacto Selybi',
        filter: {
          all: 'Todos los Proyectos',
          web: 'Apps Web',
          mobile: 'Móvil',
          ai: 'IA/ML'
        }
      },
      about: {
        title: 'Acerca de Selybi',
        subtitle: 'El Alma de la Innovación',
        story: 'Nuestra Historia',
        mission: 'Nuestra Misión',
        vision: 'Nuestra Visión',
        values: 'Nuestros Valores',
        team: 'Nuestro Equipo'
      },
      contact: {
        title: 'Contáctanos',
        subtitle: 'Construyamos Algo Extraordinario',
        name: 'Tu Nombre',
        email: 'Dirección de Email',
        company: 'Empresa (Opcional)',
        project: 'Tipo de Proyecto',
        budget: 'Rango de Presupuesto',
        message: 'Cuéntanos sobre tu proyecto',
        send: 'Enviar Mensaje',
        success: '¡Mensaje enviado exitosamente!'
      },
      journal: {
        title: 'Blog',
        subtitle: 'Ideas y Perspectivas',
        search: 'Buscar artículos...',
        categories: 'Categorías',
        recent: 'Posts Recientes',
        readMore: 'Leer Más'
      },
      ailab: {
        title: 'Laboratorio IA',
        subtitle: 'Innovación en Movimiento',
        experiments: 'Experimentos en Vivo',
        tools: 'Herramientas IA',
        research: 'Investigación y Desarrollo'
      },
      footer: {
        company: 'Empresa',
        services: 'Servicios',
        resources: 'Recursos',
        legal: 'Legal',
        newsletter: 'Suscríbete a nuestro boletín',
        email: 'Ingresa tu email',
        subscribe: 'Suscribirse',
        rights: 'Todos los derechos reservados.',
        privacy: 'Política de Privacidad',
        terms: 'Términos de Servicio',
        cookies: 'Política de Cookies'
      },
      chat: {
        title: '¿Necesitas Ayuda?',
        placeholder: 'Escribe tu mensaje...',
        send: 'Enviar',
        greeting: '¡Hola! ¿Cómo puedo ayudarte hoy?'
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        about: 'À Propos',
        services: 'Services',
        showcase: 'Portfolio',
        ailab: 'Labo IA',
        journal: 'Blog',
        contact: 'Contact'
      },
      hero: {
        title: 'Construire Demain.',
        subtitle: "Aujourd'hui.",
        description: 'Nous sommes Selybi, une entreprise de développement logiciel de pointe qui transforme les idées en excellence numérique.',
        cta: 'Démarrer Votre Projet',
        learn: 'En Savoir Plus'
      },
      services: {
        title: 'Nos Services',
        subtitle: "L'Arsenal Numérique",
        web: {
          title: 'Développement Web',
          description: 'Applications web personnalisées avec des technologies modernes'
        },
        mobile: {
          title: 'Apps Mobiles',
          description: 'Solutions mobiles natives et multiplateformes'
        },
        ai: {
          title: 'Solutions IA',
          description: "Systèmes intelligents et intégration d'apprentissage automatique"
        },
        cloud: {
          title: 'Services Cloud',
          description: 'Infrastructure cloud évolutive et déploiement'
        },
        ui: {
          title: 'Design UI/UX',
          description: "Expériences utilisateur belles et intuitives"
        },
        consulting: {
          title: 'Conseil Tech',
          description: 'Orientation stratégique technologique et architecture'
        }
      },
      showcase: {
        title: 'Notre Portfolio',
        subtitle: "Découvrez l'Impact Selybi",
        filter: {
          all: 'Tous les Projets',
          web: 'Apps Web',
          mobile: 'Mobile',
          ai: 'IA/ML'
        }
      },
      about: {
        title: 'À Propos de Selybi',
        subtitle: "L'Âme de l'Innovation",
        story: 'Notre Histoire',
        mission: 'Notre Mission',
        vision: 'Notre Vision',
        values: 'Nos Valeurs',
        team: 'Notre Équipe'
      },
      contact: {
        title: 'Contactez-nous',
        subtitle: 'Construisons Quelque Chose d\'Extraordinaire',
        name: 'Votre Nom',
        email: 'Adresse Email',
        company: 'Entreprise (Optionnel)',
        project: 'Type de Projet',
        budget: 'Fourchette de Budget',
        message: 'Parlez-nous de votre projet',
        send: 'Envoyer le Message',
        success: 'Message envoyé avec succès!'
      },
      journal: {
        title: 'Blog',
        subtitle: 'Idées et Perspectives',
        search: 'Rechercher des articles...',
        categories: 'Catégories',
        recent: 'Posts Récents',
        readMore: 'Lire Plus'
      },
      ailab: {
        title: 'Labo IA',
        subtitle: 'Innovation en Mouvement',
        experiments: 'Expériences en Direct',
        tools: 'Outils IA',
        research: 'Recherche et Développement'
      },
      footer: {
        company: 'Entreprise',
        services: 'Services',
        resources: 'Ressources',
        legal: 'Légal',
        newsletter: 'Abonnez-vous à notre newsletter',
        email: 'Entrez votre email',
        subscribe: "S'abonner",
        rights: 'Tous droits réservés.',
        privacy: 'Politique de Confidentialité',
        terms: 'Conditions de Service',
        cookies: 'Politique de Cookies'
      },
      chat: {
        title: "Besoin d'Aide?",
        placeholder: 'Tapez votre message...',
        send: 'Envoyer',
        greeting: 'Bonjour! Comment puis-je vous aider aujourd\'hui?'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;