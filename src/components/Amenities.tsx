import { 
  Utensils, 
  Waves, 
  Dumbbell, 
  Wifi, 
  Car, 
  Wine, 
  Sparkles, 
  Calendar 
} from "lucide-react";
import heroImage from "@/assets/hero-resort.jpg";

const amenities = [
  { icon: Utensils, title: "Fine Dining" },
  { icon: Waves, title: "Infinity Pool" },
  { icon: Dumbbell, title: "Fitness Center" },
  { icon: Wifi, title: "Free WiFi" },
  { icon: Car, title: "Valet Parking" },
  { icon: Wine, title: "Wine Bar" },
  { icon: Sparkles, title: "Luxury Spa" },
  { icon: Calendar, title: "Event Spaces" },
];

export const Amenities = () => {
  return (
    <section id="amenities" className="relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Resort Amenities"
          className="w-full h-full object-cover"
        />
        {/* Sky-blue overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-950/20 via-sky-950/50 to-sky-950/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding">
        <div className="container-resort">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Our Facilities
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-light italic drop-shadow-lg">
              World-Class Amenities
            </h2>
            <div className="w-12 h-px bg-accent mx-auto mt-6" />
            <p className="text-primary-foreground/70 mt-6 max-w-2xl mx-auto leading-relaxed font-light">
              Every detail curated for your comfort. Experience facilities designed to rejuvenate body, mind, and soul.
            </p>
          </div>

          {/* Amenities Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {amenities.map((amenity) => (
              <div
                key={amenity.title}
                className="text-center group"
              >
                <div className="w-16 h-16 border border-primary-foreground/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                  <amenity.icon className="w-7 h-7 text-primary-foreground/80 group-hover:text-accent transition-colors duration-300" />
                </div>
                <h3 className="text-primary-foreground font-light tracking-wide">{amenity.title}</h3>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 pt-12 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/80 font-serif text-2xl md:text-3xl italic mb-4 drop-shadow-sm">
              Ready to experience paradise?
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center text-accent font-medium hover:underline transition-all tracking-wide uppercase text-sm"
            >
              Plan Your Stay →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
