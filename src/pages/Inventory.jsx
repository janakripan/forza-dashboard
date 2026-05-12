import InventorySummaryCards from "../components/inventory/InventorySummaryCards";
import InventoryFilters from "../components/inventory/InventoryFilters";
import TopSellingItemsCard from "../components/inventory/TopSellingItemsCard";
import InventoryInfoListCard from "../components/inventory/InventoryInfoListCard";
import {
  inventorySummaryCards,
  manufacturedProducts,
  negativeStocks,
} from "../constants/inventoryPageData";

const Inventory = () => {
  return (
    <main className="min-h-[calc(100vh-100px)] w-full bg-[#F7F8FC] px-6 pb-4 pt-5">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col">
        <h1 className="text-[24px] font-extrabold tracking-[-0.02em] text-[#0F172A]">
          Inventory
        </h1>

        <div className="mt-4">
          <InventorySummaryCards cards={inventorySummaryCards} />
        </div>

        <InventoryFilters />

        <div className="mt-4 grid min-h-0 grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1.9fr)_minmax(0,1fr)]">
          <TopSellingItemsCard className="xl:h-[390px]" />

          <div className="space-y-4">
            <InventoryInfoListCard title="Manufactured Products" tone="default" rows={manufacturedProducts} />
            <InventoryInfoListCard title="Negative Stock" tone="danger" rows={negativeStocks} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Inventory;