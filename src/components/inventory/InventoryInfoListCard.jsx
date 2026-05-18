import React from 'react';
import { ShoppingCart, Trash2, Layers, AlertCircle } from 'lucide-react';

const InventoryInfoListCard = ({ title, rows, tone = 'default' }) => {
  const isDanger = tone === 'danger';
  
  return (
    <section className={`rounded-[20px] border border-[#E2E8F0] bg-white overflow-hidden shadow-[0px_4px_24px_rgba(0,0,0,0.02)] ${isDanger ? 'border-t-4 border-t-[#BE123C]' : ''}`}>
      <div className="p-5">
        <header className="flex items-center gap-2 mb-4">
          {isDanger ? (
            <Layers className="text-[#BE123C]" size={20} />
          ) : (
            <AlertCircle className="text-[#5949BE]" size={20} />
          )}
          <h3 className={`text-[15px] font-bold ${isDanger ? 'text-[#BE123C]' : 'text-[#1E293B]'}`}>{title}</h3>
        </header>

        {isDanger && (
          <p className="text-[12px] font-medium text-[#94A3B8] mb-6 leading-relaxed">
            These items risk negative stock. Please increase quantities.
          </p>
        )}

        <div className="space-y-4">
          {rows.map((row) => (
            <div 
              key={row.id} 
              className={`flex items-center justify-between p-3 rounded-2xl transition-all duration-300 ${isDanger ? 'bg-white border-b border-[#F1F5F9] last:border-0' : 'bg-[#F8FAFC] border border-[#F1F5F9] hover:bg-[#F1F5F9]'}`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${isDanger ? 'bg-[#F8FAFC]' : 'bg-white shadow-sm'}`}>
                  {isDanger ? (
                    <Trash2 size={16} className="text-[#94A3B8]" />
                  ) : (
                    <ShoppingCart size={16} className="text-[#5949BE]" />
                  )}
                </div>
                <div>
                  <p className="text-[13px] font-bold text-[#1E293B]">{row.name}</p>
                  <p className={`text-[11px] font-bold uppercase tracking-tight ${isDanger ? 'text-[#94A3B8]' : 'text-[#CA8A04]'}`}>
                    {row.meta}
                  </p>
                </div>
              </div>

              {isDanger && (
                <span className="text-[18px] font-black text-[#BE123C]">{row.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InventoryInfoListCard;
