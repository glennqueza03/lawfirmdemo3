import { ArrowRight, Award, Users, Scale } from 'lucide-react';
import ConsultationForm from './ConsultationForm';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold-muted rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight">
                Trusted Legal 
                <span className="block text-gold">Counsel</span>
                <span className="block text-4xl lg:text-5xl font-normal">
                  When It Matters Most
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                With over three decades of experience, Sterling & Associates provides 
                exceptional legal representation with a commitment to excellence and 
                integrity that our clients trust.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-gold" />
                </div>
                <div className="text-2xl font-bold text-white">30+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-gold" />
                </div>
                <div className="text-2xl font-bold text-white">1000+</div>
                <div className="text-sm text-gray-300">Cases Won</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Scale className="h-8 w-8 text-gold" />
                </div>
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-hero flex items-center justify-center gap-2"
              >
                Schedule Consultation
                <ArrowRight className="h-5 w-5" />
              </button>
              <button 
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline-gold flex items-center justify-center gap-2"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Consultation Form */}
          <div className="lg:justify-self-end">
            <ConsultationForm />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;