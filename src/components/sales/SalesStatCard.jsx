import React from 'react';
import { 
  CircleDollarSign, 
  RotateCcw, 
  ShoppingBag, 
  BookOpenCheck,
  TrendingUp,
  TrendingDown
} from 'lucide-react';
import { useNavigate } from 'react-router';


/**
 * SalesStatCard Component
 * Renders a statistic card specifically for Sales Analysis.
 * 
 * @param {Object} props
 * @param {string} props.title - The title of the card
 * @param {string} props.amount - The main value to display
 * @param {string} props.subtitle - Subtitle or additional info
 * @param {string} props.icon - Type of icon to show
 * @param {string} props.color - Theme color for the icon background
 */
const SalesStatCard = ({ title, amount, subtitle, icon, color }) => {
  const navigate = useNavigate();
  
  const isRevenue = title === "Total Sales";
  const isOutstanding = title === "Customer Outstanding";
  const isClickable = isRevenue || isOutstanding;

  const handleClick = () => {
    if (isRevenue) navigate('/dashboard/revenue-details');
    if (isOutstanding) navigate('/dashboard/customer-outstanding');
  };

  const IconComponent = {
    'total-sales': CircleDollarSign,
    'returns': RotateCcw,
    'net-sales': ShoppingBag,
    'outstanding': BookOpenCheck,
  }[icon] || CircleDollarSign;

  return (
    <div 
      onClick={handleClick}
      className={`bg-white rounded-2xl p-5 shadow-[0px_8px_24px_rgba(149,157,165,0.06)] flex flex-col gap-4 flex-1 min-w-[240px] border border-gray-50 transition-all duration-300 ${
        isClickable ? 'cursor-pointer hover:shadow-xl hover:-translate-y-1' : ''
      }`}
    >
      <div className="flex justify-between items-start">
        <span className="text-[#8E8E8E] text-[13px] font-semibold tracking-tight uppercase">{title}</span>
        <div 
          className="p-2.5 rounded-xl transition-transform hover:scale-110 cursor-default shadow-sm"
          style={{ backgroundColor: `${color}10`, color: color }}
        >
          <IconComponent size={22} strokeWidth={2} />
        </div>
      </div>
      
      <div className="flex flex-col gap-1.5">
        <h3 className="text-[28px] font-extrabold text-[#081021] leading-none tracking-tight">
          <span className="text-[15px] font-bold text-[#94A3B8] mr-1.5 font-mono">Ð</span>
          {amount}
        </h3>
        <div className="flex items-center gap-1.5">
          {icon === 'returns' ? (
             <TrendingDown size={14} className="text-[#EF4444]" />
          ) : (
             <TrendingUp size={14} className="text-[#10B981]" />
          )}
          <span className={`text-[12px] font-bold ${icon === 'returns' ? 'text-[#EF4444]' : 'text-[#10B981]'}`}>
            {subtitle}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SalesStatCard;
