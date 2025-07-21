import { useState } from 'react';
import { Code, Cloud, Smartphone, Globe, Brain, Shield, Database, Zap } from 'lucide-react';
import servicesImage from '@/assets/services-bg.jpg';

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailor-made applications built with cutting-edge technologies.',
      details: 'We create custom software solutions that perfectly align with your business needs. Our development process includes requirements analysis, architecture design, development, testing, and deployment.',
      technologies: ['React', 'Node.js', 'Python', 'TypeScript', 'Next.js'],
      projects: ['Enterprise CRM System', 'E-commerce Platform', 'Analytics Dashboard']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment strategies.',
      details: 'Transform your business with cloud-native solutions. We help you migrate to the cloud, optimize performance, and ensure scalability for future growth.',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
      projects: ['Cloud Migration', 'Microservices Architecture', 'Auto-scaling Systems']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications.',
      details: 'Create engaging mobile experiences that reach your users wherever they are. We develop both native and cross-platform applications with superior performance.',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic'],
      projects: ['Social Media App', 'E-commerce Mobile App', 'Fitness Tracking App']
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern web applications with exceptional user experiences.',
      details: 'Build responsive, fast, and user-friendly web applications that work seamlessly across all devices and browsers.',
      technologies: ['React', 'Vue.js', 'Angular', 'Svelte', 'WordPress'],
      projects: ['Corporate Website', 'SaaS Platform', 'Portfolio Website']
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Intelligent automation and machine learning solutions.',
      details: 'Leverage the power of artificial intelligence to automate processes, gain insights, and enhance user experiences with smart features.',
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI API', 'Hugging Face', 'LangChain'],
      projects: ['Chatbot Development', 'Predictive Analytics', 'Image Recognition']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions for digital assets.',
      details: 'Protect your digital assets with robust security measures, including penetration testing, security audits, and implementation of best practices.',
      technologies: ['OAuth', 'JWT', 'SSL/TLS', 'WAF', 'SIEM'],
      projects: ['Security Audit', 'Compliance Framework', 'Identity Management']
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Data pipelines, analytics, and business intelligence.',
      details: 'Transform raw data into actionable insights with robust data pipelines, analytics platforms, and business intelligence solutions.',
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Apache Kafka', 'Elasticsearch'],
      projects: ['Data Warehouse', 'Real-time Analytics', 'ETL Pipeline']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Speed up applications and improve user experience.',
      details: 'Optimize your applications for maximum performance, faster load times, and improved user satisfaction through advanced optimization techniques.',
      technologies: ['CDN', 'Caching', 'Load Balancing', 'Code Splitting', 'Monitoring'],
      projects: ['Website Optimization', 'Database Tuning', 'API Performance']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/5"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.8), rgba(0, 164, 204, 0.6)), url(${servicesImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-black text-white mb-6">
              The Digital{' '}
              <span className="text-gradient bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                Arsenal
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Comprehensive software development services to power your digital transformation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-card p-6 card-hover cursor-pointer group"
                onClick={() => setSelectedService(index)}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-neutral mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral/70 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="text-primary font-semibold group-hover:text-secondary transition-colors">
                  Learn More →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService !== null && (
        <div className="modal modal-open">
          <div className="modal-box max-w-4xl glass-card">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => setSelectedService(null)}
            >
              ✕
            </button>
            
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mr-4">
                {services[selectedService] && (() => {
                  const IconComponent = services[selectedService].icon;
                  return <IconComponent className="w-8 h-8 text-white" />;
                })()}
              </div>
              <h3 className="text-2xl font-heading font-bold text-neutral">
                {services[selectedService]?.title}
              </h3>
            </div>

            <p className="text-lg text-neutral/70 mb-8 leading-relaxed">
              {services[selectedService]?.details}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-neutral mb-4">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {services[selectedService]?.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="badge badge-primary badge-outline"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-neutral mb-4">Sample Projects:</h4>
                <ul className="space-y-2">
                  {services[selectedService]?.projects.map((project, index) => (
                    <li key={index} className="flex items-center text-neutral/70">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {project}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button className="btn btn-primary btn-lg">
                Get Started with This Service
              </button>
            </div>
          </div>
          <div className="modal-backdrop" onClick={() => setSelectedService(null)}></div>
        </div>
      )}

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-neutral/70 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your vision, requirements, and goals.' },
              { step: '02', title: 'Planning', description: 'Creating detailed project roadmap and timeline.' },
              { step: '03', title: 'Development', description: 'Building your solution with regular updates.' },
              { step: '04', title: 'Deployment', description: 'Launching and providing ongoing support.' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{phase.step}</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-neutral mb-4">{phase.title}</h3>
                <p className="text-neutral/70">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how our services can transform your business ideas into reality.
            </p>
            <button className="btn btn-accent btn-lg btn-glow px-8 py-4 text-lg font-semibold">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;