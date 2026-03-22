"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AddProperty() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    type: "Apartment",
    status: "Buy",
    bedrooms: "",
    bathrooms: "",
    area: "",
    images: "",
    featured: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Convert comma separated images string to array
    const imagesArray = formData.images
      .split(",")
      .map((i) => i.trim())
      .filter((i) => i !== "");

    try {
      const res = await fetch("/api/properties", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, images: imagesArray }),
      });

      if (res.ok) {
        router.push("/admin/properties");
        router.refresh();
      } else {
        alert("Failed to create property");
      }
    } catch (e) {
      console.error(e);
      alert("Error adding property");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6 flex items-center gap-4">
        <Link href="/admin/properties" className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-3xl font-bold text-secondary">Add New Property</h1>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">Property Title *</label>
              <input required type="text" className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-primary focus:border-primary" 
                value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">Price *</label>
              <input required type="text" placeholder="e.g. AED 1,500,000" className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-primary focus:border-primary"
                value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Location *</label>
            <input required type="text" className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-primary focus:border-primary"
              value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">Property Type</label>
              <select className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-primary focus:border-primary"
                value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Townhouse</option>
                <option>Penthouse</option>
                <option>Office</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">Status</label>
              <select className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-primary focus:border-primary"
                value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})}>
                <option>Buy</option>
                <option>Rent</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">Bedrooms</label>
              <input type="number" className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-primary focus:border-primary"
                value={formData.bedrooms} onChange={e => setFormData({...formData, bedrooms: e.target.value})} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">Bathrooms</label>
              <input type="number" className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-primary focus:border-primary"
                value={formData.bathrooms} onChange={e => setFormData({...formData, bathrooms: e.target.value})} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">Area (sqft)</label>
              <input type="text" className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-primary focus:border-primary"
                value={formData.area} onChange={e => setFormData({...formData, area: e.target.value})} />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Description *</label>
            <textarea required rows={5} className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-primary focus:border-primary resize-none"
              value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Image URLs (comma separated)</label>
            <input type="text" placeholder="https://example.com/img1.jpg, https://example.com/img2.jpg" className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-primary focus:border-primary"
              value={formData.images} onChange={e => setFormData({...formData, images: e.target.value})} />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="featured" className="w-5 h-5 accent-primary"
              checked={formData.featured} onChange={e => setFormData({...formData, featured: e.target.checked})} />
            <label htmlFor="featured" className="text-sm font-semibold text-gray-700 cursor-pointer">Mark as Featured Property</label>
          </div>

          <div className="pt-4 border-t border-gray-100 flex justify-end gap-4">
            <Button type="button" variant="outline" onClick={() => router.push("/admin/properties")}>Cancel</Button>
            <Button type="submit" className="bg-primary hover:bg-primary-dark" disabled={loading}>
              {loading ? "Saving..." : "Save Property"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
