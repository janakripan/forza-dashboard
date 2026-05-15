import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Search, Wallet, Landmark, CreditCard } from 'lucide-react';
import RevenueCard from './RevenueCard';
import { revenueSummaryData } from '../../constants/revenueData';

const RevenueSummary = ({ onSearch, onFilterChange }) => {
  const formik = useFormik({
    initialValues: {
      search: '',
      transactionType: 'All',
    },
    validationSchema: Yup.object({
      search: Yup.string(),
    }),
    onSubmit: (values) => {
      onSearch(values.search);
    },
  });

  const handleTypeChange = (e) => {
    formik.setFieldValue('transactionType', e.target.value);
    onFilterChange(e.target.value);
  };

  return (
    <div className="mb-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
        <h1 className="text-[24px] font-bold text-[#1E293B]">Total Revenue</h1>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
          <form onSubmit={formik.handleSubmit} className="relative flex-1 sm:min-w-[400px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" size={18} />
            <input
              id="search"
              name="search"
              type="text"
              placeholder="Search Invoice , Customer"
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E2E8F0] rounded-lg text-[14px] text-[#1E293B] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#5949BE]/20 focus:border-[#5949BE] transition-all"
              onChange={formik.handleChange}
              value={formik.values.search}
            />
          </form>

          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
                <Landmark size={16} className="text-[#64748B]" />
                <span className="text-[12px] font-semibold text-[#64748B] uppercase">Transaction Type</span>
            </div>
            <select
              name="transactionType"
              className="pl-40 pr-10 py-2.5 bg-white border border-[#E2E8F0] rounded-lg text-[14px] font-semibold text-[#1E293B] appearance-none focus:outline-none focus:ring-2 focus:ring-[#5949BE]/20 transition-all min-w-[240px]"
              onChange={handleTypeChange}
              value={formik.values.transactionType}
            >
              <option value="All">All</option>
              <option value="Paid">Paid</option>
              <option value="Credit Sale">Credit Sale</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex-[1.5] bg-[#F1F5F9] border border-[#E2E8F0] rounded-xl p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#1E293B]">
                    <span className="text-[28px] font-bold">Ð</span>
                </div>
                <div>
                    <h2 className="text-[32px] font-black text-[#1E293B]">{revenueSummaryData.totalRevenue}</h2>
                    <div className="flex items-center gap-2 mt-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23 6L13.5 15.5L8.5 10.5L1 18" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17 6H23V12" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-[13px] font-medium text-[#64748B]">Number of Invoice : <span className="font-bold">{revenueSummaryData.invoiceCount}</span></span>
                    </div>
                </div>
            </div>
        </div>

        <RevenueCard 
          title="Paid"
          amount={revenueSummaryData.paidAmount}
          icon={Wallet}
          color="#059669"
          iconBg="#ECFDF5"
        />

        <RevenueCard 
          title="Credit Sales"
          amount={revenueSummaryData.creditSales}
          icon={CreditCard}
          color="#D97706"
          iconBg="#FFFBEB"
        />
      </div>
    </div>
  );
};

export default RevenueSummary;
