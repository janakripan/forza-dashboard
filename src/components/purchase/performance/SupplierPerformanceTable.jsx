import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  MoreVertical,
  ChevronLeft,
} from "lucide-react";

const SupplierPerformanceTable = ({ data }) => {
  const [expandedRows, setExpandedRows] = useState([1]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  const toggleRow = (id) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id],
    );
  };

  return (
    <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm overflow-hidden">
      <div className="p-6 border-b border-[#E2E8F0] flex justify-between items-start">
        <div>
          <h2 className="text-[18px] font-bold text-[#1E293B]">
            Supplier Performance & Balances
          </h2>
          <p className="text-[13px] text-[#64748B] mt-1 font-medium">
            Click rows to view item-level purchase details
          </p>
        </div>
        <button className="text-[#94A3B8] hover:text-[#1E293B]">
          <MoreVertical size={20} />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
              <th className="w-10"></th>
              <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                Supplier Name
              </th>
              <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider text-right">
                Total Purchase
              </th>
              <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider text-right">
                Paid Amount
              </th>
              <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider text-right">
                Pending Amount
              </th>
              <th className="px-6 py-4 text-[11px] font-bold text-[#64748B] uppercase tracking-wider text-center">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F1F5F9]">
            {currentData.map((supplier) => (
              <React.Fragment key={supplier.id}>
                <tr
                  onClick={() => toggleRow(supplier.id)}
                  className={`hover:bg-[#F8FAFC] cursor-pointer transition-colors ${expandedRows.includes(supplier.id) ? "bg-[#F8FAFC]" : ""}`}
                >
                  <td className="pl-4 text-[#94A3B8]">
                    {expandedRows.includes(supplier.id) ? (
                      <ChevronDown size={18} />
                    ) : (
                      <ChevronRight size={18} />
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-[13px] font-bold"
                        style={{
                          backgroundColor: supplier.color,
                          color: supplier.textColor,
                        }}
                      >
                        {supplier.initials}
                      </div>
                      <div>
                        <p className="text-[14px] font-bold text-[#1E293B]">
                          {supplier.name}
                        </p>
                        <p className="text-[12px] text-[#94A3B8] font-medium">
                          Last purchase: {supplier.lastPurchase}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right text-[14px] font-bold text-[#1E293B]">
                    ${supplier.totalPurchase}
                  </td>
                  <td className="px-6 py-4 text-right text-[14px] font-bold text-[#1E293B]">
                    ${supplier.paidAmount}
                  </td>
                  <td className="px-6 py-4 text-right text-[14px] font-bold text-[#EF4444]">
                    ${supplier.pendingAmount}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-bold ${
                        supplier.status === "Fully Paid"
                          ? "bg-[#F0FDF4] text-[#16A34A] border border-[#BBF7D0]"
                          : "bg-[#FFF1F2] text-[#EF4444] border border-[#FECDD3]"
                      }`}
                    >
                      {supplier.status}
                    </span>
                  </td>
                </tr>

                {expandedRows.includes(supplier.id) && (
                  <tr>
                    <td colSpan="6" className="bg-[#F8FAFC] p-4">
                      <div className="bg-white rounded-lg border border-[#E2E8F0] overflow-hidden shadow-sm">
                        <table className="w-full text-left">
                          <thead>
                            <tr className="bg-[#F1F5F9] text-[11px] font-bold text-[#64748B] uppercase">
                              <th className="px-6 py-2.5">PO No#</th>
                              <th className="px-6 py-2.5">Invoice Num (ref)</th>
                              <th className="px-6 py-2.5">Item Name</th>
                              <th className="px-6 py-2.5 text-center">Qty</th>
                              <th className="px-6 py-2.5 text-right">Total</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#F1F5F9]">
                            {supplier.details.map((detail, idx) => (
                              <tr
                                key={idx}
                                className="text-[13px] text-[#475569] font-medium"
                              >
                                <td className="px-6 py-3 text-[#5949BE] font-bold">
                                  {detail.poNo}
                                </td>
                                <td className="px-6 py-3 text-[#5949BE] font-bold">
                                  {detail.invNum}
                                </td>
                                <td className="px-6 py-3">{detail.itemName}</td>
                                <td className="px-6 py-3 text-center">
                                  {detail.qty}
                                </td>
                                <td className="px-6 py-3 text-right font-black text-[#1E293B]">
                                  {detail.total}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
            {currentData.length === 0 && (
              <tr>
                <td
                  colSpan="6"
                  className="px-6 py-12 text-center text-[#94A3B8] font-medium"
                >
                  No suppliers found matching your filters.
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
          suppliers
        </p>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-[#E2E8F0] bg-white text-[#64748B] hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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
            className="p-2 rounded-lg border border-[#E2E8F0] bg-white text-[#64748B] hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupplierPerformanceTable;
