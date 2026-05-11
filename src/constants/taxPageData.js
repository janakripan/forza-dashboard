/**
 * Tax Report page dummy data.
 *
 * Replace this module with API responses later while keeping
 * the same object shapes to avoid UI refactors.
 */

export const taxSummaryCards = [
  {
    id: "output-tax",
    title: "Output Tax",
    amount: "450,000",
    currency: "Ð",
    tone: "output",
  },
  {
    id: "input-tax",
    title: "Input Tax",
    amount: "22,500",
    currency: "Ð",
    tone: "input",
  },
  {
    id: "total-payable",
    title: "Total Payable",
    amount: "47,050",
    currency: "Ð",
    tone: "payable",
  },
];

export const taxCategoryRows = [
  {
    id: "t1",
    category: "Sales",
    amount: "450,000.00",
    tax: "22,500.00",
    taxTone: "default",
    total: "472,500.00",
  },
  {
    id: "t2",
    category: "Sales Returns",
    amount: "450,000.00",
    tax: "22,500.00",
    taxTone: "default",
    total: "472,500.00",
  },
  {
    id: "t3",
    category: "Purchase",
    amount: "450,000.00",
    tax: "22,500.00",
    taxTone: "positive",
    total: "472,500.00",
  },
  {
    id: "t4",
    category: "Purchase Returns",
    amount: "450,000.00",
    tax: "22,500.00",
    taxTone: "default",
    total: "472,500.00",
  },
  {
    id: "t5",
    category: "Credit settlement",
    amount: "300,000.00",
    tax: "15,000.00",
    taxTone: "default",
    total: "315,000.00",
  },
  {
    id: "t6",
    category: "Net Income",
    amount: "200,000.00",
    tax: "10,000.00",
    taxTone: "default",
    total: "210,000.00",
  },
];

