import { Mail, Phone, Calendar } from "lucide-react";

export default async function AdminMessages() {
  const messages: any[] = [];

  return (
    <div>
      <h1 className="text-3xl font-bold text-secondary mb-8">Customer Messages</h1>

      <div className="grid grid-cols-1 gap-6">
        {messages.length === 0 ? (
          <div className="bg-white p-8 rounded-xl border border-gray-100 text-center text-gray-500">
            No messages yet.
          </div>
        ) : (
          messages.map((msg: any) => (
            <div key={msg.id} className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6">
              
              <div className="md:w-1/3 flex flex-col gap-4 border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0 md:pr-6">
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-1">{msg.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={14} />
                    <span>{new Date(msg.createdAt).toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 mt-2">
                  <a href={`mailto:${msg.email}`} className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors text-sm font-medium border border-primary/20 bg-primary/5 px-3 py-2 rounded-md">
                    <Mail size={16} /> {msg.email}
                  </a>
                  {msg.phone && (
                    <a href={`tel:${msg.phone}`} className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors text-sm font-medium border border-primary/20 bg-primary/5 px-3 py-2 rounded-md">
                      <Phone size={16} /> {msg.phone}
                    </a>
                  )}
                </div>
              </div>

              <div className="md:w-2/3">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Message Content</h4>
                <div className="bg-gray-50 p-4 rounded-lg text-gray-700 whitespace-pre-wrap leading-relaxed border border-gray-100">
                  {msg.message}
                </div>
              </div>

            </div>
          ))
        )}
      </div>
    </div>
  );
}
