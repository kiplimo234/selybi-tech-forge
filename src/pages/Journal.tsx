import { BookOpen, Calendar, Clock, User, ArrowRight, Search, Filter, Tag } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Journal = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Articles', count: 12 },
    { id: 'development', name: 'Development', count: 5 },
    { id: 'ai', name: 'AI & Machine Learning', count: 3 },
    { id: 'cloud', name: 'Cloud Computing', count: 2 },
    { id: 'trends', name: 'Tech Trends', count: 2 }
  ];

  const articles = [
    {
      id: 1,
      title: 'The Future of AI in Web Development',
      excerpt: 'Exploring how artificial intelligence is reshaping the way we build and interact with web applications.',
      category: 'ai',
      author: 'Alex Thompson',
      date: '2024-01-15',
      readTime: '8 min read',
      image: '/api/placeholder/600/400',
      tags: ['AI', 'Web Development', 'Machine Learning']
    },
    {
      id: 2,
      title: 'Building Scalable Cloud Architecture',
      excerpt: 'Best practices for designing cloud infrastructure that grows with your business needs.',
      category: 'cloud',
      author: 'Sarah Kim',
      date: '2024-01-10',
      readTime: '12 min read',
      image: '/api/placeholder/600/400',
      tags: ['Cloud', 'Architecture', 'Scalability']
    },
    {
      id: 3,
      title: 'React 18: New Features and Performance Improvements',
      excerpt: 'A comprehensive guide to React 18\'s concurrent features and how they boost application performance.',
      category: 'development',
      author: 'Miguel Rodriguez',
      date: '2024-01-05',
      readTime: '10 min read',
      image: '/api/placeholder/600/400',
      tags: ['React', 'JavaScript', 'Performance']
    },
    {
      id: 4,
      title: 'Microservices vs Monoliths: Making the Right Choice',
      excerpt: 'Understanding when to choose microservices architecture over traditional monolithic applications.',
      category: 'development',
      author: 'Emma Chen',
      date: '2023-12-28',
      readTime: '15 min read',
      image: '/api/placeholder/600/400',
      tags: ['Architecture', 'Microservices', 'Backend']
    },
    {
      id: 5,
      title: 'The Rise of Edge Computing',
      excerpt: 'How edge computing is revolutionizing data processing and reducing latency for modern applications.',
      category: 'trends',
      author: 'David Park',
      date: '2023-12-20',
      readTime: '7 min read',
      image: '/api/placeholder/600/400',
      tags: ['Edge Computing', 'Performance', 'Infrastructure']
    },
    {
      id: 6,
      title: 'Securing Modern Web Applications',
      excerpt: 'Essential security practices and tools for protecting your web applications in 2024.',
      category: 'development',
      author: 'Lisa Johnson',
      date: '2023-12-15',
      readTime: '11 min read',
      image: '/api/placeholder/600/400',
      tags: ['Security', 'Web Development', 'Best Practices']
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-black text-neutral mb-6">
              {t('journal.title')}{' '}
              <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {t('journal.titleAccent')}
              </span>
            </h1>
            <p className="text-xl text-neutral/70 leading-relaxed">
              {t('journal.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral/40 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-base-200 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none"
                />
              </div>
              
              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral/40 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 bg-white border border-base-200 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none min-w-48"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-base-200 text-neutral hover:bg-primary/10'
                  }`}
                >
                  {category.name}
                  <span className="ml-1 text-xs opacity-70">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredArticles.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map(article => (
                  <article key={article.id} className="glass-card overflow-hidden group hover:scale-105 transition-all duration-300">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-primary/50" />
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 text-primary text-xs font-semibold rounded-full">
                          {categories.find(c => c.id === article.category)?.name}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-neutral/60 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-heading font-bold text-neutral mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-neutral/70 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.map(tag => (
                          <span key={tag} className="inline-flex items-center px-2 py-1 bg-base-200 text-neutral/70 text-xs rounded-md">
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-sm text-neutral/70">{article.author}</span>
                        </div>
                        
                        <button className="text-primary hover:text-secondary transition-colors font-semibold text-sm flex items-center space-x-1">
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-primary/50" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-neutral mb-4">No Articles Found</h3>
                <p className="text-neutral/70 mb-6">Try adjusting your search terms or filters.</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="btn btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-neutral/70 mb-8">
              Get the latest insights and articles delivered straight to your inbox.
            </p>
            
            <div className="glass-card p-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-white border border-base-200 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none"
                />
                <button className="btn btn-primary px-8 py-3 rounded-xl font-semibold">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-neutral/60 mt-4">
                Weekly digest of our best content. No spam, unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journal;