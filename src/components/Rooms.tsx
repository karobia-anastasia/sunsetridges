import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import roomDeluxe from "@/assets/img1 (1).jpeg";
import roomVilla from "@/assets/img1 (2).jpeg";;
import roomPresidential from "@/assets/img1 (3).jpeg";

const rooms = [
  {
    image: roomDeluxe,
    title: "Deluxe Room",
    subtitle: "Classic Comfort",
    description: "Elegantly appointed room with panoramic hill views and premium amenities for the discerning traveler.",
    size: "35 m²",
    price: "KES 15,000",
  },
  {
    image: roomVilla,
    title: "Executive Suite",
    subtitle: "Refined Luxury",
    description: "Spacious suite featuring separate living area, private balcony, and exclusive garden access.",
    size: "55 m²",
    price: "KES 28,000",
  },
  {
    image: roomPresidential,
    title: "Presidential Villa",
    subtitle: "Ultimate Indulgence",
    description: "Our most exclusive accommodation with private pool, dedicated butler, and unmatched privacy.",
    size: "120 m²",
    price: "KES 45,000",
  },
];

export const Rooms = () => {
  return (
    <section id="rooms" className="section-padding bg-secondary/50">
      <div className="container-resort">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Accommodations
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-light italic">
            Luxury Interiors
          </h2>
          <div className="w-12 h-px bg-accent mx-auto mt-6" />
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {rooms.map((room) => (
            <div
              key={room.title}
              className="group bg-background overflow-hidden shadow-soft hover:shadow-card transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <p className="text-accent text-xs tracking-[0.2em] uppercase mb-2">{room.subtitle}</p>
                <h3 className="font-serif text-2xl text-foreground mb-3 font-light italic">{room.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-light">
                  {room.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">From</p>
                    <p className="text-foreground font-serif text-xl">{room.price}<span className="text-sm text-muted-foreground">/night</span></p>
                  </div>
                  <a 
                    href="#contact" 
                    className="text-accent hover:text-primary transition-colors inline-flex items-center gap-2 text-sm font-medium tracking-wide"
                  >
                    Details <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};