import { useState } from "react";
import { ViewTransition } from "react";
import type { SalonCard } from "../types/salon";
import { daysData, initialTimeSlots } from "../data/salonData";

interface CardDetailScreenProps {
  card: SalonCard;
  onBack: () => void;
}

export default function CardDetailScreen({ card, onBack }: CardDetailScreenProps) {
  const [selectedDay, setSelectedDay] = useState("26");
  const [selectedTimeId, setSelectedTimeId] = useState("5");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  return (
    <div className="relative flex flex-col h-full justify-between bg-[#f8f9fa] overflow-hidden">
      {/* Background layer that increases in height */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none z-0 overflow-hidden anim-bg-expand-height">
        {/* Dark background fill */}
        <div className="absolute inset-0 bg-[#191a1e] rounded-bl-[60px]" />

        {/* Haute Couture Astral Sparkle & Radiant Star Geometry with Diagonal Shift */}
        <ViewTransition name="bg-astral-art">
          <div className="absolute top-[202px] -left-6 w-60 h-60 pointer-events-none rotate-[22deg] scale-110">
            {/* Ambient Luxury Glow Orb */}
            <div
              className="absolute inset-0 rounded-full opacity-35 blur-2xl pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(255,77,141,0.4) 0%, rgba(99,102,241,0.25) 50%, rgba(0,0,0,0) 70%)",
              }}
            />

            <svg
              className="w-full h-full pointer-events-none opacity-[0.16]"
              viewBox="0 0 200 200"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="detailStarGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#ff75a0" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="detailRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#ff4d8d" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              {/* Concentric delicate orbital accent rings */}
              <circle cx="120" cy="80" r="68" stroke="url(#detailRingGrad)" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
              <circle cx="120" cy="80" r="44" stroke="url(#detailRingGrad)" strokeWidth="1.2" opacity="0.8" />

              {/* Primary 4-pointed luxury star flare */}
              <path
                d="M 120 20 Q 120 80 180 80 Q 120 80 120 140 Q 120 80 60 80 Q 120 80 120 20 Z"
                fill="url(#detailStarGlowGrad)"
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

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col h-full justify-between pt-9 px-6 pb-6">
        {/* Top Area: Back Button + Profile Info & Thumbnail */}
        <div>
          {/* Back Arrow button */}
          <ViewTransition name="header-date-bell">
            <div>
              <button
                type="button"
                onClick={onBack}
                aria-label="Back to home"
                className="w-10 h-10 -ml-2 rounded-full flex items-center justify-center text-white hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
              >
                <svg
                  className="w-6 h-6 stroke-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
            </div>
          </ViewTransition>

          {/* Profile Header Row */}
          <div className="flex items-start justify-between mt-3">
            <div className="flex-1 pr-4">
              <ViewTransition name="header-title">
                <div>
                  <h1 className="text-[25px] font-bold text-white tracking-tight leading-tight">
                    {card.name}
                  </h1>
                  <p className="text-[17px] font-semibold text-gray-400 tracking-tight mt-0.5">
                    {card.role}
                  </p>
                </div>
              </ViewTransition>

              <ViewTransition name="header-tabs">
                <div className="flex items-center gap-1.5 text-gray-400 mt-2">
                  <svg
                    className="w-4 h-4 text-gray-400 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
                  </svg>
                  <span className="text-[13px] font-medium text-gray-400">
                    {card.address}
                  </span>
                </div>
              </ViewTransition>
            </div>

            {/* Profile Thumbnail with ViewTransition */}
            <ViewTransition name="salon-card-active">
              <div>
                <ViewTransition name="salon-img-active">
                  <div className="w-[74px] h-[74px] rounded-[22px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.35)] border-2 border-white/10 flex-shrink-0 bg-[#252830]">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-full object-cover object-[center_35%]"
                    />
                  </div>
                </ViewTransition>
              </div>
            </ViewTransition>
          </div>

          {/* 1. Days Horizontal Calendar Row */}
          <div
            className="flex items-center justify-between mt-7 px-1"
            role="radiogroup"
            aria-label="Select appointment day"
          >
            {daysData.map((d, idx) => {
              const isSelected = selectedDay === d.date;
              return (
                <button
                  key={d.date}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  aria-label={`${d.day}, ${d.date}`}
                  onClick={() => setSelectedDay(d.date)}
                  style={{ animationDelay: `${200 + idx * 60}ms` }}
                  className="anim-fade-in-up flex flex-col items-center gap-2 group cursor-pointer"
                >
                  <span
                    className={`text-[14px] font-medium transition-colors ${isSelected ? "text-[#ff4d8d] font-bold" : "text-gray-400"
                      }`}
                  >
                    {d.day}
                  </span>

                  <div
                    className={`w-[52px] h-[58px] rounded-[20px] flex items-center justify-center text-[18px] font-bold transition-all duration-200 ${isSelected
                      ? "bg-[#ff4d8d] text-white shadow-[0_4px_20px_rgba(255,77,141,0.5)] scale-105"
                      : "bg-[#252830] text-white hover:bg-[#2d313b] active:scale-95"
                      }`}
                  >
                    {d.date}
                  </div>
                </button>
              );
            })}
          </div>

          {/* 2. Time Selection Section */}
          <div className="mt-7 anim-fade-in-times">
            <h2 className="text-[19px] font-bold text-white tracking-tight mb-4">
              Time
            </h2>

            {/* 3x3 Time Grid */}
            <div
              className="grid grid-cols-3 gap-2.5"
              role="radiogroup"
              aria-label="Select appointment time"
            >
              {initialTimeSlots.map((slot) => {
                const isSelected = selectedTimeId === slot.id;
                const isAvailable = slot.status !== "disabled";

                return (
                  <button
                    key={slot.id}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    aria-label={`${slot.time} ${!isAvailable && !isSelected ? "(Unavailable)" : ""}`}
                    disabled={!isAvailable && !isSelected}
                    onClick={() => isAvailable && setSelectedTimeId(slot.id)}
                    className={`py-3.5 px-2 relative rounded-[20px] text-[13px] font-bold transition-all duration-200 ${isSelected
                      ? "bg-[#ff4d8d] text-white shadow-[0_4px_20px_rgba(255,77,141,0.5)] scale-[1.02]"
                      : isAvailable
                        ? "bg-white text-[#181a1f] shadow-[0_2px_8px_rgba(0,0,0,0.15)] hover:bg-gray-100 hover:scale-[1.02] active:scale-95 cursor-pointer"
                        : "bg-[#252830]/70 text-gray-500 cursor-not-allowed opacity-60"
                      }`}
                  >
                    {slot.time}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3. Bottom Booking Button */}
        <div className="pt-2 anim-fade-in-booking">
          <button
            type="button"
            aria-live="polite"
            onClick={() => setBookingSuccess(true)}
            className="w-full h-[56px] bg-[#ff4d8d] text-white font-extrabold text-[18px] rounded-[24px] shadow-[0_8px_24px_rgba(255,77,141,0.45)] flex items-center justify-center hover:bg-[#ff387f] active:scale-[0.98] transition-all cursor-pointer"
          >
            {bookingSuccess ? "Appointment Confirmed! ✓" : "Booking"}
          </button>
        </div>
      </div>
    </div>
  );
}
