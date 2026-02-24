import { Button } from "@/components/ui/button";
import heroImage from "@/assets/swimming-pool-beach-luxury-hotel-type-entertainment-complex-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer-turkey.jpg";
import { useState } from "react";
import { Calendar, Users, ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Hero = () => {
  const { toast } = useToast();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckAvailability = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!checkIn || !checkOut) {
      toast({
        variant: "destructive",
        title: "Selection Required",
        description: "Please select both check-in and check-out dates.",
      });
      return;
    }

    setIsLoading(true);

    try {


      const response = await fetch("https://mailer-d1cl.vercel.app/handler", { // Remove '/api'
  method: "GET",
  headers: {
    // You can keep this, but since you are on Vercel, 
    // it's better to remove it unless you have a specific reason to keep it.
    "Content-Type": "application/json", 
  },
});

      if (!response.ok) throw new Error("Server error");

      const data = await response.json();

      // Format room details from the JSON response
      const roomSummary = data.room_types
        .map((r: any) => `${r.name} (${r.available} left at ${r.price})`)
        .join("\n");

      toast({
        title: `Status: ${data.resort_status.toUpperCase()}`,
        description: `Total rooms: ${data.rooms_remaining}. \n${roomSummary}`,
      });

    } catch (error) {
      toast({
        variant: "destructive",
        title: "Offline",
        description: "Could not connect to the booking server.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sunset Ridge Resort overlooking Kenyan hills"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        <p className="text-primary-foreground/80 text-sm tracking-[0.3em] uppercase mb-6 font-light">
          Luxury Retreat in Kiambu
        </p>

        <h1 className="font-serif text-primary-foreground mb-6 text-shadow-lg drop-shadow-xl">
          <span className="block text-5xl md:text-7xl lg:text-8xl font-light italic tracking-tight transform transition-transform duration-500 hover:scale-105">
            Sunset Ridge
          </span>
          <span className="block text-lg md:text-xl mt-4 tracking-[0.25em] font-sans font-light uppercase">
            Hotel & Resort
          </span>
        </h1>

        <p className="text-primary-foreground/85 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light mb-12">
          Discover tranquility in the heart of Kenya's highlands. Where every sunset tells a story.
        </p>

        {/* Booking Form Wrapper */}
        <form 
          onSubmit={handleCheckAvailability}
          className="bg-background/95 backdrop-blur-sm rounded-sm shadow-card p-4 md:p-6 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            {/* Check In */}
            <div className="text-left">
              <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                Check In
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="date"
                  required
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-border bg-background text-foreground text-sm focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
            </div>

            {/* Check Out */}
            <div className="text-left">
              <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                Check Out
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="date"
                  required
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-border bg-background text-foreground text-sm focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="text-left">
              <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                Guests
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full pl-10 pr-8 py-3 border border-border bg-background text-foreground text-sm appearance-none focus:ring-1 focus:ring-primary outline-none"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5+ Guests</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            {/* Submit */}
            <Button 
              type="submit" 
              variant="hero" 
              size="lg" 
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "Checking..." : "Check Availability"}
            </Button>
          </div>
        </form>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
};
// import { Button } from "@/components/ui/button";
// import heroImage from "@/assets/swimming-pool-beach-luxury-hotel-type-entertainment-complex-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer-turkey.jpg";
// import { useState } from "react";
// import { Calendar, Users, ChevronDown } from "lucide-react";

// export const Hero = () => {
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [guests, setGuests] = useState("2");

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden"
//     >
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img
//           src={heroImage}
//           alt="Sunset Ridge Resort overlooking Kenyan hills"
//           className="w-full h-full object-cover"
//         />

//         {/*  Darker overlay so the background is not too bright */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/45" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
//         {/* Subtitle */}
//         <p className="text-primary-foreground/80 text-sm tracking-[0.3em] uppercase mb-6 font-light">
//           Luxury Retreat in Kiambu
//         </p>

//         {/* Title */}
//         <h1 className="font-serif text-primary-foreground mb-6 text-shadow-lg drop-shadow-xl">
//           <span className="block text-5xl md:text-7xl lg:text-8xl font-light italic tracking-tight transform transition-transform duration-500 hover:scale-105">
//             Sunset Ridge
//           </span>
//           <span className="block text-lg md:text-xl mt-4 tracking-[0.25em] font-sans font-light uppercase">
//             Hotel & Resort
//           </span>
//         </h1>

//         {/* Tagline */}
//         <p className="text-primary-foreground/85 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light mb-12">
//           Discover tranquility in the heart of Kenya's highlands. Where every sunset tells a story.
//         </p>

//         {/* Booking Form */}
//         <div className="bg-background/95 backdrop-blur-sm rounded-sm shadow-card p-4 md:p-6 max-w-4xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
//             {/* Check In */}
//             <div className="text-left">
//               <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
//                 Check In
//               </label>
//               <div className="relative">
//                 <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
//                 <input
//                   type="date"
//                   value={checkIn}
//                   onChange={(e) => setCheckIn(e.target.value)}
//                   className="w-full pl-10 pr-4 py-3 border border-border bg-background text-foreground text-sm focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none"
//                 />
//               </div>
//             </div>

//             {/* Check Out */}
//             <div className="text-left">
//               <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
//                 Check Out
//               </label>
//               <div className="relative">
//                 <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
//                 <input
//                   type="date"
//                   value={checkOut}
//                   onChange={(e) => setCheckOut(e.target.value)}
//                   className="w-full pl-10 pr-4 py-3 border border-border bg-background text-foreground text-sm focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none"
//                 />
//               </div>
//             </div>

//             {/* Guests */}
//             <div className="text-left">
//               <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
//                 Guests
//               </label>
//               <div className="relative">
//                 <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
//                 <select
//                   value={guests}
//                   onChange={(e) => setGuests(e.target.value)}
//                   className="w-full pl-10 pr-8 py-3 border border-border bg-background text-foreground text-sm appearance-none focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none"
//                 >
//                   <option value="1">1 Guest</option>
//                   <option value="2">2 Guests</option>
//                   <option value="3">3 Guests</option>
//                   <option value="4">4 Guests</option>
//                   <option value="5">5+ Guests</option>
//                 </select>
//                 <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
//               </div>
//             </div>

//             {/* Submit */}
//             <Button variant="hero" size="lg" className="w-full">
//               Check Availability
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <a
//         href="#about"
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-float"
//         aria-label="Scroll down"
//       >
//         <ChevronDown size={28} />
//       </a>
//     </section>
//   );
// };


