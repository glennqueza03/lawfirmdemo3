import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission - In a real app, this would send to your API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Consultation Request Sent",
        description: "We'll contact you within 24 hours to schedule your consultation.",
      });

      // Reset form
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card-elegant bg-white/95 backdrop-blur-sm max-w-md w-full">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-heading font-semibold text-primary mb-2">
          Request Consultation
        </h3>
        <p className="text-muted-foreground">
          Get expert legal advice tailored to your needs
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Tell us about your case
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 resize-none"
            placeholder="Briefly describe your legal matter..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-hero flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary"></div>
              Sending...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              Send Request
            </>
          )}
        </button>

        <p className="text-xs text-muted-foreground text-center">
          We respect your privacy. Your information is secure and confidential.
        </p>
      </form>
    </div>
  );
};

export default ConsultationForm;