import logo from "@/assets/logo.jpeg";
import { Facebook, Instagram, Twitter } from "lucide-react";

const footerLinks = {
  resort: [
    { name: "About Us", href: "#about" },
    { name: "Our Rooms", href: "#rooms" },
    { name: "Amenities", href: "#amenities" },
    { name: "Gallery", href: "#gallery" },
  ],
  info: [
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Careers", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative text-primary-foreground overflow-hidden">
      {/* Blue background */}
     <div className="absolute inset-0 bg-[#557D96]" />

      <div className="container-resort section-padding relative z-10 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 ">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="Sunset Ridge Kiambu Resort"
                className="h-16 w-16 rounded-full object-cover drop-shadow-lg"
              />
              <div>
            <p className="font-serif text-2xl font-bold italic tracking-tight">Sunset Ridge</p>
            <p className="text-sky-300 text-xs tracking-widest uppercase font-light">Hotel & Resort</p>

              </div>
            </div>
            <p className="text-primary-foreground/90 font-light leading-relaxed max-w-sm mb-6 drop-shadow-sm">
              A sanctuary of elegance in Kiambu's serene highlands. Where every moment becomes a cherished memory.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 border border-primary-foreground/30 rounded-full flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-primary-foreground/30 rounded-full flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-primary-foreground/30 rounded-full flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] mb-6 font-medium drop-shadow-sm">
              The Resort
            </h4>
            <ul className="space-y-3">
              {footerLinks.resort.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-accent transition-colors font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Links */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] mb-6 font-medium drop-shadow-sm">
              Information
            </h4>
            <ul className="space-y-3">
              {footerLinks.info.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-accent transition-colors font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/50 font-light drop-shadow-sm">
            © {new Date().getFullYear()} Sunset Ridge Kiambu Resort. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
