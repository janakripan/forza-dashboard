import React from 'react';
import { Package, AlertTriangle, RefreshCcw, MinusCircle } from 'lucide-react';

const toneStyles = (tone) => {
  switch (tone) {
    case 'warning':
      return { 
        icon: AlertTriangle, 
        iconColor: '#D97706', 
        bgColor: '#FFFBEB', 
        borderColor: '#FEF3C7',
        blob: 'bg-amber-50'
      };
    case 'success':
      return { 
        icon: RefreshCcw, 
        iconColor: '#059669', 
        bgColor: '#ECFDF5', 
        borderColor: '#D1FAE5',
        blob: 'bg-emerald-50'
      };
    case 'danger':
      return { 
        icon: MinusCircle, 
        iconColor: '#DC2626', 
        bgColor: '#FEF2F2', 
        borderColor: '#FEE2E2',
        blob: 'bg-rose-50'
      };
    default:
      return { 
        icon: Package, 
        iconColor: '#5949BE', 
        bgColor: '#F5F3FF', 
        borderColor: '#EDE9FE',
        blob: 'bg-indigo-50'
      };
  }
};

const InventorySummaryCards = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card) => {
        const style = toneStyles(card.tone);
        const Icon = style.icon;
        
        return (
          <div 
            key={card.id} 
            className="relative overflow-hidden bg-white rounded-[16px] border border-[#E2E8F0] p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] group transition-all duration-300 hover:shadow-[0px_8px_30px_rgba(0,0,0,0.06)]"
          >
            {/* Background Blob Effect */}
            <div className={`absolute -right-6 -top-6 w-32 h-32 rounded-full ${style.blob} opacity-50 blur-2xl group-hover:scale-110 transition-transform duration-500`} />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[13px] font-bold text-[#64748B] uppercase tracking-wider">{card.title}</span>
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm border"
                  style={{ backgroundColor: style.bgColor, borderColor: style.borderColor }}
                >
                  <Icon size={20} color={style.iconColor} strokeWidth={2.5} />
                </div>
              </div>
              
              <div className="flex flex-col gap-1">
                <h3 className="text-[28px] font-black text-[#1E293B] leading-none tracking-tight">
                  {card.value}
                </h3>
                <p className={`text-[12px] font-bold ${card.tone === 'danger' ? 'text-[#DC2626]' : 'text-[#64748B]'}`}>
                  {card.meta}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InventorySummaryCards;
