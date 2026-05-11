/**
 * Top tax KPI cards (Output / Input / Total Payable).
 * Driven by constants so API replacement is straightforward.
 */

import { Landmark, Percent, ReceiptText } from "lucide-react";

function cardTone(tone) {
  if (tone === "input") {
    return {
      border: "border-[#8BD9D1]",
      title: "text-[#475569]",
      amount: "text-[#1E293B]",
      iconWrap: "bg-[#F8FAFC] text-[#64748B]",
      icon: Percent,
    };
  }
  if (tone === "payable") {
    return {
      border: "border-[#CFC4F5]",
      title: "text-[#6356A7] uppercase tracking-[0.08em]",
      amount: "text-[#5C4AC4]",
      iconWrap: "bg-[#F8FAFC] text-[#7B6AD9]",
      icon: Landmark,
    };
  }
  return {
    border: "border-[#E7B0BF]",
    title: "text-[#475569]",
    amount: "text-[#1E293B]",
    iconWrap: "bg-[#F8FAFC] text-[#64748B]",
    icon: ReceiptText,
  };
}

export default function TaxSummaryCards({ cards }) {
  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {cards.map((card) => {
        const tone = cardTone(card.tone);
        const Icon = tone.icon;
        return (
          <article
            key={card.id}
            className={[
              "rounded-[14px] border bg-white p-4",
              "shadow-[0_8px_24px_rgba(15,23,42,0.05)]",
              tone.border,
            ].join(" ")}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className={`text-[11px] font-semibold ${tone.title}`}>
                  {card.title}
                </p>
                <p className={`mt-1 text-[22px] font-extrabold leading-tight ${tone.amount}`}>
                  <span className="mr-1 text-[22px] align-middle">{card.currency}</span>
                  <span className="text-[22px] align-middle">{card.amount}</span>
                </p>
              </div>
              <span
                className={[
                  "inline-flex h-11 w-11 items-center justify-center rounded-xl",
                  tone.iconWrap,
                ].join(" ")}
                aria-hidden
              >
                <Icon className="h-5 w-5" strokeWidth={2.2} />
              </span>
            </div>
          </article>
        );
      })}
    </section>
  );
}

