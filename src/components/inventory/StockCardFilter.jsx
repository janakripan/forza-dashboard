import React from 'react';
import { Calendar, User, Search, Download } from 'lucide-react';

const StockCardFilter = () => {
  return (
    <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-sm mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Item Selector</label>
          <select className="w-full px-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-[14px] font-semibold text-[#1E293B] appearance-none focus:outline-none focus:ring-2 focus:ring-[#5949BE]/20 transition-all">
            <option>All Items</option>
            <option>Ergonomic Office Chair</option>
            <option>Mechanical Keyboard</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Date Range</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" size={18} />
            <input 
              type="text" 
              value="Oct 01, 2023 - Oct 31, 2023"
              readOnly
              className="w-full pl-10 pr-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-[13px] font-semibold text-[#1E293B] focus:outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Supplier</label>
          <select className="w-full px-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-[14px] font-semibold text-[#1E293B] appearance-none focus:outline-none focus:ring-2 focus:ring-[#5949BE]/20 transition-all">
            <option>All Suppliers</option>
            <option>Global Parts Co.</option>
          </select>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" size={18} />
            <input 
              type="text" 
              placeholder="Search item" 
              className="w-full pl-10 pr-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-[14px] text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#5949BE]/20 transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-[13px] font-bold text-[#1E293B] hover:bg-[#F1F5F9] transition-colors">
            <Download size={16} />
            Export
          </button>
        </div>
      </div>
    </div>
  );
};

export default StockCardFilter;
