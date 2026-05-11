/**
 * Journal Summary table card.
 * Keeps fixed column widths to match the screenshot proportions.
 */

import { MoreHorizontal } from "lucide-react";
import SectionCard from "./SectionCard";

export default function JournalSummary({ rows, totals }) {
  return (
    <SectionCard
      title="Journal Summary"
      subtitle="Manual journal entries and adjustments"
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
              <th className="px-4 py-3">Account</th>
              <th className="px-4 py-3">Ref</th>
              <th className="px-4 py-3 text-right">Debit</th>
              <th className="px-4 py-3 text-right">Credit</th>
            </tr>
          </thead>
          <tbody className="text-[12px] font-medium text-[#0F172A]">
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-[#EEF2F7]">
                <td className="px-4 py-3">{r.account}</td>
                <td className="px-4 py-3 text-[#374151]">{r.ref}</td>
                <td className="px-4 py-3 text-right">{r.debit}</td>
                <td className="px-4 py-3 text-right">{r.credit}</td>
              </tr>
            ))}
            <tr className="border-t border-[#EEF2F7] bg-white">
              <td className="px-4 py-3" colSpan={2}>
                <span className="float-right text-[12px] font-semibold text-[#0F172A]">
                  Totals
                </span>
              </td>
              <td className="px-4 py-3 text-right text-[12px] font-extrabold text-[#0F172A]">
                {totals.debit}
              </td>
              <td className="px-4 py-3 text-right text-[12px] font-extrabold text-[#0F172A]">
                {totals.credit}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </SectionCard>
  );
}

