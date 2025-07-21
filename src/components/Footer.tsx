import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-neutral text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-heading font-bold text-white group-hover:text-accent transition-colors duration-300">
                Selybi
              </span>
            </Link>
            <p className="text-sm text-white/70">
              {t('footer.tagline')}
            </p>
            <p className="text-sm text-white/60">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-accent transition-colors duration-300">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-accent transition-colors duration-300">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-accent transition-colors duration-300">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/showcase" className="text-white/70 hover:text-accent transition-colors duration-300">
                  {t('nav.showcase')}
                </Link>
              </li>
              <li>
                <Link to="/ai-lab" className="text-white/70 hover:text-accent transition-colors duration-300">
                  {t('nav.ailab')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-white/70 hover:text-accent transition-colors duration-300">
                  {t('services.softwareDev')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-accent transition-colors duration-300">
                  {t('services.cloudSolutions')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-accent transition-colors duration-300">
                  {t('services.aiIntegration')}
                </Link>
              </li>
              <li>
                <Link to="/journal" className="text-white/70 hover:text-accent transition-colors duration-300">
                  {t('nav.journal')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-accent transition-colors duration-300">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">{t('footer.connect')}</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2 text-white/70">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@selybi.com</span>
              </div>
              <div className="flex items-center space-x-2 text-white/70">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-white/70">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/50">
              © 2024 Selybi. {t('footer.rights')}
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/50 hover:text-accent transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-white/50 hover:text-accent transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-white/50 hover:text-accent transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;