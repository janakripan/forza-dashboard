import { AlertTriangle, CircleAlert, CircleCheck, Package } from "lucide-react";

function toneStyles(tone) {
  if (tone === "warning") {
    return { icon: AlertTriangle, iconClass: "text-[#CA8A04]", tint: "bg-[#FEF9C3]" };
  }
  if (tone === "success") {
    return { icon: CircleCheck, iconClass: "text-[#16A34A]", tint: "bg-[#DCFCE7]" };
  }
  if (tone === "danger") {
    return { icon: CircleAlert, iconClass: "text-[#E11D48]", tint: "bg-[#FCE7F3]" };
  }
  return { icon: Package, iconClass: "text-[#4F46E5]", tint: "bg-[#EEF2FF]" };
}

export default function InventorySummaryCards({ cards }) {
  return (
    <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const { icon: Icon, iconClass, tint } = toneStyles(card.tone);
        return (
          <article
            key={card.id}
            className="relative overflow-hidden rounded-[12px] border border-[#EAEEF4] bg-white px-5 py-4"
          >
            <div className={`absolute -right-11 -top-11 h-[120px] w-[120px] rounded-full ${tint} opacity-60`} />
            <div className="flex items-center justify-between gap-3">
              <p className="text-[13px] font-medium text-[#4B5563]">{card.title}</p>
              <span className="relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-[9px] border border-[#D1D5DB] bg-[#F3F4F6] shadow-[0_4px_10px_rgba(15,23,42,0.08)]">
                <Icon className={`h-4 w-4 ${iconClass}`} strokeWidth={2.2} />
              </span>
            </div>
            <p className={`mt-4 text-[40px] leading-none font-bold tracking-[-0.02em] ${card.tone === "danger" ? "text-[#BE123C]" : "text-[#2B313D]"}`}>
              {card.value}
            </p>
            <p className="mt-2 text-[11px] font-medium text-[#5F6672]">{card.meta}</p>
          </article>
        );
      })}
    </section>
  );
}
