import { ChevronDown, Search } from "lucide-react";

function FilterButton({ label }) {
  return (
    <button
      type="button"
      className="inline-flex h-9 items-center gap-2 rounded-[10px] border border-[#E2E8F0] bg-white px-3 text-[11px] font-semibold text-[#334155] hover:bg-[#F8FAFC]"
    >
      {label}
      <ChevronDown className="h-3.5 w-3.5 text-[#64748B]" strokeWidth={2.2} />
    </button>
  );
}

export default function InventoryFilters() {
  return (
    <section className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <label className="flex h-10 w-full max-w-[520px] items-center rounded-[10px] border border-[#E2E8F0] bg-white px-3 shadow-[0_6px_20px_rgba(15,23,42,0.03)]">
        <Search className="h-4 w-4 text-[#94A3B8]" strokeWidth={2.1} />
        <input
          type="text"
          placeholder="Search by product name, SKU..."
          className="ml-2 w-full bg-transparent text-[12px] font-medium text-[#0F172A] placeholder:text-[#94A3B8] outline-none"
        />
      </label>

      <div className="flex flex-wrap items-center gap-2">
        <FilterButton label="All Suppliers" />
        <FilterButton label="All Categories" />
        <button
          type="button"
          className="inline-flex h-9 items-center rounded-[10px] px-2 text-[11px] font-semibold text-[#635BCE] hover:bg-[#EEF2FF]"
        >
          View all
        </button>
      </div>
    </section>
  );
}
