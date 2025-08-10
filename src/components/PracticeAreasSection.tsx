import { Briefcase, Building, Users, Shield, Gavel, FileText } from 'lucide-react';

const PracticeAreasSection = () => {
  const practiceAreas = [
    {
      icon: Building,
      title: "Corporate Law",
      description: "Comprehensive business legal services including mergers, acquisitions, and corporate governance.",
      features: ["Business Formation", "Contract Negotiations", "Regulatory Compliance"]
    },
    {
      icon: Gavel,
      title: "Civil Litigation",
      description: "Aggressive representation in complex civil disputes and commercial litigation matters.",
      features: ["Commercial Disputes", "Contract Litigation", "Employment Law"]
    },
    {
      icon: Shield,
      title: "Personal Injury",
      description: "Dedicated advocacy for injury victims seeking just compensation for their damages.",
      features: ["Auto Accidents", "Medical Malpractice", "Workplace Injuries"]
    },
    {
      icon: FileText,
      title: "Estate Planning",
      description: "Comprehensive estate planning services to protect your assets and legacy.",
      features: ["Wills & Trusts", "Probate", "Tax Planning"]
    },
    {
      icon: Users,
      title: "Family Law",
      description: "Compassionate guidance through family legal matters with personalized attention.",
      features: ["Divorce & Separation", "Child Custody", "Adoption"]
    },
    {
      icon: Briefcase,
      title: "Real Estate",
      description: "Complete real estate legal services for both residential and commercial transactions.",
      features: ["Property Transactions", "Title Issues", "Zoning & Development"]
    }
  ];

  return (
    <section id="practice-areas" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Our <span className="text-gold">Practice Areas</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We provide comprehensive legal services across multiple practice areas, 
            ensuring that our clients receive expert representation in all their legal matters.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <div 
              key={area.title}
              className="card-elegant group hover:shadow-gold hover:-translate-y-2 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="bg-gradient-to-r from-gold to-gold-muted p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                <area.icon className="h-8 w-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-semibold text-primary mb-4">
                {area.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {area.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {area.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className="mt-6 text-gold font-semibold hover:text-gold-muted transition-colors duration-300 group">
                Learn More 
                <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Don't see your legal matter listed? We handle a wide range of cases.
          </p>
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-hero"
          >
            Discuss Your Case
          </button>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;