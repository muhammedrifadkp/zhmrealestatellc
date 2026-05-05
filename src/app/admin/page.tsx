import { Home, MessageSquare, PlusCircle } from 'lucide-react';
import Link from 'next/link';

export default async function AdminDashboard() {
  const propertyCount = 0;
  const messageCount = 0;

  return (
    <div>
      <h1 className="text-3xl font-bold text-secondary mb-8">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        
        {/* Properties Stat */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-6">
          <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center shrink-0">
            <Home size={30} />
          </div>
          <div>
            <p className="text-gray-500 font-medium mb-1">Total Properties</p>
            <h3 className="text-3xl font-bold text-secondary">{propertyCount}</h3>
          </div>
        </div>

        {/* Messages Stat */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-6">
          <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center shrink-0">
            <MessageSquare size={30} />
          </div>
          <div>
            <p className="text-gray-500 font-medium mb-1">New Messages</p>
            <h3 className="text-3xl font-bold text-secondary">{messageCount}</h3>
          </div>
        </div>

      </div>

      {/* Quick Actions */}
      <h2 className="text-xl font-bold text-secondary mb-6">Quick Actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
        <Link href="/admin/properties/new" className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 hover:border-primary transition-colors group">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
            <PlusCircle size={24} />
          </div>
          <div>
            <h4 className="font-bold text-secondary text-lg">Add New Property</h4>
            <p className="text-gray-500 text-sm">Create a new property listing</p>
          </div>
        </Link>
        <Link href="/admin/messages" className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 hover:border-primary transition-colors group">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
            <MessageSquare size={24} />
          </div>
          <div>
            <h4 className="font-bold text-secondary text-lg">View Messages</h4>
            <p className="text-gray-500 text-sm">Check customer inquiries</p>
          </div>
        </Link>
      </div>

    </div>
  );
}
