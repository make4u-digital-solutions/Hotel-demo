"use client";

import { ArrowUpDown, SlidersHorizontal } from "lucide-react";

export default function RoomFilters({
  categories = [],
  activeCategory,
  onSelectCategory,
  sortBy,
  onSortChange,
  totalCount = 0,
}) {
  return (
    <div className="py-6 sm:py-8 bg-[#FFFFFF] border-b border-[#E7E4DC] sticky top-[60px] sm:top-[68px] z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Categories Tab Group */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
            <span className="text-[11px] uppercase tracking-wider text-[#73766E] font-medium hidden sm:inline mr-2 shrink-0">
              Filter By:
            </span>
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => onSelectCategory(cat)}
                  aria-pressed={isActive}
                  className={`px-4 py-2 text-xs uppercase tracking-wider whitespace-nowrap transition-all border shrink-0 focus:outline-none focus:ring-1 focus:ring-[#78866B] ${
                    isActive
                      ? "bg-[#414C38] text-white border-[#414C38] font-medium shadow-xs"
                      : "bg-[#F8F6F0] text-[#73766E] border-[#E7E4DC] hover:text-[#292B27] hover:border-[#78866B]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Sort & Count Controls */}
          <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 text-xs text-[#73766E]">
            <span className="font-light">
              Showing <strong className="font-medium text-[#292B27]">{totalCount}</strong> suites
            </span>

            <div className="flex items-center gap-2">
              <label htmlFor="room-sort" className="sr-only">
                Sort accommodations
              </label>
              <div className="relative inline-flex items-center">
                <ArrowUpDown className="w-3.5 h-3.5 text-[#78866B] absolute left-2.5 pointer-events-none" />
                <select
                  id="room-sort"
                  value={sortBy}
                  onChange={(e) => onSortChange(e.target.value)}
                  className="pl-7 pr-4 py-1.5 bg-[#F8F6F0] border border-[#E7E4DC] text-xs text-[#292B27] uppercase tracking-wider focus:outline-none focus:border-[#414C38] cursor-pointer"
                >
                  <option value="recommended">Featured Order</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="size">Size: Largest First</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
