import { MapPin, Mail, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.name,
        country: "Kenya",
        phoneNumber: formData.phone,
        email: formData.email,
        message: formData.message,
        host: "zoho.com",
      };

      const response = await fetch("https://mailer-d1cl.vercel.app/api/handler", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420", // Added to bypass ngrok warning
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Failed to send message");
      }

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsOpen(false); // Close modal on success
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div className="container-resort">
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
                    <p className="text-muted-foreground font-light">
                      Sunset Ridge Resort<br />Kiambu Road, Kiambu, Kenya
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground font-medium mb-1">Email</p>
                    <p className="text-muted-foreground font-light">bookings@sunsetridge.co.ke</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#557D96] p-8 text-primary-foreground space-y-4">
              <p className="text-xs tracking-[0.2em] uppercase opacity-80 mb-2">Ready to visit?</p>
              <p className="font-serif text-xl italic mb-3">15% Off Your First Stay</p>
              
              {/* MODAL TRIGGER BUTTON */}
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full bg-white text-[#557D96] hover:bg-white/90 border-none uppercase tracking-widest text-xs py-6">
                    Book Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] bg-white border-none p-0 overflow-hidden">
                  <div className="bg-[#557D96] p-6 text-white text-center">
                    <DialogHeader>
                      <DialogTitle className="font-serif text-3xl italic font-light text-center text-white">
                        Reservation Inquiry
                      </DialogTitle>
                    </DialogHeader>
                    <p className="text-sm opacity-80 mt-2">Fill in your details and we will confirm availability.</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="p-8 space-y-5">
                    <div className="space-y-4">
                      <div>
                        <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1 block">Full Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 border border-border bg-background text-sm focus:ring-1 focus:ring-[#557D96] outline-none transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1 block">Email Address</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-border bg-background text-sm focus:ring-1 focus:ring-[#557D96] outline-none transition-all"
                          placeholder="you@example.com"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1 block">Phone Number</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-border bg-background text-sm focus:ring-1 focus:ring-[#557D96] outline-none transition-all"
                          placeholder="+254 700 000000"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1 block">Message</label>
                        <textarea
                          required
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 border border-border bg-background text-sm focus:ring-1 focus:ring-[#557D96] outline-none resize-none transition-all"
                          placeholder="Specific dates or room preferences..."
                        />
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-[#557D96] hover:bg-[#44667a] text-white py-6 rounded-none transition-all duration-300" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Submit Reservation"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Regular Contact Form (Static) */}
          <div className="lg:col-span-3 bg-background p-8 lg:p-10 shadow-soft border border-border/50">
            <h3 className="font-serif text-2xl text-foreground italic mb-6">General Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* This is the same form structure as your original for general messages */}
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-border bg-background text-sm focus:border-accent outline-none"
                  placeholder="Full Name"
                />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-border bg-background text-sm focus:border-accent outline-none"
                  placeholder="Email Address"
                />
              </div>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-border bg-background text-sm focus:border-accent outline-none"
                placeholder="Phone Number"
              />
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-border bg-background text-sm focus:border-accent outline-none resize-none"
                placeholder="How can we help you?"
              />
              <Button 
                type="submit" 
                variant="warm" 
                size="lg" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};