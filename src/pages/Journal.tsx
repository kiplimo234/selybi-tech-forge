import { BookOpen } from 'lucide-react';

const Journal = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-black text-neutral mb-6">
              Insights &{' '}
              <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Perspectives
              </span>
            </h1>
            <p className="text-xl text-neutral/70 leading-relaxed">
              Dive into our thoughts on technology, development, and the future of digital innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-8">
              <BookOpen className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl font-heading font-bold text-neutral mb-6">
              Stories in Progress
            </h2>
            <p className="text-lg text-neutral/70 mb-8 leading-relaxed">
              Our journal is being carefully crafted to bring you the most valuable insights 
              from the world of software development and technology innovation.
            </p>
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold text-neutral mb-4">What to Expect:</h3>
              <ul className="space-y-3 text-neutral/70">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Technical Deep Dives and Tutorials
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Industry Trends and Analysis
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Case Studies and Project Stories
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Team Insights and Development Tips
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journal;