/**
 * Accounts page (dashboard main page).
 *
 * UI components live in `src/components/account/*`.
 * Dummy data is isolated in `src/constants/accountPageData.js` so swapping to API
 * is a one-file change (or a simple adapter).
 */

import KpiRow from "../components/account/KpiRow";
import SalesSummary from "../components/account/SalesSummary";
import JournalSummary from "../components/account/JournalSummary";
import CustomerAccounts from "../components/account/CustomerAccounts";
import {
  accountsKpis,
  customerAccounts,
  journalSummaryRows,
  journalTotals,
  salesSummaryRows,
  salesSummaryTotal,
} from "../constants/accountPageData";

const Account = () => {
  return (
    <main className="min-h-[calc(100vh-72px)] w-full bg-[#F7F8FC] px-6 py-6">
      <div className="mx-auto w-full max-w-[1200px]">
        <h1 className="text-[24px] font-extrabold tracking-[-0.02em] text-[#0F172A]">
          Accounts
        </h1>

        <div className="mt-4">
          <KpiRow items={accountsKpis} />
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <SalesSummary rows={salesSummaryRows} total={salesSummaryTotal} />
          <JournalSummary rows={journalSummaryRows} totals={journalTotals} />
        </div>

        <div className="mt-5">
          <CustomerAccounts rows={customerAccounts} />
        </div>
      </div>
    </main>
  );
};

export default Account;