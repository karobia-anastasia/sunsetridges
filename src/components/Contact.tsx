import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div className="container-resort">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Get In Touch
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-light italic">
            Plan Your Escape
          </h2>
          <div className="w-12 h-px bg-accent mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-serif text-2xl text-foreground italic mb-6">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground font-medium mb-1">Address</p>
                    <p className="text-muted-foreground font-light">Sunset Ridge Resort<br />Kiambu Road, Kiambu, Kenya</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground font-medium mb-1">Email</p>
                    <p className="text-muted-foreground font-light">Bookings@sunsetridge.co.ke</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground font-medium mb-1">Email</p>
                    <p className="text-muted-foreground font-light">info@sunsetridge.co.ke</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Promo Box */}
            <div className="bg-[#557D96] p-6 text-primary-foreground">
              <p className="text-xs tracking-[0.2em] uppercase opacity-80 mb-2">Special Offer</p>
              <p className="font-serif text-xl italic mb-3">15% Off Your First Stay</p>
              <p className="text-sm opacity-85 font-light mb-4">
                Book directly and receive complimentary breakfast for two.
              </p>
              <div className="inline-block bg-primary-foreground/15 px-4 py-2">
                <p className="text-xs opacity-80">Promo Code</p>
                <p className="font-mono text-lg font-semibold tracking-wider">SUNSET15</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-background p-8 lg:p-10 shadow-soft">
            <h3 className="font-serif text-2xl text-foreground italic mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none"
                  placeholder="+254 700 000000"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none resize-none"
                  placeholder="Tell us about your plans..."
                />
              </div>
              <Button type="submit" variant="warm" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};