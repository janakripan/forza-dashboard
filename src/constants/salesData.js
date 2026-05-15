export const salesStatsData = [
  {
    title: "Total Sales",
    amount: "1.24 M",
    subtitle: "Number of Invoice : 120",
    icon: "total-sales",
    color: "#5949BE",
  },
  {
    title: "Sales Returns",
    amount: "12.5k",
    subtitle: "Number of Invoice : 40",
    icon: "returns",
    color: "#EF4444",
  },
  {
    title: "Net Sales",
    amount: "42.5k",
    subtitle: "Sales - Sales Return",
    icon: "net-sales",
    color: "#3B82F6",
  },
  {
    title: "Customer Outstanding",
    amount: "12.5k",
    subtitle: "Number of Invoice : 120",
    icon: "outstanding",
    color: "#FBBF24",
  },
];

export const salesByTransactionData = [
  { name: "Cash", value: 4200, color: "#10B981" },
  { name: "Credit", value: 3200, color: "#EF4444" },
  { name: "Cheque", value: 1200, color: "#6366F1" },
  { name: "Other", value: 900, color: "#F59E0B" },
];

export const outstandingDueAgeingData = [
  { label: "< 30 Days", amount: "204k", percentage: 70, color: "#10B981" },
  { label: "30-60 Days", amount: "85k", percentage: 40, color: "#F59E0B" },
  { label: "> 60 Days", amount: "51k", percentage: 20, color: "#EF4444" },
];

const generateTableData = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    customer: `ACME CORP ${String.fromCharCode(65 + (i % 26))} L.L.C`,
    invCount: 10 + i * 2,
    amount: 1000 + i * 500,
    paid: 500 + i * 300,
    balance: 500 + i * 200,
    pendingInvoice: 5 + i,
  }));
};

export const customerSalesTableData = {
  recent: generateTableData(15),
  amount: generateTableData(12).sort((a, b) => b.amount - a.amount),
  incentive: generateTableData(10).sort((a, b) => b.invCount - a.invCount),
};
