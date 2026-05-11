/**
 * Sales Summary table card.
 * The table layout/typography matches the reference image.
 */

import { MoreHorizontal } from "lucide-react";
import SectionCard from "./SectionCard";

export default function SalesSummary({ rows, total }) {
  return (
    <SectionCard
      title="Sales Summary"
      subtitle="Recorded sales invoices for the day"
      right={
        <button
          type="button"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[#6366F1] hover:bg-[#EEF2FF]"
          aria-label="More options"
        >
          <MoreHorizontal className="h-4.5 w-4.5" strokeWidth={2} />
        </button>
      }
    >
      <div className="overflow-hidden rounded-[12px] border border-[#EEF2F7]">
        <table className="w-full border-collapse text-left">
          <thead className="bg-[#F7F8FC]">
            <tr className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#6B7280]">
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Voucher No</th>
              <th className="px-4 py-3 text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="text-[12px] font-medium text-[#0F172A]">
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-[#EEF2F7]">
                <td className="px-4 py-3 text-[#374151]">{r.date}</td>
                <td className="px-4 py-3">{r.customer}</td>
                <td className="px-4 py-3 text-[#374151]">{r.voucher}</td>
                <td className="px-4 py-3 text-right">{r.amount}</td>
              </tr>
            ))}
            <tr className="border-t border-[#EEF2F7] bg-white">
              <td className="px-4 py-3" colSpan={3}>
                <span className="float-right text-[12px] font-semibold text-[#0F172A]">
                  Total Sales
                </span>
              </td>
              <td className="px-4 py-3 text-right text-[12px] font-extrabold text-[#4F46E5]">
                {total}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </SectionCard>
  );
}

