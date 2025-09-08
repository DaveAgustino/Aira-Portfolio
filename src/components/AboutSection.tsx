import { MapPin, Phone, Mail, User, Target, Heart } from 'lucide-react';

const AboutSection = () => {
  const personalInfo = [
    { icon: MapPin, label: 'Location', value: 'Poblacion, Kananga, Leyte' },
    { icon: Mail, label: 'Email', value: 'airamaro22@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+63 951 859 4339' },
  ];

  const highlights = [
    {
      icon: User,
      title: 'Professional Experience',
      description: 'One year of dedicated customer service experience with strong foundation in research and data analysis.',
    },
    {
      icon: Target,
      title: 'Core Strengths',
      description: 'Problem-solving, communication, and handling tasks under pressure while maintaining high quality standards.',
    },
    {
      icon: Heart,
      title: 'Personal Values',
      description: 'Committed to balancing client needs with organizational goals to deliver excellent results.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-accent">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="heading-section">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-rose mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Content */}
          <div className="space-y-6">
            <div className="animate-fade-up">
              <p className="text-elegant">
                Economics graduate with one year of professional experience in customer service and a strong foundation in research, data analysis, and project collaboration. Skilled in problem-solving, communication, and handling tasks under pressure.
              </p>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-elegant">
                Adept at balancing client needs with organizational goals to deliver excellent results. Passionate about leveraging analytical skills and economic knowledge to drive meaningful outcomes in dynamic professional environments.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4 mt-8">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="animate-fade-up flex items-start space-x-4 p-4 bg-card rounded-lg shadow-soft"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-rose rounded-lg flex items-center justify-center">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">{highlight.title}</h3>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Information */}
          <div className="animate-slide-in-right">
            <div className="card-feature">
              <h3 className="text-2xl font-semibold text-primary mb-6">Personal Information</h3>
              
              <div className="space-y-4">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent-rose rounded-lg flex items-center justify-center">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium text-foreground">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Professional Quote */}
              <div className="mt-8 p-6 bg-gradient-to-br from-accent-rose to-secondary rounded-lg border-l-4 border-primary">
                <blockquote className="text-primary italic">
                  "Dedicated to delivering excellent results through problem-solving and effective communication."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;