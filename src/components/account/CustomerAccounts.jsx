/**
 * Customer Accounts table card.
 * The data is passed in so it can be replaced by API results later.
 */

import { ArrowRight } from "lucide-react";
import SectionCard from "./SectionCard";

function balanceClass(tone) {
  if (tone === "good") return "text-[#111827]";
  if (tone === "warn") return "text-[#B45309]";
  return "text-[#DC2626]";
}

export default function CustomerAccounts({ rows }) {
  return (
    <SectionCard
      title="Customer Accounts"
      subtitle="Receivables summary by client"
      right={
        <a
          href="#"
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#4F46E5] hover:underline"
        >
          View all customers
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
        </a>
      }
    >
      <div className="overflow-hidden rounded-[12px] border border-[#EEF2F7]">
        <table className="w-full border-collapse text-left">
          <thead className="bg-[#F7F8FC]">
            <tr className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#6B7280]">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3 text-center">Invoices</th>
              <th className="px-4 py-3 text-right">Total Amount</th>
              <th className="px-4 py-3 text-right">Balance Due</th>
              <th className="px-4 py-3 text-right">Last Trstn</th>
            </tr>
          </thead>
          <tbody className="text-[12px] font-medium text-[#0F172A]">
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-[#EEF2F7]">
                <td className="px-4 py-3">{r.name}</td>
                <td className="px-4 py-3 text-center text-[#374151]">
                  {r.invoices}
                </td>
                <td className="px-4 py-3 text-right text-[#374151]">
                  {r.totalAmount}
                </td>
                <td
                  className={[
                    "px-4 py-3 text-right font-extrabold",
                    balanceClass(r.balanceTone),
                  ].join(" ")}
                >
                  {r.balanceDue}
                </td>
                <td className="px-4 py-3 text-right text-[#374151]">
                  {r.lastTrx}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionCard>
  );
}

