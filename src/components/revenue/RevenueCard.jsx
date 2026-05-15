import React from 'react';

const RevenueCard = ({ title, amount, icon: Icon, color, iconBg }) => {
  return (
    <div className="flex-1 min-w-[200px] bg-white rounded-xl border border-[#E2E8F0] p-4 flex items-center gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer group">
      <div 
        className="w-12 h-12 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: iconBg }}
      >
        <Icon size={24} style={{ color: color }} />
      </div>
      <div>
        <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider mb-1">{title}</p>
        <p className="text-[18px] font-bold text-[#1E293B]">{amount}</p>
      </div>
    </div>
  );
};

export default RevenueCard;
