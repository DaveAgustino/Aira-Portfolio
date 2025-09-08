import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(45, 55, 72, 0.9), rgba(156, 163, 175, 0.7)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-rose rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary-light rounded-full opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-accent-rose-dark rounded-full opacity-25 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="section-container relative z-10">
        <div className="text-center">
          {/* Main Heading */}
          <div className="animate-fade-up">
            <h1 className="heading-hero mb-6">
              AIRA MAE D. MARO
            </h1>
          </div>

          {/* Subtitle */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-primary-foreground mb-4">
              Economics Graduate | Customer Service & Data Analysis Professional
            </h2>
          </div>

          {/* Tagline */}
          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Dedicated to delivering excellent results through problem-solving and effective communication.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="animate-fade-up flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={scrollToContact}
              className="btn-hero text-lg px-8 py-4"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
            <Button 
              variant="outline"
              className="btn-soft text-lg px-8 py-4"
            >
              <Download className="mr-2 h-5 w-5" />
              View Resume
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-fade-up mt-12" style={{ animationDelay: '0.8s' }}>
            <button 
              onClick={scrollToAbout}
              className="flex flex-col items-center text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <span className="text-sm mb-2">Scroll to learn more</span>
              <ArrowDown className="h-6 w-6 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;