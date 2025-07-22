import { useState } from 'react';
import { Send, Mail, Phone, MapPin, MessageCircle, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import heroBg from '@/assets/contact-hero-bg.jpg';

const Contact = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
    timeline: ''
  });

  const questions = [
    {
      id: 'name',
      question: "Hi there! What's your name?",
      placeholder: "Enter your full name",
      type: 'text'
    },
    {
      id: 'email',
      question: `Nice to meet you, ${formData.name || 'there'}! What's your email?`,
      placeholder: "your.email@company.com",
      type: 'email'
    },
    {
      id: 'company',
      question: "What company do you represent?",
      placeholder: "Your company name",
      type: 'text'
    },
    {
      id: 'projectType',
      question: "What type of project are you looking for?",
      type: 'select',
      options: [
        'Web Application',
        'Mobile App',
        'AI/ML Solution',
        'Cloud Infrastructure',
        'Custom Software',
        'Other'
      ]
    },
    {
      id: 'budget',
      question: "What's your project budget range?",
      type: 'select',
      options: [
        'Under $10k',
        '$10k - $25k',
        '$25k - $50k',
        '$50k - $100k',
        'Over $100k',
        'Let\'s discuss'
      ]
    },
    {
      id: 'timeline',
      question: "When would you like to start?",
      type: 'select',
      options: [
        'Immediately',
        'Within 1 month',
        'Within 3 months',
        'Within 6 months',
        'Just exploring options'
      ]
    },
    {
      id: 'message',
      question: "Tell us more about your project vision:",
      placeholder: "Describe your project, goals, and any specific requirements...",
      type: 'textarea'
    }
  ];

  const handleInputChange = (value: string) => {
    const currentQuestion = questions[currentStep];
    setFormData(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const currentQuestion = questions[currentStep];
      const currentValue = formData[currentQuestion.id as keyof typeof formData];
      if (currentValue.trim()) {
        handleNext();
      }
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/5">
        <div className="max-w-2xl mx-auto text-center p-8">
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-heading font-bold text-neutral mb-6">
            {t('contact.thankYou')}
          </h1>
          <p className="text-xl text-neutral/70 mb-8">
            {t('contact.thankYouMessage')}
          </p>
          <button 
            onClick={() => {
              setIsSubmitted(false);
              setCurrentStep(0);
              setFormData({
                name: '',
                email: '',
                company: '',
                projectType: '',
                budget: '',
                message: '',
                timeline: ''
              });
            }}
            className="btn btn-primary btn-lg"
          >
            Start Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];
  const currentValue = formData[currentQuestion.id as keyof typeof formData];
  const progress = ((currentStep + 1) / questions.length) * 100;

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
              {t('contact.title')}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="glass-card p-8 max-w-2xl">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-neutral/70 mb-2">
                  <span>Step {currentStep + 1} of {questions.length}</span>
                  <span>{Math.round(progress)}% Complete</span>
                </div>
                <div className="w-full bg-base-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <div className="mb-8">
                <h3 className="text-2xl font-heading font-bold text-neutral mb-6">
                  {currentQuestion.question}
                </h3>

                {currentQuestion.type === 'text' || currentQuestion.type === 'email' ? (
                  <input
                    type={currentQuestion.type}
                    value={currentValue}
                    onChange={(e) => handleInputChange(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={currentQuestion.placeholder}
                    className="input input-bordered w-full input-lg"
                    autoFocus
                  />
                ) : currentQuestion.type === 'textarea' ? (
                  <textarea
                    value={currentValue}
                    onChange={(e) => handleInputChange(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={currentQuestion.placeholder}
                    className="textarea textarea-bordered w-full h-32 text-base"
                    autoFocus
                  />
                ) : currentQuestion.type === 'select' ? (
                  <div className="space-y-3">
                    {currentQuestion.options?.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleInputChange(option)}
                        className={`btn btn-outline w-full justify-start text-left ${
                          currentValue === option ? 'btn-primary' : ''
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>

              {/* Navigation */}
              <div className="flex justify-between">
                <button
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className="btn btn-ghost"
                >
                  Previous
                </button>
                
                <button
                  onClick={handleNext}
                  disabled={!currentValue.trim()}
                  className="btn btn-primary"
                >
                  {currentStep === questions.length - 1 ? (
                    <>
                      Submit <Send className="w-4 h-4 ml-2" />
                    </>
                  ) : (
                    'Next'
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-neutral mb-6">
                  {t('contact.getInTouch')}
                </h2>
                <p className="text-lg text-neutral/70 leading-relaxed mb-8">
                  {t('contact.description')}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral">Email Us</div>
                    <div className="text-neutral/70">hello@selybi.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral">Call Us</div>
                    <div className="text-neutral/70">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral">Visit Us</div>
                    <div className="text-neutral/70">San Francisco, CA</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral">Live Chat</div>
                    <div className="text-neutral/70">Available 24/7</div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="glass-card p-6 mt-8">
                <h3 className="font-semibold text-neutral mb-3">What to Expect</h3>
                <ul className="space-y-2 text-sm text-neutral/70">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Response within 24 hours
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Free project consultation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Detailed project proposal
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    No commitment required
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;