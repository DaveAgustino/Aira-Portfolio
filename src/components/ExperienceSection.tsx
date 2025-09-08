import { Briefcase, Users, TrendingUp, FileText, CheckCircle } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Customer Service Representative',
      company: 'Current Position',
      duration: 'January 2024 – Present',
      icon: Users,
      responsibilities: [
        'Provide frontline support by addressing customer inquiries, concerns, and account-related issues',
        'Ensure efficient resolution of complaints while maintaining high levels of customer satisfaction and loyalty',
        'Demonstrate excellent communication skills in managing diverse client needs',
        'Consistently meet performance metrics and quality standards'
      ],
      color: 'from-primary to-primary-light'
    },
    {
      title: 'Research Assistant',
      company: 'Visayas State University',
      duration: 'August 2024 – October 2024',
      icon: TrendingUp,
      responsibilities: [
        'Managed project timelines, reducing delivery times by 30%',
        'Spearheaded the adoption of cutting-edge engineering software, improving project accuracy by 15%',
        'Collaborated with cross-functional teams, enhancing project success rates by 10%',
        'Conducted comprehensive data analysis and research methodology implementation'
      ],
      color: 'from-accent-rose-dark to-accent-rose'
    },
    {
      title: 'Enumerator',
      company: 'Visayas State University',
      duration: 'August 2024 – September 2024',
      icon: FileText,
      responsibilities: [
        'Conducted structured interviews and administered survey questionnaires',
        'Verified data for consistency, reliability, and completeness',
        'Ensured accurate data collection following established protocols',
        'Maintained professional standards in field data collection activities'
      ],
      color: 'from-primary-light to-primary-lighter'
    }
  ];

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="heading-section">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-rose mx-auto mb-8"></div>
          <p className="text-elegant max-w-2xl mx-auto">
            A timeline of my professional journey, showcasing growth in customer service, research, and data analysis.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item animate-fade-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="card-feature group hover:shadow-elegant transition-all duration-300">
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <exp.icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-1">{exp.title}</h3>
                        <p className="text-accent-rose-dark font-medium">{exp.company}</p>
                      </div>
                      <div className="mt-2 sm:mt-0">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent-rose text-primary">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-2">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <div key={respIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-muted-foreground leading-relaxed">{responsibility}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-rose to-secondary rounded-lg shadow-md">
            <TrendingUp className="h-5 w-5 text-primary mr-2" />
            <span className="text-primary font-medium">
              Ready to bring this experience to your team
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;