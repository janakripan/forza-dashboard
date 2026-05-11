/**
 * Accounts page dummy data.
 *
 * Replace this file with API responses later:
 * - Keep the same object shape so UI components remain unchanged.
 * - Move formatting (currency/labels) to the API adapter when available.
 */

export const accountsKpis = [
  {
    id: "receivable",
    label: "Total Receivable",
    value: "142,500.00",
    metaIconLabel: "Customers",
    metaText: "Across 42 active invoices",
    tone: "neutral",
  },
  {
    id: "payable",
    label: "Total Payable",
    value: "86,240.50",
    metaIconLabel: "Suppliers",
    metaText: "18 pending bills",
    tone: "neutral",
  },
  {
    id: "netBalance",
    label: "Net Balance",
    value: "56,259.50",
    metaIconLabel: "Positive",
    metaText: "Current operational cashflow",
    tone: "positive",
  },
];

export const salesSummaryRows = [
  { id: "s1", date: "May 05", customer: "Acme Corp", voucher: "INV-2026-001", amount: "$12,000.00" },
  { id: "s2", date: "May 05", customer: "Globex Inc", voucher: "INV-2026-002", amount: "$8,500.00" },
  { id: "s3", date: "May 05", customer: "Soylent Corp", voucher: "INV-2026-003", amount: "$15,200.00" },
  { id: "s4", date: "May 05", customer: "Initech", voucher: "INV-2026-004", amount: "$6,800.00" },
];

export const salesSummaryTotal = "$42,500.00";

export const journalSummaryRows = [
  { id: "j1", account: "Office Supplies", ref: "JRN-01", debit: "$240.50", credit: "-" },
  { id: "j2", account: "Petty Cash", ref: "JRN-01", debit: "-", credit: "$240.50" },
  { id: "j3", account: "Consulting...", ref: "JRN-02", debit: "$15,000.00", credit: "-" },
  { id: "j4", account: "Accounts P...", ref: "JRN-02", debit: "-", credit: "$15,000.00" },
];

export const journalTotals = { debit: "$15,240.50", credit: "$15,240.50" };

export const customerAccounts = [
  { id: "c1", name: "Acme Corp", invoices: 12, totalAmount: "45,000.00", balanceDue: "15,000.00", lastTrx: "Oct 24, 2023", balanceTone: "bad" },
  { id: "c2", name: "Globex Inc", invoices: 8, totalAmount: "28,500.00", balanceDue: "0.00", lastTrx: "Oct 20, 2023", balanceTone: "good" },
  { id: "c3", name: "Soylent Corp", invoices: 15, totalAmount: "62,450.00", balanceDue: "12,750.00", lastTrx: "Oct 19, 2023", balanceTone: "bad" },
  { id: "c4", name: "Initech", invoices: 6, totalAmount: "18,900.00", balanceDue: "2,100.00", lastTrx: "Oct 15, 2023", balanceTone: "warn" },
];

