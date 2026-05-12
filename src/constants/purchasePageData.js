export const purchaseSummaryCards = [
  {
    id: "total-purchase",
    title: "Total Purchase",
    value: "1,245,000",
    meta: "Number of Invoice : 120",
    tone: "primary",
  },
  {
    id: "purchase-return",
    title: "Purchase Return",
    value: "42,500",
    meta: "Number of Invoice : 120",
    tone: "danger",
  },
  {
    id: "supplier-outstanding",
    title: "Supplier Outstanding",
    value: "12,500",
    meta: "Total Bills : 120",
    tone: "primary",
  },
];

export const monthlyPurchaseTrend = [
  { day: "Sun", cash: 85, credit: 0 },
  { day: "Mon", cash: 70, credit: 45 },
  { day: "Tue", cash: 0, credit: 95 },
  { day: "Wed", cash: 135, credit: 0 },
  { day: "Thu", cash: 0, credit: 105 },
  { day: "Fri", cash: 120, credit: 0 },
  { day: "Sat", cash: 142, credit: 0, tag: "Ð142k" },
];

export const supplierDuesBreakdown = [
  { id: "apex-tech", name: "Apex Tech", value: 95, color: "#5546C9" },
  { id: "global-logistics", name: "Global Logistics", value: 45, color: "#6D52D9" },
  { id: "nexus-supply", name: "Nexus Supply", value: 20, color: "#A2357A" },
  { id: "others", name: "Others", value: 15, color: "#E8E8EC" },
];
export const supplierDuesTotalLabel = "185.2k";

const baseRows = [
  ["ACME CORP L.L.C", 42, "4200.00", "1200.00", "3000.00", 24],
  ["Blue Valley Supplies", 31, "3650.00", "850.00", "2800.00", 18],
  ["Nexus Source House", 26, "5100.00", "2500.00", "2600.00", 16],
  ["Orbit Wholesale Hub", 52, "7600.00", "4500.00", "3100.00", 21],
  ["Metro Paper Goods", 28, "2300.00", "1300.00", "1000.00", 9],
  ["Elevate Industrial", 39, "6200.00", "2100.00", "4100.00", 28],
  ["Prime Office Mart", 33, "3400.00", "1200.00", "2200.00", 14],
  ["Core Stationers", 22, "1900.00", "700.00", "1200.00", 7],
  ["Vertex Pack Systems", 47, "6800.00", "3200.00", "3600.00", 19],
  ["Urban Supply Grid", 29, "2750.00", "950.00", "1800.00", 11],
  ["Nova Consumables", 35, "4300.00", "1800.00", "2500.00", 13],
  ["Golden Binders Co.", 18, "1600.00", "500.00", "1100.00", 6],
];

function makeRows(multiplier = 1) {
  return baseRows.map((row, idx) => ({
    id: `${idx}-${multiplier}`,
    supplier: row[0],
    poOrder: row[1] + multiplier,
    amount: (Number(row[2]) * multiplier).toFixed(2),
    paid: (Number(row[3]) * multiplier).toFixed(2),
    balance: (Number(row[4]) * multiplier).toFixed(2),
    pendingInvoice: row[5] + multiplier,
  }));
}

export const purchaseTableData = {
  recent: makeRows(1),
  amount: makeRows(2),
  invoice: makeRows(3),
};
