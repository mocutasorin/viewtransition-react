import { memo, useState } from "react";

export type NavTab = "home" | "store" | "chat" | "settings";

interface BottomNavigationBarProps {
  initialNav?: NavTab;
  activeNav?: NavTab;
  onChange?: (tab: NavTab) => void;
}

const BottomNavigationBar = memo(function BottomNavigationBar({
  initialNav = "home",
  activeNav: controlledNav,
  onChange,
}: BottomNavigationBarProps) {
  const [internalNav, setInternalNav] = useState<NavTab>(initialNav);

  const currentNav = controlledNav !== undefined ? controlledNav : internalNav;

  const handleNavClick = (tab: NavTab) => {
    if (controlledNav === undefined) {
      setInternalNav(tab);
    }
    onChange?.(tab);
  };

  return (
    <nav
      aria-label="Bottom Navigation"
      className="bg-white border-t border-gray-100/80 px-8 py-3 pb-5 sm:pb-3.5 flex items-center justify-between"
    >
      {/* Home */}
      <button
        type="button"
        aria-label="Home"
        aria-current={currentNav === "home" ? "page" : undefined}
        onClick={() => handleNavClick("home")}
        className={`flex flex-col items-center gap-0.5 cursor-pointer transition-colors ${
          currentNav === "home" ? "text-[#ff4d8d]" : "text-[#b4b7c1] hover:text-gray-600"
        }`}
      >
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
        <span className="text-[10px] font-bold tracking-tight">
          Home
        </span>
      </button>

      {/* Store */}
      <button
        type="button"
        aria-label="Store"
        aria-current={currentNav === "store" ? "page" : undefined}
        onClick={() => handleNavClick("store")}
        className={`flex flex-col items-center gap-0.5 cursor-pointer transition-colors ${
          currentNav === "store" ? "text-[#ff4d8d]" : "text-[#b4b7c1] hover:text-gray-600"
        }`}
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 9l1-5h16l1 5" />
          <path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
          <path d="M4 14v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6" />
        </svg>
      </button>

      {/* Chat */}
      <button
        type="button"
        aria-label="Chat"
        aria-current={currentNav === "chat" ? "page" : undefined}
        onClick={() => handleNavClick("chat")}
        className={`flex flex-col items-center gap-0.5 cursor-pointer transition-colors ${
          currentNav === "chat" ? "text-[#ff4d8d]" : "text-[#b4b7c1] hover:text-gray-600"
        }`}
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="14" rx="3" />
          <path d="M7 18v3l4-3" />
          <line x1="7" y1="9" x2="17" y2="9" />
          <line x1="7" y1="13" x2="13" y2="13" />
        </svg>
      </button>

      {/* Settings */}
      <button
        type="button"
        aria-label="Settings"
        aria-current={currentNav === "settings" ? "page" : undefined}
        onClick={() => handleNavClick("settings")}
        className={`flex flex-col items-center gap-0.5 cursor-pointer transition-colors ${
          currentNav === "settings" ? "text-[#ff4d8d]" : "text-[#b4b7c1] hover:text-gray-600"
        }`}
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </button>
    </nav>
  );
});

export default BottomNavigationBar;
