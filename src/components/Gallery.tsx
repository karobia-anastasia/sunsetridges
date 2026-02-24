import heroImage from "@/assets/image3.jpg";
import roomDeluxe from "@/assets/image1.jpg";
import roomVilla from "@/assets/image2.jpg";
import roomPresidential from "@/assets/image3.jpg";

const galleryImages = [
  { src: heroImage, alt: "Resort Exterior", span: "col-span-2 row-span-2" },
  { src: roomDeluxe, alt: "Luxury Suite", span: "" },
  { src: roomVilla, alt: "Garden Villa", span: "" },
  { src: roomPresidential, alt: "Pool View", span: "col-span-2" },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-resort">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Visual Journey
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-light italic">
            Discover Our Resort
          </h2>
          <div className="w-12 h-px bg-accent mx-auto mt-6" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-resort-dark/0 group-hover:bg-resort-dark/40 transition-colors duration-500 flex items-center justify-center">
                <p className="text-primary-foreground font-serif text-xl italic opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};