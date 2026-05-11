/**
 * Shared dashboard header.
 *
 * - Sticky on top while scrolling.
 * - Shows a “main” toolbar header on sidebar pages (matches reference image #1).
 * - Shows an “inner” breadcrumb header on deeper pages (matches reference image #2).
 *
 * Replace the controls' handlers when API/state is available.
 */
import { useMemo } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { Form, Formik } from "formik";
import {
  CalendarDays,
  ChevronLeft,
  Download,
  Filter,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import {
  sidebarPrimaryNav,
  sidebarSecondaryNav,
} from "../../constants/navigationConstants";
import { headerSearchSchema } from "../../constants/validationSchemas";

const MAIN_HEADER_HEIGHT = "h-[100px]";

function cx(...parts) {
  return parts.filter(Boolean).join(" ");
}

function titleFromPath(pathname) {
  const all = [...sidebarPrimaryNav, ...sidebarSecondaryNav];
  const hit = all.find((i) => i.to === pathname);
  if (hit) return hit.title;

  const last = pathname.split("/").filter(Boolean).at(-1) ?? "Page";
  return last
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

function isMainDashboardPage(pathname) {
  const all = [...sidebarPrimaryNav, ...sidebarSecondaryNav];
  return all.some((i) => i.to === pathname);
}


function MainToolbarHeader() {
  const initialValues = useMemo(() => ({ query: "" }), []);

  const headerBaseBackground =
    "linear-gradient(180deg, rgba(89, 73, 190, 0.3) 0%, rgba(205, 119, 255, 0.3) 100%), radial-gradient(63.87% 50% at 52.08% 100%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)";

 

  return (
    <div className={cx(MAIN_HEADER_HEIGHT, "w-full bg-[#F7F8FC]")}>
      {/* Non-full-width “capsule” container (matches screenshot inset) */}
      <div className="mx-auto flex h-full w-full max-w-[1200px] items-center  px-6">
        {/* Base div: gradient border effect (padding creates the 1px border) */}
        <div
          className="w-full rounded-xl p-[1px] shadow-[0px_12px_32.26px_0px_#620DFF30,0px_24px_84.2px_0px_#620DFF57]"
          style={{ background: headerBaseBackground }}
        >
          {/* Purple surface: main gradient + exact outer/inset shadows */}
          <div
            className="rounded-lg bg-linear-to-b from-[#5949BE] px-4 py-3 to-[#620DFF] shadow-[inset_0px_1px_4px_2px_#E2D2FF,inset_0px_1px_18px_2px_#EBD2FF] "
         
          >
            {/*  toolbar container */}
            <div className="flex h-11 w-full items-center gap-3 rounded-[12px] bg-transparent">
          <Formik
            initialValues={initialValues}
            validationSchema={headerSearchSchema}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={(values) => {
              // Hook this to API search when available.
              // eslint-disable-next-line no-console
              console.log("Header search submit:", values);
            }}
          >
            {({ values, handleChange, submitForm }) => (
              <Form className="flex min-w-0 px-4 py-2 rounded-lg bg-white flex-1 items-center">
                <Search
                  className="h-[16px] w-[16px] text-[#94A3B8]"
                  strokeWidth={2}
                />
                <input
                  name="query"
                  value={values.query}
                  onChange={handleChange}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") submitForm();
                  }}
                  placeholder="Search data..."
                  className="ml-2 w-full bg-transparent text-[13px] font-semibold text-[#111827] placeholder:text-[#9CA3AF] outline-none"
                />
              </Form>
            )}
          </Formik>

          <div className="h-7 w-px bg-[#E5E7EB]" aria-hidden />

          <button
            type="button"
            className="inline-flex h-8 items-center gap-2 rounded-[10px] bg-white px-3 text-[12px] font-semibold text-[#4F46E5] hover:bg-[#F8FAFC]"
          >
            <Filter className="h-[14px] w-[14px]" strokeWidth={2} />
            Filter
          </button>

          <div className="h-7 w-px bg-[#E5E7EB]" aria-hidden />

          <button
            type="button"
            className="inline-flex h-8 items-center gap-2 rounded-[10px] bg-white px-3 text-[12px] font-semibold text-[#111827] hover:bg-[#F8FAFC]"
          >
            <CalendarDays className="h-[14px] w-[14px]" strokeWidth={2} />
            Today
            <SlidersHorizontal className="ml-1 h-[14px] w-[14px]" strokeWidth={2} />
          </button>

          <button
            type="button"
            className="ml-auto inline-flex h-8 items-center gap-2 rounded-[10px] bg-white px-3 text-[12px] font-semibold text-[#111827] hover:bg-[#F8FAFC]"
          >
            Export
            <Download className="h-[14px] w-[14px]" strokeWidth={2} />
          </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InnerBreadcrumbHeader({ title }) {
  const navigate = useNavigate();

  return (
    <div className={cx(MAIN_HEADER_HEIGHT, "w-full bg-white shadow-sm")}>
      <div className="mx-auto flex h-full w-full max-w-[1200px] items-center gap-4 px-6">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#EF4444] shadow-sm hover:bg-slate-50"
          aria-label="Go back"
        >
          <ChevronLeft className="h-[18px] w-[18px]" strokeWidth={2.5} />
        </button>

        <div className="min-w-0 flex-1">
          <p className="text-[15px] font-semibold text-[#0F172A]">{title}</p>
          <p className="mt-0.5 truncate text-[12px] font-medium text-[#64748B]">
            <NavLink to="/dashboard" className="hover:text-[#4F46E5]">
              Home
            </NavLink>
            <span className="mx-2 text-[#CBD5E1]" aria-hidden>
              |
            </span>
            <span className="text-[#64748B]">{title}</span>
          </p>
        </div>

        <div className="hidden min-w-0 flex-1 items-center justify-end gap-3 md:flex">
          <div className="flex w-full max-w-[300px] items-center rounded-[10px] bg-[#F8FAFC] px-3 py-2">
            <Search
              className="h-[18px] w-[18px] text-[#94A3B8]"
              strokeWidth={2}
            />
            <input
              placeholder="Search data..."
              className="ml-2 w-full bg-transparent text-[14px] font-medium text-[#0F172A] placeholder:text-[#94A3B8] outline-none"
            />
          </div>
          <button
            type="button"
            className="inline-flex h-10 items-center gap-2 rounded-[10px] border border-[#E5E7EB] bg-white px-4 text-[13px] font-semibold text-[#0F172A] shadow-sm hover:bg-slate-50"
          >
            <Filter className="h-[16px] w-[16px]" strokeWidth={2} />
            Filter
          </button>
          <button
            type="button"
            className="inline-flex h-10 items-center gap-2 rounded-[10px] border border-[#E5E7EB] bg-white px-4 text-[13px] font-semibold text-[#0F172A] shadow-sm hover:bg-slate-50"
          >
            Export
            <Download className="h-[16px] w-[16px]" strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}

const Header = () => {
  const { pathname } = useLocation();

  const variant = useMemo(
    () => (isMainDashboardPage(pathname) ? "main" : "inner"),
    [pathname],
  );
  const title = useMemo(() => titleFromPath(pathname), [pathname]);

  return (
    <header className="sticky top-0 z-40 w-full">
      {variant === "main" ? <MainToolbarHeader /> : <InnerBreadcrumbHeader title={title} />}
    </header>
  );
};

export default Header;