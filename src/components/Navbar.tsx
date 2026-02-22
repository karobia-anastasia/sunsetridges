import { useState, useEffect } from "react";
import { Menu, X, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Rooms", href: "#rooms" },
  { name: "Amenities", href: "#amenities" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const { toast } = useToast();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Prevents event bubbling
    setIsSubmitting(true);

    try {
      const response = await fetch("https://7500-102-209-56-155.ngrok-free.app/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420",
        },
        body: JSON.stringify({
          ...formData,
          country: "Kenya",
          phoneNumber: formData.phone,
          host: "zoho.com",
        }),
      });

      if (!response.ok) throw new Error("Submission failed");

      toast({
        title: "Inquiry Sent!",
        description: "Our team will contact you shortly.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsModalOpen(false);
      setIsMobileMenuOpen(false);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#557D96] backdrop-blur-xl shadow-2xl py-4"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="container-resort mx-auto flex items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-12 w-12 rounded-full object-cover" />
          <div className="text-white">
            <p className="font-serif text-xl font-bold italic">Sunset Ridge</p>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-white text-sm hover:text-sky-200">
              {link.name}
            </a>
          ))}
          
          {/* MODAL STRATEGY: One Dialog for the whole Navbar */}
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button className="bg-white text-[#557D96] hover:bg-sky-50 px-6 uppercase text-xs font-bold">
                Book Now
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] z-[100] bg-white p-0 overflow-hidden">
              <div className="bg-[#557D96] p-6 text-white text-center">
                <DialogHeader>
                  <DialogTitle className="text-white font-serif text-2xl italic">Make a Reservation</DialogTitle>
                </DialogHeader>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <input
                  className="w-full p-3 border rounded text-sm outline-none focus:border-[#557D96]"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
                <input
                  className="w-full p-3 border rounded text-sm outline-none focus:border-[#557D96]"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
                <input
                  className="w-full p-3 border rounded text-sm outline-none focus:border-[#557D96]"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
                <textarea
                  className="w-full p-3 border rounded text-sm outline-none focus:border-[#557D96] resize-none"
                  placeholder="Message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
                <Button type="submit" disabled={isSubmitting} className="w-full bg-[#557D96] py-6">
                  {isSubmitting ? "Sending..." : "Submit Request"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#557D96] p-6 flex flex-col gap-4 border-t border-white/10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-white text-lg" onClick={() => setIsMobileMenuOpen(false)}>
              {link.name}
            </a>
          ))}
          {/* On Mobile, we trigger the same Modal State */}
          <Button 
            onClick={() => {
              setIsModalOpen(true);
              setIsMobileMenuOpen(false);
            }} 
            className="bg-white text-[#557D96] w-full"
          >
            Book Now
          </Button>
        </div>
      )}
    </header>
  );
};