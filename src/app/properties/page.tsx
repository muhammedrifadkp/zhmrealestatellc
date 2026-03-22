import Image from "next/image";
import { PropertyCard } from "@/components/ui/property-card";
import prisma from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export default async function PropertiesPage() {
  const properties = await prisma.property.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="flex flex-col w-full font-sans">
      
      {/* Page Header */}
      <section className="relative h-[400px] flex items-center justify-center bg-secondary">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" 
            alt="Properties Showcase" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Latest Properties</h1>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>
      </section>

      {/* Properties List */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-3xl font-bold text-secondary">Showing {properties.length} Properties</h2>
            
            <div className="flex gap-4">
              <select className="border border-gray-200 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm bg-white">
                <option>All Types</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Townhouse</option>
                <option>Office</option>
              </select>
              <select className="border border-gray-200 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm bg-white">
                <option>All Status</option>
                <option>Buy</option>
                <option>Rent</option>
              </select>
            </div>
          </div>
          
          {properties.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-secondary mb-2">No properties found</h3>
              <p className="text-gray-500">Check back later for new listings.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {properties.map((prop: any) => (
                <PropertyCard
                  key={prop.id}
                  id={prop.id}
                  title={prop.title}
                  location={prop.location}
                  price={prop.price}
                  bedrooms={prop.bedrooms}
                  bathrooms={prop.bathrooms}
                  area={prop.area}
                  images={prop.images}
                  type={prop.type}
                  status={prop.status}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
