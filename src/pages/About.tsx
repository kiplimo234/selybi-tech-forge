import { Users, Target, Eye, Heart, Award, Lightbulb } from 'lucide-react';
import teamImage from '@/assets/about-team.jpg';

const About = () => {
  const timeline = [
    {
      year: '2019',
      title: 'Founded',
      description: 'Selybi was born from a vision to revolutionize software development.'
    },
    {
      year: '2020',
      title: 'First Major Client',
      description: 'Delivered our first enterprise-level solution, setting the standard for quality.'
    },
    {
      year: '2021',
      title: 'Team Expansion',
      description: 'Grew to 15+ talented developers and designers across multiple disciplines.'
    },
    {
      year: '2022',
      title: 'AI Integration',
      description: 'Launched our AI Lab division, pioneering intelligent software solutions.'
    },
    {
      year: '2023',
      title: 'Global Reach',
      description: 'Expanded internationally, serving clients across 25+ countries.'
    },
    {
      year: '2024',
      title: 'Innovation Leader',
      description: 'Recognized as a top software development company in emerging technologies.'
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Every project is driven by our genuine enthusiasm for creating exceptional software.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe the best solutions come from close partnerships with our clients.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Quality is never an accident. It\'s the result of intelligent effort and attention to detail.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-black text-neutral mb-6">
              The Soul of{' '}
              <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Selybi
              </span>
            </h1>
            <p className="text-xl text-neutral/70 leading-relaxed">
              We're more than a software company. We're architects of digital transformation, 
              craftspeople of code, and partners in your success story.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <img 
                src={teamImage} 
                alt="Selybi Team" 
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
            
            <div className="space-y-8">
              <div className="glass-card p-8">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-heading font-bold text-neutral">Our Mission</h3>
                </div>
                <p className="text-neutral/70 leading-relaxed">
                  To empower businesses through innovative software solutions that drive growth, 
                  efficiency, and digital transformation. We bridge the gap between complex 
                  technology and real-world business needs.
                </p>
              </div>

              <div className="glass-card p-8">
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-2xl font-heading font-bold text-neutral">Our Vision</h3>
                </div>
                <p className="text-neutral/70 leading-relaxed">
                  To be the leading force in shaping the future of software development, 
                  where innovation meets practicality, and where every line of code 
                  contributes to a better digital world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-neutral/70 max-w-2xl mx-auto">
              From a small startup to a global software development powerhouse.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 w-1 bg-gradient-to-b from-primary to-accent h-full"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="glass-card p-6 card-hover">
                      <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                      <h3 className="text-xl font-heading font-bold text-neutral mb-2">{item.title}</h3>
                      <p className="text-neutral/70">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-base-100 shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-neutral/70 max-w-2xl mx-auto">
              The principles that guide every decision and drive our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-neutral mb-4">{value.title}</h3>
                <p className="text-neutral/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card p-12 bg-white/10 backdrop-blur-sm">
              <blockquote className="text-2xl md:text-3xl font-light text-white mb-8 leading-relaxed italic">
                "At Selybi, we don't just write code – we craft digital experiences that transform 
                businesses and improve lives. Every project is an opportunity to push the boundaries 
                of what's possible in software development."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">A</span>
                </div>
                <div className="text-left">
                  <div className="text-xl font-semibold text-white">Alex Rivera</div>
                  <div className="text-white/80">Founder & CEO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div className="group">
              <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">150+</div>
              <div className="text-neutral/70">Projects Completed</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform">50+</div>
              <div className="text-neutral/70">Happy Clients</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">25+</div>
              <div className="text-neutral/70">Countries Served</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">5</div>
              <div className="text-neutral/70">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;