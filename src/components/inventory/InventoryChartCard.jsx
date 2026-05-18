import React from 'react';
import { useNavigate } from 'react-router';
import { ArrowUpRight } from 'lucide-react';

const InventoryChartCard = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm mb-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-[16px] font-bold text-[#1E293B]">Inventory Movement Overview</h3>
          <p className="text-[12px] text-[#94A3B8] mt-1 font-medium">Real-time tracking of stock inflow and outflow</p>
        </div>
        <button 
          onClick={() => navigate('/dashboard/inventory/stock-card')}
          className="flex items-center gap-2 px-4 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-[13px] font-bold text-[#5949BE] hover:bg-[#F1F5F9] transition-all group"
        >
          View Full Report
          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      <div className="h-[300px] w-full flex items-end gap-4 px-2">
        {/* Simple Bar Chart Representation */}
        {[60, 45, 75, 50, 90, 65, 80, 55, 70, 85].map((height, i) => (
          <div key={i} className="flex-1 flex flex-col gap-2 items-center">
            <div className="w-full bg-[#5949BE]/10 rounded-t-md relative overflow-hidden group flex items-end" style={{ height: `${height}%` }}>
                <div className="absolute inset-0 bg-[#5949BE] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500" />
            </div>
            <span className="text-[10px] font-bold text-[#94A3B8]">Oct {15 + i}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryChartCard;
