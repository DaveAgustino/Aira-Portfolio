import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'airamaro22@gmail.com',
      href: 'mailto:airamaro22@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+63 951 859 4339',
      href: 'tel:+639518594339'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kananga, Leyte, Philippines',
      href: '#'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // In a real application, you would send the form data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-accent">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="heading-section">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-rose mx-auto mb-8"></div>
          <p className="text-elegant max-w-2xl mx-auto">
            Ready to collaborate or have questions? I'd love to hear from you. Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-fade-up">
              <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center">
                <MessageCircle className="h-6 w-6 mr-3 text-accent-rose-dark" />
                Let's Connect
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-8">
                Feel free to reach out to me for opportunities, collaborations, or any inquiries. 
                I'm always open to discussing new projects and professional opportunities.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="animate-fade-up flex items-center space-x-4 p-4 bg-card rounded-lg shadow-soft hover:shadow-md transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <a 
                        href={info.href}
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action Card */}
            <div className="animate-fade-up p-6 bg-gradient-to-br from-primary/5 to-accent-rose/10 rounded-xl border border-accent-rose/20" style={{ animationDelay: '0.4s' }}>
              <h4 className="font-semibold text-primary mb-3">Ready to Start a Conversation?</h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Whether you're looking for a dedicated professional with strong analytical skills, 
                or need someone who can bridge client needs with organizational goals, let's discuss 
                how I can contribute to your team's success.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block px-3 py-1 bg-accent-rose text-primary text-sm rounded-full">
                  Customer Service
                </span>
                <span className="inline-block px-3 py-1 bg-accent-rose text-primary text-sm rounded-full">
                  Data Analysis
                </span>
                <span className="inline-block px-3 py-1 bg-accent-rose text-primary text-sm rounded-full">
                  Research
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="card-feature">
              <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center">
                <Send className="h-6 w-6 mr-3 text-accent-rose-dark" />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="pl-10"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pl-10"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Tell me more about your project or inquiry..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="btn-hero w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;