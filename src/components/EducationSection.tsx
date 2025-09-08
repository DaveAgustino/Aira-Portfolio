import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Economics',
      institution: 'Visayas State University',
      location: 'Baybay, Leyte',
      duration: 'August 2020 – August 2024',
      description: 'Comprehensive study of economic principles, data analysis, and research methodologies. Developed strong analytical and problem-solving skills through rigorous coursework and practical applications.',
      highlights: [
        'Economic Theory & Analysis',
        'Statistical Methods & Data Analysis',
        'Research Methodology',
        'Quantitative Economics',
        'Development Economics'
      ]
    },
    {
      degree: 'Accountancy, Business and Management',
      institution: 'ACLC College of Ormoc',
      location: 'Senior High School',
      duration: 'June 2018 – June 2020',
      description: 'Foundational business education covering accounting principles, business management, and financial literacy. Built strong numerical and analytical capabilities.',
      highlights: [
        'Financial Accounting',
        'Business Mathematics',
        'Business Management',
        'Economics Fundamentals',
        'Business Ethics'
      ]
    }
  ];

  return (
    <section id="education" className="section-padding bg-accent">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="heading-section">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-rose mx-auto mb-8"></div>
          <p className="text-elegant max-w-2xl mx-auto">
            My educational journey that laid the foundation for my analytical and professional skills.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="card-feature group animate-fade-up hover:shadow-elegant transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid md:grid-cols-3 gap-6">
                {/* Left Column - Main Info */}
                <div className="md:col-span-2">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="h-7 w-7 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-primary mb-2">{edu.degree}</h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-muted-foreground">
                          <Award className="h-4 w-4 mr-2" />
                          <span className="font-medium text-accent-rose-dark">{edu.institution}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Key Subjects */}
                <div className="bg-gradient-to-br from-accent-rose to-secondary rounded-lg p-6 border border-border">
                  <h4 className="font-semibold text-primary mb-4">Key Areas of Study</h4>
                  <div className="space-y-2">
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <div 
                        key={highlightIndex}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-primary-light">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Educational Philosophy */}
        <div className="mt-12 text-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-primary/5 to-accent-rose/10 rounded-xl border border-accent-rose/20">
            <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-4">Continuous Learning</h3>
            <p className="text-muted-foreground leading-relaxed">
              My educational foundation in economics and business has equipped me with analytical thinking, 
              research capabilities, and a deep understanding of data-driven decision making. I continue 
              to build upon this foundation through professional certifications and hands-on experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;