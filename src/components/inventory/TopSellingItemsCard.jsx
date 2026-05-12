import { useMemo, useState } from "react";
import { fastMovingItems, slowMovingItems } from "../../constants/inventoryChartData";

function SegmentButton({ active, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-[8px] px-2.5 py-1 transition-colors",
        active ? "bg-white text-[#334155]" : "text-[#64748B]",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

function barWidth(value, maxValue) {
  const minPercent = 12;
  return `${Math.max((value / maxValue) * 100, minPercent)}%`;
}

export default function TopSellingItemsCard({ className = "" }) {
  const [mode, setMode] = useState("fast");
  const rows = mode === "fast" ? fastMovingItems : slowMovingItems;
  const maxUnits = useMemo(() => Math.max(...rows.map((item) => item.units)), [rows]);

  return (
    <section
      className={`flex flex-col rounded-[14px] border border-[#EAEEF4] bg-white px-4 pb-4 pt-4 shadow-[0_8px_24px_rgba(15,23,42,0.05)] ${className}`}
    >
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-[14px] font-semibold text-[#0F172A]">Top Selling Items</h3>
          <p className="mt-0.5 text-[10px] font-medium text-[#94A3B8]">
            Based on selected date
          </p>
        </div>
        <div className="inline-flex rounded-[10px] bg-[#F1F5F9] p-1 text-[10px] font-semibold text-[#64748B]">
          <SegmentButton active={mode === "fast"} label="Fast Moving" onClick={() => setMode("fast")} />
          <SegmentButton active={mode === "slow"} label="Slow Moving" onClick={() => setMode("slow")} />
        </div>
      </header>

      <ul className="mt-3 min-h-0 flex-1 space-y-2 overflow-y-auto pr-1">
        {rows.map((row) => (
          <li key={row.id} className="rounded-[10px]">
            <div className="mb-1.5 flex items-center justify-between gap-2 px-2">
              <div className="min-w-0">
                <p className="truncate text-[12px] font-semibold text-[#1E293B]">{row.name}</p>
                <p className="mt-0.5 text-[10px] font-medium text-[#94A3B8]">SKU: {row.sku}</p>
              </div>
              <div className="flex shrink-0 items-baseline gap-1 text-[12px]">
                <span className="font-extrabold text-[#1E293B]">{row.units}</span>
                <span className="font-medium text-[#94A3B8]">units</span>
              </div>
              <p className="w-[92px] shrink-0 text-right text-[12px] font-semibold text-[#1E293B]">
                <span className="mr-1 text-[14px]">৳</span>
                <span>{row.amount}</span>
              </p>
            </div>
            <div className="h-[7px] rounded-full bg-[#E2E8F0]">
              <div
                className="h-full rounded-full bg-[#5E56CE] transition-all duration-300"
                style={{ width: barWidth(row.units, maxUnits) }}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
