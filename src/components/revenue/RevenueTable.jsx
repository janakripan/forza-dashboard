import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

const RevenueTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  const getTypeStyle = (type) => {
    switch (type) {
      case 'Paid':
        return 'bg-[#E6F9F2] text-[#006443] border border-[#0064431A]';
      case 'Credit Sale':
        return 'bg-[#FFF4E6] text-[#B45309] border border-[#B453091A]';
      case 'Split':
        return 'bg-transparent flex gap-2';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
              <th className="px-6 py-4 text-[12px] font-bold text-[#64748B] uppercase tracking-wider">SL</th>
              <th className="px-6 py-4 text-[12px] font-bold text-[#64748B] uppercase tracking-wider">Date</th>
              <th className="px-6 py-4 text-[12px] font-bold text-[#64748B] uppercase tracking-wider">Invoice #</th>
              <th className="px-6 py-4 text-[12px] font-bold text-[#64748B] uppercase tracking-wider">Customer Name</th>
              <th className="px-6 py-4 text-[12px] font-bold text-[#64748B] uppercase tracking-wider">
                <div className="flex items-center gap-1">
                    Amount <span className="text-[14px]">Ð</span>
                </div>
              </th>
              <th className="px-6 py-4 text-[12px] font-bold text-[#64748B] uppercase tracking-wider">Transaction Type</th>
              <th className="px-6 py-4 text-[12px] font-bold text-[#64748B] uppercase tracking-wider text-center w-10"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F1F5F9]">
            {currentData.map((item, index) => {
              const showSeparator = index > 0 && item.date !== currentData[index - 1].date;
              
              return (
                <React.Fragment key={index}>
                  {showSeparator && (
                    <tr>
                      <td colSpan="7" className="py-2">
                        <div className="border-t border-dashed border-[#CBD5E1] w-full"></div>
                      </td>
                    </tr>
                  )}
                  <tr className="hover:bg-[#F8FAFC] transition-colors group">
                    <td className="px-6 py-4 text-[14px] font-medium text-[#64748B]">{item.sl}</td>
                    <td className="px-6 py-4 text-[14px] font-semibold text-[#1E293B]">{item.date}</td>
                    <td className="px-6 py-4 text-[14px] font-bold text-[#5949BE] hover:underline cursor-pointer">{item.invoiceNo}</td>
                    <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-[#E2E8F0] flex items-center justify-center text-[12px] font-bold text-[#64748B]">AC</div>
                            <span className="text-[14px] font-semibold text-[#1E293B]">{item.customerName}</span>
                        </div>
                    </td>
                    <td className="px-6 py-4 text-[15px] font-black text-[#1E293B]">{item.amount}</td>
                    <td className="px-6 py-4">
                      {item.type === 'Split' ? (
                        <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-lg text-[13px] font-bold bg-[#E6F9F2] text-[#006443] border border-[#0064431A]">
                                {item.paidAmount}
                            </span>
                            <span className="px-3 py-1 rounded-lg text-[13px] font-bold bg-[#FFF4E6] text-[#B45309] border border-[#B453091A]">
                                {item.creditAmount}
                            </span>
                        </div>
                      ) : (
                        <span className={`px-4 py-1.5 rounded-lg text-[13px] font-bold min-w-[100px] inline-block text-center ${getTypeStyle(item.type)}`}>
                          {item.type}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                        <button className="p-1.5 hover:bg-[#E2E8F0] rounded-lg transition-colors text-[#94A3B8] hover:text-[#1E293B]">
                            <MoreHorizontal size={20} />
                        </button>
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-[14px] font-medium text-[#64748B]">
          Showing Page <span className="font-bold text-[#1E293B]">{currentPage}</span> of <span className="font-bold text-[#1E293B]">{totalPages}</span>
        </p>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-[#E2E8F0] bg-white text-[#64748B] hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
          >
            <ChevronLeft size={18} />
          </button>
          
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-9 h-9 rounded-lg text-[14px] font-bold transition-all ${
                currentPage === i + 1 
                  ? 'bg-[#5949BE] text-white shadow-[0_4px_12px_rgba(89,73,190,0.4)]' 
                  : 'bg-white text-[#64748B] border border-[#E2E8F0] hover:bg-slate-50 shadow-sm'
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button 
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg border border-[#E2E8F0] bg-white text-[#64748B] hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RevenueTable;
