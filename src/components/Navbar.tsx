import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Rooms", href: "#rooms" },
  { name: "Amenities", href: "#amenities" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#557D96] backdrop-blur-xl shadow-2xl border-b border-sky-400/20 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="container-resort mx-auto flex items-center justify-between px-6 lg:px-12">
        {/* Logo - Bigger & Better */}
        <a href="#home" className="flex items-center gap-4 hover:scale-105 transition-transform">
    
                <img
                src={logo}
                alt="Sunset Ridge Kiambu Resort"
                className="h-16 w-16 rounded-full object-cover drop-shadow-lg"
              />
          <div className="text-white">
            <p className="font-serif text-2xl font-bold italic tracking-tight">Sunset Ridge</p>
            <p className="text-sky-300 text-xs tracking-widest uppercase font-light"> Resort</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-light tracking-wider transition-all duration-300 hover:text-sky-300 ${
                isScrolled ? "text-white" : "text-white"
              } hover:scale-110`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button 
            variant="default" 
            size="sm"
            className="bg-[#557D96] hover:bg-[#517b95] text-white font-medium shadow-lg hover:shadow-sky-400/50"
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-3 text-white hover:text-sky-300 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu - Now Beautiful Blue */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-blue-950/98 backdrop-blur-xl border-t border-sky-400/30">
          <div className="container-resort mx-auto py-8 px-6 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white text-lg font-light py-3 hover:text-sky-300 transition-all border-b border-sky-400/20 last:border-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button 
              variant="default" 
              size="lg" 
              className="mt-6 bg-sky-500 hover:bg-sky-400 text-white font-semibold shadow-lg"
            >
              Book Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};




// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import logo from "@/assets/logo.jpeg";

// const navLinks = [
//   { name: "Home", href: "#home" },
//   { name: "About", href: "#about" },
//   { name: "Rooms", href: "#rooms" },
//   { name: "Amenities", href: "#amenities" },
//   { name: "Gallery", href: "#gallery" },
//   { name: "Contact", href: "#contact" },
// ];

// export const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         isScrolled
//           ? "bg-background/98 backdrop-blur-sm shadow-soft py-4"
//           : "bg-transparent py-6"
//       }`}
//     >
//       <nav className="container-resort flex items-center justify-between px-6 lg:px-12">
//         {/* Logo */}
//         <a href="#home" className="flex items-center gap-3">
//           <img
//             src={logo}
//             alt="Sunset Ridge Kiambu Resort"
//             className="h-10 w-10 rounded object-cover"
//           />
//           <div className={`transition-colors duration-300 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
//             <p className="font-serif text-xl font-medium italic">Sunset Ridge</p>
//           </div>
//         </a>

//         {/* Desktop Navigation */}
//         <div className="hidden lg:flex items-center gap-10">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className={`text-sm font-light tracking-wider transition-colors duration-300 hover:text-accent ${
//                 isScrolled ? "text-foreground" : "text-primary-foreground"
//               }`}
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>

//         {/* CTA Button */}
//         <div className="hidden lg:block">
//           <Button variant={isScrolled ? "navCta" : "heroOutline"} size="sm">
//             Book Now
//           </Button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className={`lg:hidden p-2 transition-colors ${
//             isScrolled ? "text-foreground" : "text-primary-foreground"
//           }`}
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           aria-label="Toggle menu"
//         >
//           {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden bg-background/98 backdrop-blur-sm border-t border-border animate-fade-in">
//           <div className="container-resort py-6 px-6 flex flex-col gap-4">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="text-foreground text-base font-light py-2 hover:text-accent transition-colors tracking-wide"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {link.name}
//               </a>
//             ))}
//             <Button variant="warm" size="lg" className="mt-4 w-full">
//               Book Now
//             </Button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };