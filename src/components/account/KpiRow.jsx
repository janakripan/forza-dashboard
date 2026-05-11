/**
 * KPI row at the top of Accounts page.
 * Data comes from `src/constants/accountPageData.js`.
 */

import { CircleCheck, UsersRound } from "lucide-react";

function toneStyles(tone) {
  if (tone === "positive") {
    return {
      card: "bg-gradient-to-r from-[#3DDC84] to-[#71E27D] text-white",
      label: "text-white/85",
      value: "text-white",
      meta: "text-white/85",
      pill: "bg-white/15",
      icon: "text-white",
    };
  }
  return {
    card: "bg-white",
    label: "text-[#64748B]",
    value: "text-[#0F172A]",
    meta: "text-[#64748B]",
    pill: "bg-[#EEF2FF]",
    icon: "text-[#4F46E5]",
  };
}

export default function KpiRow({ items }) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {items.map((kpi) => {
        const s = toneStyles(kpi.tone);
        const MetaIcon = kpi.tone === "positive" ? CircleCheck : UsersRound;
        return (
          <div
            key={kpi.id}
            className={[
              "rounded-[12px] px-5 py-4 shadow-[0_10px_28px_rgba(15,23,42,0.06)]",
              s.card,
            ].join(" ")}
          >
            <p className={`text-[11px] font-semibold ${s.label}`}>
              {kpi.label}
            </p>
            <p className={`mt-1 text-[22px] font-extrabold ${s.value}`}>
              {kpi.value}
            </p>

            <div className="mt-3 flex items-center gap-2">
              <span
                className={[
                  "inline-flex h-5 items-center gap-1.5 rounded-md px-2 text-[10px] font-semibold",
                  s.pill,
                  s.meta,
                ].join(" ")}
              >
                <MetaIcon className={`h-3.5 w-3.5 ${s.icon}`} strokeWidth={2} />
                {kpi.metaIconLabel}
              </span>
              <span className={`text-[10px] font-medium ${s.meta}`}>
                {kpi.metaText}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

