import { AlertCircle, FileText, Layers3, ShoppingBasket } from "lucide-react";

function Header({ title, tone }) {
  const icon =
    tone === "danger" ? (
      <Layers3 className="h-4 w-4 text-[#E11D48]" strokeWidth={2.1} />
    ) : (
      <AlertCircle className="h-4 w-4 text-[#4F46E5]" strokeWidth={2.1} />
    );
  const titleClass = tone === "danger" ? "text-[#BE123C]" : "text-[#1F2937]";
  const lineClass = tone === "danger" ? "bg-[#BE123C]" : "bg-[#4F46E5]";

  return (
    <>
      <div className={`mx-[-16px] mb-3 h-[2px] ${lineClass}`} />
      <header className="mb-3 flex items-center gap-2">
        {icon}
        <h3 className={`text-[13px] font-semibold ${titleClass}`}>{title}</h3>
      </header>
    </>
  );
}

export default function InventoryInfoListCard({ title, rows, tone = "default" }) {
  return (
    <section className="rounded-[14px] border border-[#E5E7EB] bg-[#F3F4F6] px-4 pb-4 pt-3">
      <Header title={title} tone={tone} />

      {tone === "danger" ? (
        <p className="mb-3 text-[10px] font-medium text-[#6B7280]">
          These items risk negative stock. Please increase quantities.
        </p>
      ) : null}

      <ul className={tone === "danger" ? "space-y-0" : "space-y-2"}>
        {rows.map((row) => (
          <li
            key={row.id}
            className={
              tone === "danger"
                ? "flex items-center justify-between border-b border-[#E5E7EB] py-2.5 last:border-0"
                : "flex items-center justify-between rounded-[10px] bg-[#E5E7EB] px-3 py-2.5"
            }
          >
            <div className="flex min-w-0 items-start gap-2">
              {tone === "danger" ? (
                <FileText className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#9CA3AF]" strokeWidth={2.1} />
              ) : null}
              <div className="min-w-0">
                <p className="truncate text-[11px] font-semibold text-[#2A303A]">{row.name}</p>
                <p className={`mt-0.5 text-[10px] font-medium ${tone === "danger" ? "text-[#6B7280]" : "text-[#F59E0B]"}`}>
                  {row.detail}
                </p>
              </div>
            </div>

            {tone === "danger" ? (
              <span className="ml-3 text-[19px] font-medium text-[#E11D48]">{row.units}</span>
            ) : (
              <span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#EEF2FF] text-[#5B56CF]">
                <ShoppingBasket className="h-3.5 w-3.5" strokeWidth={2.1} />
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
