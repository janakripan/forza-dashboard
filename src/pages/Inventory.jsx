import React from 'react';
import InventorySummaryCards from "../components/inventory/InventorySummaryCards";
import TopSellingItemsCard from "../components/inventory/TopSellingItemsCard";
import InventoryInfoListCard from "../components/inventory/InventoryInfoListCard";
import {
  inventorySummaryCards,
  manufacturedProducts,
  negativeStocks,
} from "../constants/inventoryPageData";
import { Calendar, Settings2 } from 'lucide-react';

const Inventory = () => {
  return (
    <main className="min-h-screen w-full bg-[#F7F8FC] px-6 pb-8 pt-6 overflow-y-auto">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col">
        
        {/* 1. Alfuttaim Top Bar */}
        <div className="relative h-14 w-full bg-gradient-to-r from-[#5949BE] via-[#7B69EE] to-[#5949BE] rounded-2xl flex items-center justify-between px-6 mb-8 shadow-lg shadow-[#5949BE]/20 overflow-hidden">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]" />
            <span className="relative z-10 text-white font-bold text-[18px] tracking-tight">Alfuttaim</span>
            <div className="relative z-10 flex items-center gap-3">
                <button className="flex items-center gap-2 bg-white px-4 py-1.5 rounded-xl text-[13px] font-bold text-[#1E293B] shadow-sm hover:bg-slate-50 transition-all">
                    <Calendar size={16} className="text-[#5949BE]" />
                    Today
                    <Settings2 size={16} className="text-[#94A3B8] ml-1" />
                </button>
            </div>
        </div>

        {/* 2. Header */}
        <div className="mb-8">
            <h1 className="text-[32px] font-black text-[#1E293B] tracking-tight">Inventory</h1>
        </div>

        {/* 3. KPI Cards */}
        <InventorySummaryCards cards={inventorySummaryCards} />

        {/* 4. Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
                <TopSellingItemsCard />
            </div>
            <div className="lg:col-span-4 flex flex-col gap-8">
                <InventoryInfoListCard title="Manufactured Products" rows={manufacturedProducts} />
                <InventoryInfoListCard title="Negative Stock" rows={negativeStocks} tone="danger" />
            </div>
        </div>
      </div>
    </main>
  );
};


export default Inventory;