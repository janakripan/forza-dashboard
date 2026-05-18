import React, { useMemo, useState } from "react";

const PAGE_SIZE = 6;
const tabs = ["recent", "amount", "incentive"];

/**
 * CustomerSalesTable Component
 * Replicated from RecentSupplierTable to ensure consistent design and functionality.
 */
export default function CustomerSalesTable({ rowsByTab }) {
  const [activeTab, setActiveTab] = useState("recent");
  const [page, setPage] = useState(1);

  const rows = rowsByTab[activeTab] ?? [];
  const totalPages = Math.max(Math.ceil(rows.length / PAGE_SIZE), 1);

  const paginatedRows = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return rows.slice(start, start + PAGE_SIZE);
  }, [page, rows]);

  const switchTab = (tab) => {
    setActiveTab(tab);
    setPage(1);
  };

  const formatMoney = (value) =>
    `Ð ${Number(value).toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
  const formatPlain = (value) =>
    Number(value).toLocaleString(undefined, { minimumFractionDigits: 2 });

  return (
    <section className="rounded-[14px] border border-[#E3E7EF] bg-white p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.02)]">
      <header className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <h3 className="text-[14px] font-extrabold text-[#1E293B]">
            Customer Sales Performance
          </h3>
          <p className="mt-1 text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider">
            Top 5 accounts by transaction volume
          </p>
        </div>
        <div className="inline-flex rounded-[10px] bg-[#F1F2F6] p-1 text-[10px] font-bold text-[#94A3B8]">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => switchTab(tab)}
              className={`rounded-[8px] px-4 py-1.5 capitalize transition-all ${activeTab === tab ? "bg-white text-[#5949BE] shadow-sm" : "hover:text-[#64748B]"}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      <div className="overflow-x-auto">
        <table className="min-w-[920px] w-full border-collapse">
          <thead className="bg-[#F2F1FA] text-left text-[11px] font-extrabold uppercase tracking-[0.05em] text-[#64748B]">
            <tr>
              <th className="px-6 py-4 rounded-l-lg">Customer Name</th>
              <th className="px-6 py-4">Inv Count</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Paid</th>
              <th className="px-6 py-4">Balance</th>
              <th className="px-6 py-4 rounded-r-lg text-center">
                Pending Invoice
              </th>
            </tr>
          </thead>
          <tbody className="text-[13px] font-bold text-[#1E293B] divide-y divide-[#F1F5F9]">
            {paginatedRows.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-gray-50/50 transition-colors"
              >
                <td className="px-6 py-[18px]">{row.customer}</td>
                <td className="px-6 py-[18px] text-[#64748B] font-semibold">
                  {row.invCount}
                </td>
                <td className="px-6 py-[18px] font-black text-[#0F172A]">
                  {formatMoney(row.amount)}
                </td>
                <td className="px-6 py-[18px] text-[#10B981]">
                  {formatPlain(row.paid)}
                </td>
                <td className="px-6 py-[18px] text-[#64748B]">
                  {formatPlain(row.balance)}
                </td>
                <td className="px-6 py-[18px] text-center text-[#0F172A]">
                  {row.pendingInvoice}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="mt-8 flex items-center justify-between text-[13px] font-bold text-[#94A3B8]">
        <p>
          Showing{" "}
          <span className="text-[#0F172A]">
            {(page - 1) * PAGE_SIZE + 1}-
            {Math.min(page * PAGE_SIZE, rows.length)}
          </span>{" "}
          of <span className="text-[#0F172A]">{rows.length}</span>
        </p>
        <div className="inline-flex items-center gap-3">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="rounded-xl border border-[#E2E8F0] px-4 py-2 hover:bg-gray-50 transition-all disabled:opacity-40"
            disabled={page === 1}
          >
            Prev
          </button>
          <div className="flex items-center gap-1.5 px-2">
            <span className="text-[#0F172A]">{page}</span>
            <span className="text-[#E2E8F0]">/</span>
            <span>{totalPages}</span>
          </div>
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="rounded-xl border border-[#E2E8F0] px-4 py-2 hover:bg-gray-50 transition-all disabled:opacity-40"
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </footer>
    </section>
  );
}
