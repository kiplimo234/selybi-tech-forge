import { Link } from 'react-router-dom';
import { ArrowRight, Code, Cloud, Brain, Sparkles, Globe, Zap } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Home = () => {
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
              Building Tomorrow.{' '}
              <span className="text-gradient bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                Today.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light leading-relaxed">
              Selybi transforms ideas into powerful digital solutions. 
              We craft cutting-edge software that shapes the future of technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link 
                to="/services" 
                className="btn btn-primary btn-lg btn-glow group px-8 py-4 text-lg font-semibold"
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link 
                to="/showcase" 
                className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
              >
                View Our Work
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">150+</div>
                <div className="text-white/80 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-white/80 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">5</div>
                <div className="text-white/80 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-white/80 text-sm">Support</div>
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
              What We Create
            </h2>
            <p className="text-xl text-neutral/70 max-w-2xl mx-auto">
              From concept to deployment, we deliver innovative solutions that drive business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="glass-card p-8 text-center card-hover group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-neutral mb-4">Software Development</h3>
              <p className="text-neutral/70 mb-6">
                Custom applications built with modern technologies and best practices.
              </p>
              <Link to="/services" className="text-primary font-semibold hover:text-secondary transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="glass-card p-8 text-center card-hover group">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-neutral mb-4">Cloud Solutions</h3>
              <p className="text-neutral/70 mb-6">
                Scalable cloud infrastructure and deployment strategies for modern applications.
              </p>
              <Link to="/services" className="text-primary font-semibold hover:text-secondary transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="glass-card p-8 text-center card-hover group">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-neutral mb-4">AI Integration</h3>
              <p className="text-neutral/70 mb-6">
                Intelligent automation and AI-powered features to enhance user experiences.
              </p>
              <Link to="/ai-lab" className="text-primary font-semibold hover:text-secondary transition-colors">
                Learn More →
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
              Why Choose Selybi
            </h2>
            <p className="text-xl text-neutral/70">
              We combine technical excellence with creative innovation to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-neutral mb-4">Innovation First</h3>
              <p className="text-neutral/70">
                We stay ahead of technology trends to deliver cutting-edge solutions.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-neutral mb-4">Global Reach</h3>
              <p className="text-neutral/70">
                Serving clients worldwide with 24/7 support and remote collaboration.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-neutral mb-4">Fast Delivery</h3>
              <p className="text-neutral/70">
                Agile development process ensuring rapid deployment and iteration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss your project and turn your vision into reality.
            </p>
            <Link 
              to="/contact" 
              className="btn btn-accent btn-lg btn-glow px-8 py-4 text-lg font-semibold"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;