import { useMemo, useState } from "react";

const PAGE_SIZE = 6;
const tabs = ["recent", "amount", "invoice"];

function formatMoney(value) {
  return `Ð ${Number(value).toFixed(2)}`;
}

/**
 * Interactive supplier table with tab switching and pagination.
 */
export default function RecentSupplierTable({ rowsByTab }) {
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
  const formatPlain = (value) => Number(value).toFixed(2);

  return (
    <section className="rounded-[14px] border border-[#E3E7EF] bg-white p-4">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-[14px] font-semibold text-[#1E293B]">
            Recent Supplier Transactions
          </h3>
          <p className="mt-0.5 text-[11px] font-medium text-[#6B7280]">
            Detailed breakdown of payments and outstanding balances.
          </p>
        </div>
        <div className="inline-flex rounded-[10px] bg-[#F1F2F6] p-1 text-[10px] font-semibold text-[#6B7280]">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => switchTab(tab)}
              className={`rounded-[8px] px-2.5 py-1 capitalize ${activeTab === tab ? "bg-white text-[#4D44C8] shadow-sm" : ""}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      <div className="mt-4 overflow-x-auto">
        <table className="min-w-[920px] w-full border-collapse">
          <thead className="bg-[#F2F1FA] text-left text-[11px] font-semibold uppercase tracking-[0.05em] text-[#6B7280]">
            <tr>
              <th className="px-4 py-3">Supplier Name</th>
              <th className="px-4 py-3">PO Order</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Paid</th>
              <th className="px-4 py-3">Balance</th>
              <th className="px-4 py-3">Pending Invoice</th>
            </tr>
          </thead>
          <tbody className="text-[13px] font-medium text-[#2B313D]">
            {paginatedRows.map((row) => (
              <tr key={row.id} className="border-b border-[#EEF2F7]">
                <td className="px-4 py-[13px]">{row.supplier}</td>
                <td className="px-4 py-[13px]">{row.poOrder}</td>
                <td className="px-4 py-[13px]">{formatMoney(row.amount)}</td>
                <td className="px-4 py-[13px] text-[#0EA5A4]">
                  {formatPlain(row.paid)}
                </td>
                <td className="px-4 py-[13px]">{formatPlain(row.balance)}</td>
                <td className="px-4 py-[13px]">{row.pendingInvoice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="mt-4 flex items-center justify-between text-[12px] font-medium text-[#64748B]">
        <p>
          Showing {(page - 1) * PAGE_SIZE + 1}-
          {Math.min(page * PAGE_SIZE, rows.length)} of {rows.length}
        </p>
        <div className="inline-flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="rounded-md border border-[#D1D5DB] px-2 py-1 disabled:opacity-50"
            disabled={page === 1}
          >
            Prev
          </button>
          <span className="px-2">
            {page} / {totalPages}
          </span>
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="rounded-md border border-[#D1D5DB] px-2 py-1 disabled:opacity-50"
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </footer>
    </section>
  );
}
