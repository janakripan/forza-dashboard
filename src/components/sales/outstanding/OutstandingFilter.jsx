import React from 'react';
import { Calendar, Hourglass, ShieldCheck } from 'lucide-react';

const OutstandingFilter = ({ filters, onFilterChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm mb-8 p-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full lg:w-1/2">
        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Credit Status</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" size={18} />
            <select 
              name="status"
              value={filters.status}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-[14px] font-semibold text-[#1E293B] appearance-none focus:outline-none focus:ring-2 focus:ring-[#5949BE]/20 transition-all"
            >
              <option value="All Statuses">All Statuses</option>
              <option value="Exceeded">Exceeded</option>
              <option value="Within Limit">Within Limit</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Credit Age</label>
          <div className="relative">
            <Hourglass className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" size={18} />
            <select 
              name="age"
              value={filters.age}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-[14px] font-semibold text-[#1E293B] appearance-none focus:outline-none focus:ring-2 focus:ring-[#5949BE]/20 transition-all"
            >
              <option value="All Ages">All Ages</option>
              <option value="0-30 Days">0-30 Days</option>
              <option value="31-60 Days">31-60 Days</option>
              <option value="60+ Days">60+ Days</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Limit Type</label>
          <div className="relative">
            <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" size={18} />
            <select 
              name="limitType"
              value={filters.limitType}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-[14px] font-semibold text-[#1E293B] appearance-none focus:outline-none focus:ring-2 focus:ring-[#5949BE]/20 transition-all"
            >
              <option value="All">All</option>
              <option value="Type A">Type A</option>
              <option value="Type B">Type B</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutstandingFilter;
