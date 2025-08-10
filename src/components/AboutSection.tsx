import { Shield, Users, Trophy, Clock } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We uphold the highest ethical standards in every case we handle."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our priority. We provide personalized attention to every client."
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering superior results."
    },
    {
      icon: Clock,
      title: "Timely",
      description: "We understand the importance of time in legal matters and act accordingly."
    }
  ];

  return (
    <section id="about" className="py-20 bg-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
                Dedicated to Your 
                <span className="text-gold"> Success</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 1990, Sterling & Associates has built a reputation as one of 
                the region's most trusted law firms. Our team of experienced attorneys 
                combines deep legal knowledge with a genuine commitment to our clients' success.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                We believe that exceptional legal representation requires more than just 
                technical expertise—it demands understanding, empathy, and unwavering 
                dedication to achieving the best possible outcome for our clients.
              </p>
              
              <p className="text-muted-foreground">
                Our firm has handled thousands of cases across multiple practice areas, 
                from complex corporate transactions to personal injury claims, always 
                with the same level of professionalism and attention to detail.
              </p>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Legal Experts</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">$2B+</div>
                <div className="text-sm text-muted-foreground">Client Recoveries</div>
              </div>
            </div>
          </div>

          {/* Right Content - Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="card-elegant text-center space-y-4 hover:shadow-gold group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-r from-gold to-gold-muted p-4 rounded-2xl inline-block group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;