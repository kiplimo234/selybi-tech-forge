import { useState } from 'react';
import { ExternalLink, Heart, Star, Filter, Code, Globe, Smartphone } from 'lucide-react';

const Showcase = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [favorites, setFavorites] = useState<number[]>([]);

  const projects = [
    {
      id: 1,
      title: 'EcoTrade Platform',
      category: 'web',
      description: 'A sustainable trading platform connecting eco-friendly businesses worldwide.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      industry: 'E-commerce',
      year: '2024',
      url: '#'
    },
    {
      id: 2,
      title: 'HealthSync Mobile',
      category: 'mobile',
      description: 'Healthcare management app for patients and medical professionals.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
      technologies: ['React Native', 'Firebase', 'TypeScript'],
      industry: 'Healthcare',
      year: '2024',
      url: '#'
    },
    {
      id: 3,
      title: 'AI Content Generator',
      category: 'ai',
      description: 'Intelligent content creation tool powered by advanced AI algorithms.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      technologies: ['Python', 'OpenAI API', 'React', 'Docker'],
      industry: 'Content Creation',
      year: '2023',
      url: '#'
    },
    {
      id: 4,
      title: 'FinTech Dashboard',
      category: 'web',
      description: 'Comprehensive financial analytics and trading dashboard.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      technologies: ['Vue.js', 'Python', 'Redis', 'Chart.js'],
      industry: 'Finance',
      year: '2023',
      url: '#'
    },
    {
      id: 5,
      title: 'Smart IoT Hub',
      category: 'iot',
      description: 'Centralized control system for smart home and office devices.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'MQTT', 'MongoDB'],
      industry: 'IoT',
      year: '2023',
      url: '#'
    },
    {
      id: 6,
      title: 'Learning Platform',
      category: 'web',
      description: 'Interactive online learning platform with AI-powered recommendations.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
      technologies: ['React', 'GraphQL', 'Node.js', 'ML'],
      industry: 'Education',
      year: '2022',
      url: '#'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: Globe },
    { key: 'web', label: 'Web Apps', icon: Globe },
    { key: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { key: 'ai', label: 'AI Solutions', icon: Star },
    { key: 'iot', label: 'IoT Systems', icon: Code }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const toggleFavorite = (projectId: number) => {
    setFavorites(prev => 
      prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-black text-neutral mb-6">
              Experience the{' '}
              <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Selybi Impact
              </span>
            </h1>
            <p className="text-xl text-neutral/70 leading-relaxed mb-8">
              Discover our portfolio of innovative solutions that have transformed businesses across industries.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">150+</div>
                <div className="text-neutral/70 text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-1">25+</div>
                <div className="text-neutral/70 text-sm">Industries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">98%</div>
                <div className="text-neutral/70 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-neutral/70 text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-base-100 sticky top-16 z-40 border-b border-base-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setSelectedFilter(filter.key)}
                className={`btn btn-sm ${
                  selectedFilter === filter.key
                    ? 'btn-primary'
                    : 'btn-ghost'
                } flex items-center gap-2`}
              >
                <filter.icon className="w-4 h-4" />
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-card overflow-hidden card-hover group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button
                      onClick={() => toggleFavorite(project.id)}
                      className={`btn btn-sm btn-circle ${
                        favorites.includes(project.id)
                          ? 'btn-error text-white'
                          : 'btn-ghost bg-white/20 backdrop-blur-sm text-white hover:btn-error'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${favorites.includes(project.id) ? 'fill-current' : ''}`} />
                    </button>
                    <a
                      href={project.url}
                      className="btn btn-sm btn-circle btn-ghost bg-white/20 backdrop-blur-sm text-white hover:btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="badge badge-primary badge-sm">{project.industry}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-heading font-bold text-neutral group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-neutral/50">{project.year}</span>
                  </div>

                  <p className="text-neutral/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="badge badge-outline badge-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="badge badge-outline badge-sm">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {favorites.includes(project.id) && (
                        <span className="text-error text-sm flex items-center gap-1">
                          <Heart className="w-4 h-4 fill-current" />
                          Liked
                        </span>
                      )}
                    </div>
                    <a
                      href={project.url}
                      className="text-primary hover:text-secondary transition-colors font-semibold text-sm"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <Filter className="w-16 h-16 text-neutral/30 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-neutral mb-2">No projects found</h3>
              <p className="text-neutral/70">Try selecting a different filter to see more projects.</p>
            </div>
          )}
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-neutral/70 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with Selybi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Selybi transformed our business with their innovative platform. The results exceeded all expectations.",
                author: "Sarah Johnson",
                role: "CEO, EcoTrade",
                rating: 5
              },
              {
                quote: "The team's expertise in AI integration helped us automate processes we never thought possible.",
                author: "Michael Chen",
                role: "CTO, HealthSync",
                rating: 5
              },
              {
                quote: "Professional, timely, and incredibly talented. Selybi is our go-to development partner.",
                author: "Emily Rodriguez",
                role: "Founder, FinTech Solutions",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <blockquote className="text-neutral/70 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-neutral">{testimonial.author}</div>
                  <div className="text-sm text-neutral/70">{testimonial.role}</div>
                </div>
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
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create something amazing together. Your project could be our next showcase piece.
            </p>
            <button className="btn btn-accent btn-lg btn-glow px-8 py-4 text-lg font-semibold">
              Start Your Project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Showcase;