import { useState, useTransition, useEffect, useRef } from "react";
import type { SalonCard } from "../types/salon";
import CardsListScreen from "./CardsListScreen";
import CardDetailScreen from "./CardDetailScreen";

export default function BeautySalonMobile() {
  const [selectedCard, setSelectedCard] = useState<SalonCard | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isReturning, setIsReturning] = useState(false);
  const [, startTransition] = useTransition();

  const selectedCardRef = useRef<SalonCard | null>(null);
  selectedCardRef.current = selectedCard;

  useEffect(() => {
    const handlePopState = () => {
      if (selectedCardRef.current) {
        setIsReturning(true);
        startTransition(() => {
          setSelectedCard(null);
        });
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleSelectCard = (card: SalonCard) => {
    window.history.pushState({ view: "detail" }, "");
    startTransition(() => {
      setIsReturning(false);
      setSelectedCard(card);
    });
  };

  const handleBack = () => {
    if (window.history.state?.view === "detail") {
      window.history.back();
    } else {
      setIsReturning(true);
      startTransition(() => {
        setSelectedCard(null);
      });
    }
  };

  const handleReturnAnimationEnd = () => {
    setIsReturning(false);
  };

  return (
    <div className="h-[100dvh] w-full overflow-hidden bg-[#f8f9fa] sm:h-auto sm:min-h-screen sm:bg-[#e8ebf0] sm:flex sm:items-center sm:justify-center sm:p-6 font-sans antialiased text-[#191b1f]">
      {/* Mobile Device Frame */}
      <div
        className="w-full h-full sm:max-w-[390px] sm:h-[820px] bg-[#f8f9fa] sm:rounded-[48px] sm:shadow-[0_20px_50px_rgba(0,0,0,0.18)] sm:border-[8px] sm:border-[#1e2024] relative overflow-hidden isolate flex flex-col justify-between select-none [transform:translateZ(0)]"
        style={{ WebkitMaskImage: "-webkit-radial-gradient(white, black)" }}
      >

        {/* Dynamic Island / Status Bar spacer (only displayed in desktop mockup frame) */}
        <div className="hidden sm:flex absolute top-0 left-0 right-0 h-8 z-30 items-center justify-between px-7 pointer-events-none opacity-75">
          <span className="text-[12px] font-semibold text-white">9:41</span>
          <div className="flex items-center gap-1.5 text-white">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L12 22l7.03-4.39C20.26 16.07 21 14.12 21 12c0-4.97-4.03-9-9-9z" />
            </svg>
            <span className="text-[11px] font-semibold">5G</span>
          </div>
        </div>

        {/* Separated Screen Components */}
        {selectedCard ? (
          <CardDetailScreen card={selectedCard} onBack={handleBack} />
        ) : (
          <CardsListScreen
            currentCardIndex={currentCardIndex}
            setCurrentCardIndex={setCurrentCardIndex}
            onSelectCard={handleSelectCard}
            isReturning={isReturning}
            onReturnAnimationEnd={handleReturnAnimationEnd}
          />
        )}
      </div>
    </div>
  );
}
