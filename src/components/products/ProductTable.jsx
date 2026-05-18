import React, { useState } from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

const ProductTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
              <th className="px-6 py-4 text-[12px] font-bold text-[#64748B] uppercase tracking-wider">
                SL
              </th>
              <th className="px-6 py-4 text-[12px] font-bold text-[#64748B] uppercase tracking-wider">
                Item Details
              </th>
              <th className="px-6 py-4 text-[12px] font-bold text-[#64748B] uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-4 text-[12px] font-bold text-[#64748B] uppercase tracking-wider">
                In-Hand Qty
              </th>
              <th className="px-6 py-4 text-[12px] font-bold text-[#64748B] uppercase tracking-wider">
                Unit Type
              </th>
              <th className="px-6 py-4 text-[12px] font-bold text-[#64748B] uppercase tracking-wider text-center w-10"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F1F5F9]">
            {currentData.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-[#F8FAFC] transition-colors group"
              >
                <td className="px-6 py-4 text-[14px] font-medium text-[#64748B]">
                  {item.sl}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-center text-[12px] font-bold text-[#64748B] relative`}
                    >
                      {item.code}
                      {item.status === "low" && (
                        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#EAB308] border-2 border-white rounded-full"></div>
                      )}
                      {item.status === "out" && (
                        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#EF4444] border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    <span className="text-[14px] font-bold text-[#1E293B]">
                      {item.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-[14px] font-bold text-[#1E293B] uppercase tracking-tight">
                    {item.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-[15px] font-black text-[#1E293B]">
                  {item.inHandQty}
                </td>
                <td className="px-6 py-4">
                  <span className="text-[14px] font-bold text-[#1E293B] uppercase tracking-tight">
                    {item.unitType}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="p-1.5 hover:bg-[#E2E8F0] rounded-lg transition-colors text-[#94A3B8] hover:text-[#1E293B]">
                    <MoreHorizontal size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-[14px] font-medium text-[#64748B]">
          Showing{" "}
          <span className="font-bold text-[#1E293B]">{startIndex + 1}</span> to{" "}
          <span className="font-bold text-[#1E293B]">
            {Math.min(startIndex + itemsPerPage, data.length)}
          </span>{" "}
          of{" "}
          <span className="font-bold text-[#1E293B]">
            {data.length.toLocaleString()}
          </span>{" "}
          results
        </p>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
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
                  ? "bg-[#5949BE] text-white shadow-[0_4px_12px_rgba(89,73,190,0.4)]"
                  : "bg-white text-[#64748B] border border-[#E2E8F0] hover:bg-slate-50 shadow-sm"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages, prev + 1))
            }
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

export default ProductTable;
