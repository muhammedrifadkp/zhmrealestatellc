"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminProperties() {
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProperties = async () => {
    try {
      const res = await fetch("/api/properties");
      if (res.ok) {
        const data = await res.json();
        setProperties(data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this property?")) return;
    
    try {
      const res = await fetch(`/api/properties/${id}`, { method: "DELETE" });
      if (res.ok) {
        fetchProperties();
      }
    } catch (e) {
      console.error("Delete failed", e);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-secondary">Manage Properties</h1>
        <Button asChild className="bg-primary hover:bg-primary-dark">
          <Link href="/admin/properties/new">
            <Plus size={18} className="mr-2" /> Add Property
          </Link>
        </Button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="p-4 font-semibold text-gray-600 text-sm">Image</th>
                <th className="p-4 font-semibold text-gray-600 text-sm">Title</th>
                <th className="p-4 font-semibold text-gray-600 text-sm">Price</th>
                <th className="p-4 font-semibold text-gray-600 text-sm">Type</th>
                <th className="p-4 font-semibold text-gray-600 text-sm">Status</th>
                <th className="p-4 font-semibold text-gray-600 text-sm text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-gray-500">Loading properties...</td>
                </tr>
              ) : properties.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-gray-500">No properties found. <Link href="/admin/properties/new" className="text-primary underline">Add one</Link></td>
                </tr>
              ) : (
                properties.map((prop) => {
                  let img = "/placeholder.jpg";
                  try {
                    const parsed = JSON.parse(prop.images);
                    if (parsed.length > 0) img = parsed[0];
                  } catch (e) {}

                  return (
                    <tr key={prop.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                      <td className="p-4">
                        <div className="w-16 h-12 relative rounded overflow-hidden">
                          <Image src={img} alt={prop.title} fill className="object-cover" />
                        </div>
                      </td>
                      <td className="p-4 font-medium text-secondary max-w-[200px] truncate">{prop.title}</td>
                      <td className="p-4 text-primary font-bold">{prop.price}</td>
                      <td className="p-4 text-sm text-gray-600">{prop.type}</td>
                      <td className="p-4 text-sm text-gray-600">
                        <span className="px-2 py-1 bg-gray-100 rounded-md text-xs font-semibold">{prop.status}</span>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex justify-end gap-2">
                          <Button asChild size="sm" variant="outline" className="h-8 px-2">
                            <Link href={`/admin/properties/${prop.id}`}>
                              <Edit size={16} />
                            </Link>
                          </Button>
                          <Button size="sm" variant="destructive" className="h-8 px-2" onClick={() => handleDelete(prop.id)}>
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
