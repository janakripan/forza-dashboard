import React from 'react';
import { Search, SlidersHorizontal, Download } from 'lucide-react';

const InventoryFilters = () => {
  return (
    <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-sm mb-6 flex flex-col lg:flex-row items-center justify-between gap-6">
      <div className="relative flex-1 w-full lg:max-w-[400px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" size={18} />
        <input 
          type="text" 
          placeholder="Search product name, SKU..." 
          className="w-full pl-10 pr-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-[14px] text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#5949BE]/20 transition-all"
        />
      </div>

      <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
        <div className="relative min-w-[180px]">
          <select className="w-full pl-4 pr-10 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-[14px] font-semibold text-[#1E293B] appearance-none focus:outline-none focus:ring-2 focus:ring-[#5949BE]/20 transition-all">
            <option>All Suppliers</option>
            <option>Global Parts Co.</option>
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <SlidersHorizontal size={16} className="text-[#64748B]" />
          </div>
        </div>

        <div className="relative min-w-[180px]">
          <select className="w-full pl-4 pr-10 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-[14px] font-semibold text-[#1E293B] appearance-none focus:outline-none focus:ring-2 focus:ring-[#5949BE]/20 transition-all">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Furniture</option>
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <SlidersHorizontal size={16} className="text-[#64748B]" />
          </div>
        </div>

        <button className="flex items-center gap-2 px-6 py-2.5 bg-[#5949BE] text-white rounded-lg text-[14px] font-bold hover:bg-[#4B3E9F] transition-all shadow-md shadow-[#5949BE]/20">
          <Download size={18} />
          Export Data
        </button>
      </div>
    </div>
  );
};

export default InventoryFilters;
