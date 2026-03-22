import Image from "next/image";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { Bed, Bath, Square, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const dynamic = 'force-dynamic';

export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const property = await prisma.property.findUnique({
    where: { id },
  });

  if (!property) {
    notFound();
  }

  let images: string[] = ["/placeholder.jpg"];
  try {
    const parsed = JSON.parse(property.images);
    if (parsed.length > 0) images = parsed;
  } catch (e) {}

  return (
    <div className="flex flex-col w-full font-sans bg-gray-50 pb-24">
      
      {/* Property Hero Gallery */}
      <section className="w-full pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 h-[400px] md:h-[600px] overflow-hidden">
          <div className="relative h-full lg:col-span-2">
            <Image src={images[0] || "/placeholder.jpg"} alt={property.title} fill className="object-cover" />
          </div>
          <div className="hidden lg:grid grid-rows-2 gap-2 h-full">
            <div className="relative h-full">
              <Image src={images[1] || images[0] || "/placeholder.jpg"} alt={property.title} fill className="object-cover" />
            </div>
            <div className="relative h-full">
              <Image src={images[2] || images[0] || "/placeholder.jpg"} alt={property.title} fill className="object-cover" />
              {images.length > 3 && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center cursor-pointer">
                  <span className="text-white text-xl font-bold">+{images.length - 3} Photos</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Property Details Core */}
      <div className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2">
            <div className="mb-6 flex gap-3">
              <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow">
                For {property.status}
              </span>
              <span className="bg-secondary text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow">
                {property.type}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-4 leading-tight">
              {property.title}
            </h1>
            
            <div className="flex items-center gap-2 text-gray-500 mb-8 mt-2 text-lg">
              <MapPin className="text-primary shrink-0" />
              <span>{property.location}</span>
            </div>

            <h2 className="text-4xl font-bold text-primary mb-10 pb-10 border-b border-gray-200">
              {property.price}
            </h2>

            <div className="flex flex-wrap gap-8 py-6 mb-10 border-b border-gray-200">
              {property.bedrooms !== null && (
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Bed size={28} />
                  </div>
                  <div>
                    <h4 className="text-gray-500 font-medium">Bedrooms</h4>
                    <p className="text-xl font-bold text-secondary">{property.bedrooms}</p>
                  </div>
                </div>
              )}
              {property.bathrooms !== null && (
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Bath size={28} />
                  </div>
                  <div>
                    <h4 className="text-gray-500 font-medium">Bathrooms</h4>
                    <p className="text-xl font-bold text-secondary">{property.bathrooms}</p>
                  </div>
                </div>
              )}
              {property.area && (
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Square size={28} />
                  </div>
                  <div>
                    <h4 className="text-gray-500 font-medium">Area Area</h4>
                    <p className="text-xl font-bold text-secondary">{property.area}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-bold text-secondary mb-6">Property Description</h3>
              <div className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                {property.description}
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-bold text-secondary mb-6">Features & Amenities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Premium Location', 'Luxury Finishing', '24/7 Security', 'Built-in Wardrobes', 'Central A/C', 'Covered Parking'].map((amenity, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-primary" size={20} />
                    <span className="text-gray-700 font-medium">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 sticky top-32">
              <h3 className="text-2xl font-bold text-secondary mb-2">Interested?</h3>
              <p className="text-gray-500 mb-8">Contact our experts about this property.</p>
              
              <form className="flex flex-col gap-4">
                <input type="text" placeholder="Your Name" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white" required />
                <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white" required />
                <input type="tel" placeholder="Phone Number" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white" required />
                <textarea rows={4} placeholder="I want to inquire about this property..." defaultValue={`I want to inquire about ${property.title}`} className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white resize-none" required></textarea>
                <Button size="lg" className="w-full bg-primary hover:bg-primary-dark text-white rounded-md py-6 mt-2">
                  Send Inquiry
                </Button>
              </form>

              <div className="mt-8 border-t border-gray-100 pt-6">
                <a href="tel:+971502057334" className="w-full flex items-center justify-center gap-3 text-secondary font-bold hover:text-primary transition-colors py-3 border border-secondary rounded-md hover:border-primary">
                  Call Us Directly
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
