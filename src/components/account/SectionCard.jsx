/**
 * Simple white card wrapper used across Accounts page sections.
 * Kept intentionally minimal so layout stays pixel-aligned.
 */

export default function SectionCard({ title, subtitle, right, children }) {
  return (
    <section className="rounded-[14px] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
      {(title || subtitle || right) && (
        <header className="flex items-start justify-between gap-3 px-5 pb-3 pt-4">
          <div className="min-w-0">
            {title ? (
              <h3 className="text-[14px] font-semibold text-[#0F172A]">
                {title}
              </h3>
            ) : null}
            {subtitle ? (
              <p className="mt-0.5 text-[11px] font-medium text-[#64748B]">
                {subtitle}
              </p>
            ) : null}
          </div>
          {right ? <div className="shrink-0">{right}</div> : null}
        </header>
      )}
      <div className="px-5 pb-4">{children}</div>
    </section>
  );
}

