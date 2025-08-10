import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ConsultationForm from './ConsultationForm';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      details: ["123 Legal Plaza, Suite 500", "Downtown District", "New York, NY 10001"]
    },
    {
      icon: Phone,
      title: "Phone & Fax",
      details: ["(555) 123-LEGAL", "(555) 123-4567", "Fax: (555) 123-4568"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@sterlinglaw.com", "consultation@sterlinglaw.com", "emergency@sterlinglaw.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Emergency Only"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Get In <span className="text-gold">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to discuss your legal matter? Contact us today for a confidential 
            consultation. We're here to help you navigate your legal challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={info.title}
                  className="card-elegant group hover:shadow-gold transition-all duration-500"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-gradient-to-r from-gold to-gold-muted p-3 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="card-elegant">
              <h3 className="font-semibold text-primary mb-4">Our Location</h3>
              <div className="bg-muted rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gold mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Interactive map will be integrated with Mapbox
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    123 Legal Plaza, Suite 500<br />
                    Downtown District, New York, NY 10001
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:sticky lg:top-24">
            <ConsultationForm />
            
            {/* Emergency Contact */}
            <div className="mt-8 p-6 bg-gradient-to-r from-gold-light to-gold-light/50 rounded-2xl border border-gold/20">
              <h4 className="font-semibold text-primary mb-2 flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gold" />
                Emergency Legal Assistance
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                For urgent legal matters requiring immediate attention, call our emergency line.
              </p>
              <a 
                href="tel:+15551234567" 
                className="text-gold font-semibold hover:text-gold-muted transition-colors"
              >
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;