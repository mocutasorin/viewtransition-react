import { useState, useEffect, useRef } from "react";
import { ViewTransition } from "react";
import type { SalonCard } from "../types/salon";
import { cardsData } from "../data/salonData";
import BottomNavigationBar from "./BottomNavigationBar";
import FilterTabs from "./FilterTabs";

const CARD_WIDTH = 270;
const CARD_GAP = 16;
const CARD_STEP = CARD_WIDTH + CARD_GAP;

interface CardsListScreenProps {
  onSelectCard: (card: SalonCard) => void;
  currentCardIndex: number;
  setCurrentCardIndex: React.Dispatch<React.SetStateAction<number>>;
  isReturning?: boolean;
  onReturnAnimationEnd?: () => void;
}

export default function CardsListScreen({
  onSelectCard,
  currentCardIndex,
  setCurrentCardIndex,
  isReturning = false,
  onReturnAnimationEnd,
}: CardsListScreenProps) {
  const dragStartX = useRef<number | null>(null);
  const isDragging = useRef(false);
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  useEffect(() => {
    if (isReturning) {
      const timer = setTimeout(() => {
        onReturnAnimationEnd?.();
      }, 900);
      return () => clearTimeout(timer);
    }
  }, [isReturning, onReturnAnimationEnd]);

  const handleCardClick = (card: SalonCard, idx: number) => {
    if (isReturning || isDragging.current) return;
    setCurrentCardIndex(idx);
    setSelectedCardId(card.id);
    onSelectCard(card);
  };

  const nextCard = () => {
    if (isReturning) return;
    setCurrentCardIndex((prev) => (prev + 1) % cardsData.length);
  };

  const prevCard = () => {
    if (isReturning) return;
    setCurrentCardIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    isDragging.current = false;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    if (Math.abs(e.clientX - dragStartX.current) > 10) {
      isDragging.current = true;
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const diff = dragStartX.current - e.clientX;
    if (diff > 40) {
      nextCard();
    } else if (diff < -40) {
      prevCard();
    }
    dragStartX.current = null;
    setTimeout(() => {
      isDragging.current = false;
    }, 50);
  };

  const handlePointerCancel = () => {
    dragStartX.current = null;
    isDragging.current = false;
  };

  return (
    <div className="relative flex flex-col h-full justify-between overflow-hidden">
      {/* Dark Header Background with Straight Bottom Edge and Rounded Bottom-Left Corner */}
      <div className="absolute top-0 left-0 right-0 h-[55%] bg-[#191a1e] rounded-bl-[60px] pointer-events-none z-0 overflow-hidden">
        {/* Haute Couture Astral Sparkle & Radiant Star Geometry */}
        <ViewTransition name="bg-astral-art">
          <div className="absolute -top-2 -right-4 w-60 h-60 pointer-events-none">
            {/* Ambient Luxury Glow Orb */}
            <div
              className="absolute inset-0 rounded-full opacity-30 blur-2xl pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(255,77,141,0.35) 0%, rgba(99,102,241,0.2) 50%, rgba(0,0,0,0) 70%)",
              }}
            />

            <svg
              className="w-full h-full pointer-events-none opacity-[0.16]"
              viewBox="0 0 200 200"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="starGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#ff75a0" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#ff4d8d" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              {/* Concentric delicate orbital accent rings */}
              <circle cx="120" cy="80" r="68" stroke="url(#ringGrad)" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
              <circle cx="120" cy="80" r="44" stroke="url(#ringGrad)" strokeWidth="1.2" opacity="0.8" />

              {/* Primary 4-pointed luxury star flare */}
              <path
                d="M 120 20 Q 120 80 180 80 Q 120 80 120 140 Q 120 80 60 80 Q 120 80 120 20 Z"
                fill="url(#starGlowGrad)"
              />

              {/* Tiny sparkling satellite stars */}
              <path
                d="M 64 36 Q 64 50 78 50 Q 64 50 64 64 Q 64 50 50 50 Q 64 50 64 36 Z"
                fill="#ffffff"
                opacity="0.7"
              />
              <path
                d="M 154 130 Q 154 140 164 140 Q 154 140 154 150 Q 154 140 144 140 Q 154 140 154 130 Z"
                fill="#ff75a0"
                opacity="0.8"
              />

              {/* Subtle micro dots */}
              <circle cx="85" cy="115" r="1.5" fill="#ffffff" opacity="0.6" />
              <circle cx="150" cy="45" r="1.5" fill="#ffffff" opacity="0.8" />
            </svg>
          </div>
        </ViewTransition>
      </div>

      {/* Contracting straight grey layer on return */}
      {isReturning && (
        <div
          onAnimationEnd={onReturnAnimationEnd}
          className="absolute top-0 left-0 right-0 pointer-events-none z-[1] overflow-hidden anim-bg-contract-height bg-[#191a1e] rounded-bl-[60px]"
        />
      )}

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col h-full justify-between pt-[max(0.75rem,env(safe-area-inset-top))] sm:pt-8">
        {/* Header Section */}
        <div className="px-6 pt-2">
          {/* Level 1: Date & Bell */}
          <ViewTransition name="header-date-bell">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[14px] font-semibold tracking-wide">
                <span className="text-[#6573a6]">Jan,</span>
                <span className="text-white/95">31</span>
              </div>

              {/* Notification Bell */}
              <button
                type="button"
                aria-label="Notifications"
                className="w-11 h-11 rounded-full bg-[#26282e]/90 text-white/90 flex items-center justify-center hover:bg-[#32353d] active:scale-95 transition-all shadow-[0_4px_12px_rgba(0,0,0,0.3)] cursor-pointer"
              >
                <svg
                  className="w-5 h-5 text-gray-200"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
              </button>
            </div>
          </ViewTransition>

          {/* Level 2: Title */}
          <ViewTransition name="header-title">
            <div className="mt-0.5">
              <h1 className="text-[25px] font-bold text-white tracking-tight">
                Hello, Jessica
              </h1>
            </div>
          </ViewTransition>
          <FilterTabs />
        </div>

        {/* Center Card Carousel Area */}
        <div className={`relative mt-2 w-full overflow-hidden ${isReturning ? "pointer-events-none" : ""}`}>
          <div className="flex items-center">
            <div
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerCancel}
              className="flex transition-transform duration-500 ease-out gap-4 cursor-grab active:cursor-grabbing w-full touch-pan-y pl-5"
              style={{ transform: `translateX(-${currentCardIndex * CARD_STEP}px)` }}
            >
              {cardsData.map((card, idx) => {
                const isCurrent = idx === currentCardIndex;
                const isTransitioning =
                  selectedCardId === card.id ||
                  (!selectedCardId && isCurrent);
                return (
                  <ViewTransition
                    key={card.id}
                    name={isTransitioning ? "salon-card-active" : undefined}
                  >
                    <div
                      onClick={() => handleCardClick(card, idx)}
                      className={`w-[270px] min-w-[270px] bg-white rounded-[30px] p-2.5 pb-4 shadow-[0_12px_32px_rgba(0,0,0,0.06)] border border-gray-100/70 transition-all duration-300 flex-shrink-0 cursor-pointer group ${isCurrent ? "scale-100 opacity-100" : "scale-[0.97] opacity-80"
                        }`}
                    >
                      {/* Card Image with separate continuous ViewTransition */}
                      <ViewTransition
                        name={isTransitioning ? "salon-img-active" : undefined}
                      >
                        <div className="relative w-full h-[215px] rounded-[24px] overflow-hidden bg-gray-100">
                          <img
                            src={card.image}
                            alt={card.name}
                            className="w-full h-full object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </ViewTransition>

                      {/* Card Info */}
                      <div className="mt-3.5 px-2">
                        <h2 className="text-[18px] font-bold text-[#181a1f] tracking-tight leading-snug">
                          {card.name}
                        </h2>
                        <p className="text-[15px] font-semibold text-[#272930] mt-0.5">
                          {card.role}
                        </p>

                        <div className="flex items-center justify-between mt-2.5 pt-0.5">
                          <div className="flex items-center gap-1.5 text-gray-400">
                            <svg
                              className="w-3.5 h-3.5 text-gray-400 flex-shrink-0"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
                            </svg>
                            <span className="text-[12px] font-medium text-gray-400 tracking-tight">
                              {card.address}
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCardClick(card, idx);
                            }}
                            aria-label={`Book appointment with ${card.name}`}
                            className="w-7 h-7 rounded-full flex items-center justify-center text-[#ff4d8d] hover:bg-pink-50 active:scale-95 transition-all"
                          >
                            <svg
                              className="w-5 h-5 stroke-[#ff4d8d]"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <line x1="5" y1="12" x2="19" y2="12" />
                              <polyline points="12 5 19 12 12 19" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </ViewTransition>
                );
              })}
            </div>
          </div>

          {/* Pagination Indicators */}
          <div className={`flex items-center justify-center gap-1.5 mt-4 ${isReturning ? "pointer-events-none" : ""}`}>
            {cardsData.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === currentCardIndex ? "true" : undefined}
                onClick={() => {
                  if (isReturning) onReturnAnimationEnd?.();
                  setCurrentCardIndex(i);
                }}
                className={`transition-all duration-300 rounded-full h-1.5 cursor-pointer ${i === currentCardIndex
                  ? "w-6 bg-[#ff4d8d]"
                  : "w-1.5 bg-gray-300 hover:bg-gray-400"
                  }`}
              />
            ))}
          </div>
        </div>
        <BottomNavigationBar />
      </div>
    </div>
  );
}
