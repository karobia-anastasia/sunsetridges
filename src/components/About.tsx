import roomVilla from "@/assets/img1 (4).jpeg";
import logo from "@/assets/logo.jpeg";

export const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-resort">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image with overlay */}
          <div className="relative">
            <img
              src={roomVilla}
              alt="Resort Experience"
              className="w-full aspect-[4/5] object-cover"
            />
            {/* Floating Logo Card */}
            <div className="absolute -bottom-8 -right-8 md:right-8 bg-background p-6 shadow-card">
              <img
                src={logo}
                alt="Sunset Ridge"
                className="w-20 h-20 object-cover mb-3"
              />
              <p className="font-serif text-lg italic text-foreground">Since 2009</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:pl-8">
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              About Us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-light italic mb-6">
              A best place to enjoy your life
            </h2>
            
            <div className="w-12 h-px bg-accent mb-8" />

            <p className="text-muted-foreground leading-relaxed mb-6 font-light">
              Nestled amidst the rolling hills of Kiambu, Sunset Ridge Resort offers an unparalleled retreat 
              where luxury meets nature. Our commitment to exceptional service and authentic Kenyan hospitality 
              creates experiences that linger in the heart long after departure.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 font-light">
              Every corner of our resort is designed to immerse you in tranquility—from our thoughtfully 
              appointed rooms to our world-class dining and serene spa experiences. Here, time slows 
              down, and life's simple pleasures take center stage.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="font-serif text-3xl md:text-4xl text-accent font-light">15+</p>
                <p className="text-muted-foreground text-sm mt-1">Years of Excellence</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-accent font-light">5★</p>
                <p className="text-muted-foreground text-sm mt-1">Guest Rating</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-accent font-light">10K+</p>
                <p className="text-muted-foreground text-sm mt-1">Happy Guests</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};