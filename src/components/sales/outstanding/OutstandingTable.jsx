import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const OutstandingTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
              <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                Customer Name
              </th>
              <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                Credit Usage
              </th>
              <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider text-center">
                Age (Days)
              </th>
              <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider text-right">
                Outstanding
              </th>
              <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider text-center">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F1F5F9]">
            {currentData.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#F8FAFC] transition-colors group"
              >
                <td className="px-6 py-5">
                  <div>
                    <p className="text-[14px] font-bold text-[#1E293B]">
                      {item.name}
                    </p>
                    <p className="text-[12px] font-medium text-[#94A3B8]">
                      {item.phone}
                    </p>
                  </div>
                </td>
                <td className="px-6 py-5 min-w-[200px]">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[11px] font-bold text-[#EF4444]">
                      {item.creditUsage}%
                    </span>
                    <div className="w-full h-1.5 bg-[#F1F5F9] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#EF4444] rounded-full"
                        style={{ width: `${item.creditUsage}%` }}
                      />
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5 text-center">
                  <span className="inline-flex items-center justify-center w-10 h-7 bg-[#FFE4E6] text-[#EF4444] text-[12px] font-bold rounded">
                    {item.age}
                  </span>
                </td>
                <td className="px-6 py-5 text-right text-[15px] font-black text-[#1E293B]">
                  {item.outstanding}
                </td>
                <td className="px-6 py-5 text-center">
                  <div
                    className={`px-4 py-1.5 rounded-full text-[11px] font-bold inline-flex items-center gap-1.5 border ${
                      item.status.includes("Exceeded")
                        ? "bg-[#FFF1F2] text-[#EF4444] border-[#FECDD3]"
                        : "bg-[#F0FDF4] text-[#16A34A] border-[#BBF7D0]"
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${item.status.includes("Exceeded") ? "bg-[#EF4444]" : "bg-[#16A34A]"}`}
                    />
                    {item.status}
                  </div>
                </td>
              </tr>
            ))}
            {currentData.length === 0 && (
              <tr>
                <td
                  colSpan="5"
                  className="px-6 py-10 text-center text-[#94A3B8] font-medium"
                >
                  No records found matching your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-[14px] font-medium text-[#64748B]">
          Showing{" "}
          <span className="font-bold text-[#1E293B]">
            {data.length > 0 ? startIndex + 1 : 0}
          </span>{" "}
          to{" "}
          <span className="font-bold text-[#1E293B]">
            {Math.min(startIndex + itemsPerPage, data.length)}
          </span>{" "}
          of <span className="font-bold text-[#1E293B]">{data.length}</span>{" "}
          entries
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
                  ? "bg-[#5949BE] text-white shadow-lg"
                  : "bg-white text-[#64748B] border border-[#E2E8F0] hover:bg-slate-50"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages, prev + 1))
            }
            disabled={currentPage === totalPages || totalPages === 0}
            className="p-2 rounded-lg border border-[#E2E8F0] bg-white text-[#64748B] hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OutstandingTable;
