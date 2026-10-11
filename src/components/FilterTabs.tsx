import { memo, useState } from "react";
import { ViewTransition } from "react";

export type FilterTab = "nearest" | "closest";

interface FilterTabsProps {
  initialTab?: FilterTab;
  activeTab?: FilterTab;
  onChange?: (tab: FilterTab) => void;
}

const FilterTabs = memo(function FilterTabs({
  initialTab = "nearest",
  activeTab: controlledTab,
  onChange,
}: FilterTabsProps) {
  const [internalTab, setInternalTab] = useState<FilterTab>(initialTab);

  const currentTab = controlledTab !== undefined ? controlledTab : internalTab;

  const handleTabClick = (tab: FilterTab) => {
    if (controlledTab === undefined) {
      setInternalTab(tab);
    }
    onChange?.(tab);
  };

  return (
    <ViewTransition name="header-tabs">
      <div
        className="flex items-center gap-7 mt-5"
        role="tablist"
        aria-label="Filter locations"
      >
        <button
          type="button"
          role="tab"
          aria-selected={currentTab === "nearest"}
          onClick={() => handleTabClick("nearest")}
          className="flex flex-col items-center cursor-pointer group"
        >
          <span
            className={`text-[16px] font-semibold tracking-tight transition-colors ${
              currentTab === "nearest"
                ? "text-white"
                : "text-[#737887] hover:text-white/80"
            }`}
          >
            Nearest
          </span>
          {currentTab === "nearest" && (
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d8d] mt-1.5 shadow-[0_0_8px_rgba(255,77,141,0.8)]" />
          )}
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={currentTab === "closest"}
          onClick={() => handleTabClick("closest")}
          className="flex flex-col items-center cursor-pointer group"
        >
          <span
            className={`text-[16px] font-semibold tracking-tight transition-colors ${
              currentTab === "closest"
                ? "text-white"
                : "text-[#737887] hover:text-white/80"
            }`}
          >
            Closest
          </span>
          {currentTab === "closest" && (
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d8d] mt-1.5 shadow-[0_0_8px_rgba(255,77,141,0.8)]" />
          )}
        </button>
      </div>
    </ViewTransition>
  );
});

export default FilterTabs;
