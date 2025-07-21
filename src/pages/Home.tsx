import { Link } from 'react-router-dom';
import { ArrowRight, Code, Cloud, Brain, Sparkles, Globe, Zap, Star, Users, Trophy, Award } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const Home = () => {
  const { t } = useLanguage();
  
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.8), rgba(0, 164, 204, 0.6)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/10 rounded-full float"></div>
          <div className="absolute bottom-20 left-20 w-16 h-16 bg-primary/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 right-10 w-24 h-24 bg-accent/10 rounded-full float"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-6 leading-tight">
              {t('hero.title')}{' '}
              <span className="text-gradient bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                {t('hero.titleAccent')}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light leading-relaxed">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link 
                to="/services" 
                className="btn btn-primary btn-lg btn-glow group px-8 py-4 text-lg font-semibold"
              >
                {t('hero.exploreServices')}
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link 
                to="/showcase" 
                className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
              >
                {t('hero.viewWork')}
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">150+</div>
                <div className="text-white/80 text-sm">{t('hero.projectsDelivered')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-white/80 text-sm">{t('hero.happyClients')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">5</div>
                <div className="text-white/80 text-sm">{t('hero.yearsExperience')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-white/80 text-sm">{t('hero.support')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral mb-4">
              {t('services.whatWeCreate')}
            </h2>
            <p className="text-xl text-neutral/70 max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="glass-card p-8 text-center card-hover group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-neutral mb-4">{t('services.softwareDev')}</h3>
              <p className="text-neutral/70 mb-6">
                {t('services.softwareDesc')}
              </p>
              <Link to="/services" className="text-primary font-semibold hover:text-secondary transition-colors">
                {t('services.learnMore')}
              </Link>
            </div>

            <div className="glass-card p-8 text-center card-hover group">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-neutral mb-4">{t('services.cloudSolutions')}</h3>
              <p className="text-neutral/70 mb-6">
                {t('services.cloudDesc')}
              </p>
              <Link to="/services" className="text-primary font-semibold hover:text-secondary transition-colors">
                {t('services.learnMore')}
              </Link>
            </div>

            <div className="glass-card p-8 text-center card-hover group">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-neutral mb-4">{t('services.aiIntegration')}</h3>
              <p className="text-neutral/70 mb-6">
                {t('services.aiDesc')}
              </p>
              <Link to="/ai-lab" className="text-primary font-semibold hover:text-secondary transition-colors">
                {t('services.learnMore')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Selybi */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral mb-4">
              {t('why.title')}
            </h2>
            <p className="text-xl text-neutral/70">
              {t('why.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-neutral mb-4">{t('why.innovation')}</h3>
              <p className="text-neutral/70">
                {t('why.innovationDesc')}
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-neutral mb-4">{t('why.global')}</h3>
              <p className="text-neutral/70">
                {t('why.globalDesc')}
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-neutral mb-4">{t('why.fast')}</h3>
              <p className="text-neutral/70">
                {t('why.fastDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-neutral/70 max-w-2xl mx-auto">
              See what our clients say about working with Selybi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="glass-card p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>
              <p className="text-neutral/70 mb-6 italic">
                "Selybi transformed our digital presence completely. Their team delivered beyond our expectations with incredible attention to detail."
              </p>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-neutral">Sarah Johnson</div>
                  <div className="text-sm text-neutral/60">CEO, TechStart Inc.</div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>
              <p className="text-neutral/70 mb-6 italic">
                "The AI integration they built for us increased our efficiency by 300%. Absolutely remarkable work and ongoing support."
              </p>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-neutral">Michael Chen</div>
                  <div className="text-sm text-neutral/60">CTO, DataFlow Solutions</div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>
              <p className="text-neutral/70 mb-6 italic">
                "Professional, innovative, and reliable. Selybi helped us scale our platform to serve millions of users seamlessly."
              </p>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-neutral">Emma Rodriguez</div>
                  <div className="text-sm text-neutral/60">Founder, ScaleUp Labs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {t('cta.subtitle')}
            </p>
            <Link 
              to="/contact" 
              className="btn btn-accent btn-lg btn-glow px-8 py-4 text-lg font-semibold"
            >
              {t('cta.startProject')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;