import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Settings, Globe, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import FontModal from './FontModal';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showFontModal, setShowFontModal] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.showcase'), path: '/showcase' },
    { name: t('nav.ailab'), path: '/ai-lab' },
    { name: t('nav.journal'), path: '/journal' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-base-100/95 backdrop-blur-sm border-b border-base-200 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-heading font-bold text-neutral group-hover:text-primary transition-colors duration-300">
                Selybi
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium transition-all duration-300 relative group ${
                    isActive(item.path)
                      ? 'text-primary'
                      : 'text-neutral hover:text-primary'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transform transition-all duration-300 ${
                    isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Font Settings */}
              <button
                onClick={() => setShowFontModal(true)}
                className="p-2 text-neutral hover:text-primary transition-colors duration-300"
                title="Font Settings"
              >
                <Settings className="w-5 h-5" />
              </button>

              {/* Language Selector */}
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-sm flex items-center space-x-1">
                  <Globe className="w-4 h-4" />
                  <span>{i18n.language.toUpperCase()}</span>
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-24">
                  <li><a onClick={() => i18n.changeLanguage('en')}>EN</a></li>
                  <li><a onClick={() => i18n.changeLanguage('es')}>ES</a></li>
                  <li><a onClick={() => i18n.changeLanguage('fr')}>FR</a></li>
                </ul>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-neutral hover:text-primary transition-colors duration-300"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-base-100/95 backdrop-blur-sm border-t border-base-200">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-medium py-2 transition-colors duration-300 ${
                      isActive(item.path)
                        ? 'text-primary border-l-2 border-primary pl-4'
                        : 'text-neutral hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Font Modal */}
      <FontModal isOpen={showFontModal} onClose={() => setShowFontModal(false)} />
    </>
  );
};

export default Navbar;