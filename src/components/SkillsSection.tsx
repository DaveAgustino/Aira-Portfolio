import { 
  HeadphonesIcon, 
  BarChart3, 
  Search, 
  Users, 
  FileSpreadsheet, 
  Globe, 
  Award,
  Star,
  ExternalLink
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const technicalSkills = [
    { name: 'Customer Service & Client Relations', level: 95, icon: HeadphonesIcon },
    { name: 'Data Analysis', level: 85, icon: BarChart3 },
    { name: 'Research', level: 90, icon: Search },
    { name: 'Project Collaboration', level: 88, icon: Users },
    { name: 'Microsoft Office Suite', level: 92, icon: FileSpreadsheet },
    { name: 'Google Workspace', level: 85, icon: Globe },
    { name: 'Shopify', level: 75, icon: Globe },
  ];

  const languages = [
    { name: 'English', level: 'Fluent', flag: '🇺🇸' },
    { name: 'Filipino', level: 'Native', flag: '🇵🇭' },
  ];

  const certifications = [
    {
      title: 'Microsoft Artificial Intelligence Course',
      subtitle: 'Azure AI Fundamentals',
      date: 'June 2025',
      verificationNote: 'Valid even without signature',
      issuer: 'eTESDA Division',
      contact: 'tesdaonlineprogram@tesda.gov.ph | (02) 8893 - 8297'
    },
    {
      title: 'Introduction to Bookkeeping',
      subtitle: 'Fundamental Accounting Principles',
      date: 'June 2025',
      verificationNote: 'Valid even without signature',
      issuer: 'eTESDA Division',
      contact: 'tesdaonlineprogram@tesda.gov.ph | (02) 8893 - 8297'
    }
  ];

  const awards = [
    {
      title: '"Engineering Excellence" Award',
      description: 'Outstanding contributions to project innovation',
      organization: 'Borcelle Technologies',
      note: 'Recognition for innovative problem-solving and project leadership'
    }
  ];

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="heading-section">Skills & Credentials</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-rose mx-auto mb-8"></div>
          <p className="text-elegant max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities, certifications, and professional achievements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-8">
            <div className="animate-fade-up">
              <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center">
                <BarChart3 className="h-6 w-6 mr-3 text-accent-rose-dark" />
                Technical Skills
              </h3>
              
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div 
                    key={index}
                    className="animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <skill.icon className="h-5 w-5 text-primary" />
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent-rose-dark h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="animate-fade-up" style={{ animationDelay: '0.8s' }}>
              <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center">
                <Globe className="h-6 w-6 mr-3 text-accent-rose-dark" />
                Languages
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {languages.map((language, index) => (
                  <div key={index} className="card-elegant p-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{language.flag}</span>
                      <div>
                        <h4 className="font-medium text-foreground">{language.name}</h4>
                        <Badge variant="secondary" className="mt-1">
                          {language.level}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications & Awards */}
          <div className="space-y-8">
            {/* Certifications */}
            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center">
                <Award className="h-6 w-6 mr-3 text-accent-rose-dark" />
                Certifications
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="card-feature group">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary">{cert.title}</h4>
                        <p className="text-accent-rose-dark font-medium mb-2">{cert.subtitle}</p>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p><strong>Date:</strong> {cert.date}</p>
                          <p><strong>Issuer:</strong> {cert.issuer}</p>
                          <p className="text-xs bg-accent-rose/20 p-2 rounded italic">
                            {cert.verificationNote}
                          </p>
                          <p className="text-xs">
                            <strong>Verification:</strong> {cert.contact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div className="animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center">
                <Star className="h-6 w-6 mr-3 text-accent-rose-dark" />
                Awards & Recognition
              </h3>
              
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <div key={index} className="card-feature bg-gradient-to-br from-accent-rose/10 to-secondary/20 border-accent-rose/30">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent-rose-dark to-accent-rose rounded-lg flex items-center justify-center">
                        <Star className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary mb-1">{award.title}</h4>
                        <p className="text-accent-rose-dark font-medium mb-2">{award.organization}</p>
                        <p className="text-muted-foreground mb-2">{award.description}</p>
                        <p className="text-sm text-primary bg-accent-rose/20 p-2 rounded">
                          {award.note}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Summary */}
            <div className="animate-slide-in-right p-6 bg-gradient-to-br from-primary/5 to-accent-rose/10 rounded-xl border border-accent-rose/20" style={{ animationDelay: '0.6s' }}>
              <h4 className="font-semibold text-primary mb-3">Professional Summary</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Combining strong analytical skills from my Economics background with practical experience 
                in customer service and data analysis. Continuously expanding my technical expertise 
                through professional certifications and hands-on project work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;