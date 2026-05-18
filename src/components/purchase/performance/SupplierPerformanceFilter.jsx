import React from "react";
import { Search, History, Calendar, User, Download } from "lucide-react";

const SupplierPerformanceFilter = ({
  searchTerm,
  onSearchChange,
  dateRange,
  onDateRangeChange,
  supplier,
  onSupplierChange,
}) => {
  return (
    <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-sm mb-6 flex flex-wrap items-center gap-6">
      <div className="relative flex-1 min-w-[280px]">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]"
          size={18}
        />
        <input
          type="text"
          placeholder="Search suppliers..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-full text-[14px] text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#5949BE]/20 transition-all"
        />
      </div>

      <button className="p-2 text-[#64748B] hover:bg-[#F1F5F9] rounded-lg transition-colors">
        <History size={20} />
      </button>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <span className="text-[13px] font-bold text-[#64748B]">
            Date Range:
          </span>
          <div className="relative">
            <Calendar
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]"
              size={16}
            />
            <select
              value={dateRange}
              onChange={(e) => onDateRangeChange(e.target.value)}
              className="pl-9 pr-8 py-1.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-[13px] font-bold text-[#1E293B] appearance-none focus:outline-none"
            >
              <option>Last 30 Days</option>
              <option>Last 6 Months</option>
              <option>Year to Date</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[13px] font-bold text-[#64748B]">
            Supplier:
          </span>
          <div className="relative">
            <User
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]"
              size={16}
            />
            <select
              value={supplier}
              onChange={(e) => onSupplierChange(e.target.value)}
              className="pl-9 pr-8 py-1.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-[13px] font-bold text-[#1E293B] appearance-none focus:outline-none"
            >
              <option>All Suppliers</option>
              <option>Global Parts Co.</option>
              <option>TechLogistics</option>
              <option>Apex Manufacturing</option>
            </select>
          </div>
        </div>
      </div>

      <button className="flex items-center gap-2 px-4 py-1.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-[13px] font-bold text-[#1E293B] hover:bg-[#F1F5F9] transition-colors ml-auto">
        <Download size={16} />
        Export
      </button>
    </div>
  );
};

export default SupplierPerformanceFilter;
