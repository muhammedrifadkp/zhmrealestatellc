import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Square, MapPin } from "lucide-react";

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  bedrooms?: number | null;
  bathrooms?: number | null;
  area?: string | null;
  images: string;
  type: string;
  status: string;
}

export function PropertyCard({
  id,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
  images,
  type,
  status,
}: PropertyCardProps) {
  let mainImage = "/placeholder.jpg";
  try {
    const parsedImages = JSON.parse(images);
    if (parsedImages.length > 0) mainImage = parsedImages[0];
  } catch (e) {
    // leave as placeholder
  }

  return (
    <div className="group rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow">
            {status}
          </span>
          <span className="bg-secondary text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow">
            {type}
          </span>
        </div>
        
        <Link href={`/properties/${id}`} className="block h-full">
          <Image
            src={mainImage}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
          />
        </Link>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start gap-2 text-gray-500 text-sm mb-3 font-medium">
          <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
          <span className="line-clamp-1">{location}</span>
        </div>
        
        <Link href={`/properties/${id}`}>
          <h3 className="text-xl font-bold text-secondary mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-2xl font-bold text-primary mb-6 mt-auto">
          {price}
        </p>

        {/* Specs */}
        <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-100 mt-auto">
          {bedrooms && (
            <div className="flex items-center gap-2 text-gray-600">
              <Bed size={18} className="text-primary" />
              <span className="text-sm font-semibold">{bedrooms} Beds</span>
            </div>
          )}
          {bathrooms && (
            <div className="flex items-center gap-2 text-gray-600">
              <Bath size={18} className="text-primary" />
              <span className="text-sm font-semibold">{bathrooms} Baths</span>
            </div>
          )}
          {area && (
            <div className="flex items-center gap-2 text-gray-600">
              <Square size={18} className="text-primary" />
              <span className="text-sm font-semibold">{area}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
