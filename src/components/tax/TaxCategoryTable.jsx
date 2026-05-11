/**
 * Tax category table section.
 * Uses overflow wrapper so it remains usable on smaller widths.
 */

import { ArrowRight, Landmark } from "lucide-react";

function taxColorClass(tone) {
  if (tone === "positive") return "text-[#16B78F]";
  return "text-[#A24373]";
}

export default function TaxCategoryTable({ rows }) {
  return (
    <section className="rounded-[14px] bg-white shadow-[0_10px_28px_rgba(15,23,42,0.06)]">
      <div className="overflow-x-auto rounded-[14px]">
        <table className="min-w-[780px] w-full border-collapse">
          <thead className="bg-[#F5F4FB]">
            <tr className="text-left text-[10px] font-bold uppercase tracking-[0.08em] text-[#6B7280]">
              <th className="px-5 py-4">Category</th>
              <th className="px-5 py-4">Amount Ð</th>
              <th className="px-5 py-4">Tax (5%) Ð</th>
              <th className="px-5 py-4">Total Amount (AED)</th>
              <th className="px-5 py-4 text-right" />
            </tr>
          </thead>
          <tbody className="text-[12px] font-medium text-[#0F172A]">
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-[#EEF2F7] last:border-b-0">
                <td className="px-5 py-5">
                  <div className="flex items-center gap-2 text-[12px] font-medium text-[#0F172A]">
                    <Landmark
                      className="h-5 w-5 shrink-0 text-[#6F58D9]"
                      strokeWidth={2.1}
                    />
                    <span>{row.category}</span>
                  </div>
                </td>
                <td className="px-5 py-5 text-[12px] font-medium text-[#374151]">
                  {row.amount}
                </td>
                <td
                  className={[
                    "px-5 py-5 text-[12px] font-semibold",
                    taxColorClass(row.taxTone),
                  ].join(" ")}
                >
                  {row.tax}
                </td>
                <td className="px-5 py-5 text-[12px] font-extrabold text-[#5B54B7]">
                  {row.total}
                </td>
                <td className="px-5 py-5 text-right">
                  <button
                    type="button"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[#374151] hover:bg-[#F3F4F6]"
                    aria-label={`Open ${row.category}`}
                  >
                    <ArrowRight className="h-4.5 w-4.5" strokeWidth={2.2} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

