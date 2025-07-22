import { Brain } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import heroBg from '@/assets/ailab-hero-bg.jpg';

const AILab = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.8), rgba(0, 164, 204, 0.6)), url(${heroBg})`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-black text-white mb-6">
              {t('ailab.title')}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {t('ailab.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-8">
              <Brain className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl font-heading font-bold text-neutral mb-6">
              {t('ailab.comingSoon')}
            </h2>
            <p className="text-lg text-neutral/70 mb-8 leading-relaxed">
              {t('ailab.description')}
            </p>
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold text-neutral mb-4">Coming Soon:</h3>
              <ul className="space-y-3 text-neutral/70">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Interactive AI Chat Demonstrations
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Code Generation and Analysis Tools
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Machine Learning Model Showcases
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Research and Development Blog
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AILab;