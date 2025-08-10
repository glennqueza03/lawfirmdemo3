import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "CEO, Mitchell Enterprises",
      content: "Sterling & Associates guided us through a complex merger with exceptional expertise and professionalism. Their attention to detail and strategic thinking made all the difference.",
      rating: 5,
      location: "New York, NY"
    },
    {
      name: "Michael Rodriguez",
      role: "Personal Injury Client",
      content: "After my accident, the team at Sterling & Associates fought tirelessly for my case. Their compassion and dedication helped me secure the compensation I deserved.",
      rating: 5,
      location: "Los Angeles, CA"
    },
    {
      name: "Jennifer Park",
      role: "Small Business Owner",
      content: "The corporate law team helped structure my business perfectly. Their guidance was invaluable in protecting my interests and setting up for future growth.",
      rating: 5,
      location: "Chicago, IL"
    },
    {
      name: "David Thompson",
      role: "Estate Planning Client",
      content: "Planning for my family's future was made simple and stress-free. The team's expertise in estate planning gave me complete peace of mind.",
      rating: 5,
      location: "Miami, FL"
    },
    {
      name: "Lisa Chen",
      role: "Family Law Client",
      content: "During a difficult divorce, Sterling & Associates provided the support and expertise I needed. They handled everything with sensitivity and professionalism.",
      rating: 5,
      location: "Seattle, WA"
    },
    {
      name: "Robert Williams",
      role: "Real Estate Developer",
      content: "For our major development projects, we trust Sterling & Associates completely. Their real estate expertise has been crucial to our success.",
      rating: 5,
      location: "Phoenix, AZ"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            What Our <span className="text-gold">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about 
            their experience working with Sterling & Associates.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="card-elegant group hover:shadow-gold transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="h-8 w-8 text-gold opacity-60" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <h4 className="font-semibold text-primary mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-muted-foreground mb-1">
                  {testimonial.role}
                </p>
                <p className="text-xs text-gold">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Client Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Referral Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24hr</div>
            <div className="text-sm text-muted-foreground">Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;