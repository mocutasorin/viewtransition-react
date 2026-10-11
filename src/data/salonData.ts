import type { SalonCard, DayItem, TimeSlot } from "../types/salon";

export const cardsData: SalonCard[] = [
  {
    id: "1",
    name: "Brooke Sullivan",
    role: "Hairstylist",
    address: "468 Rodeo Dr, Beverly Hills",
    image: "/images/spa.jpg",
  },
  {
    id: "2",
    name: "Kendall Miller",
    role: "Master Stylist",
    address: "540 Madison Ave, New York",
    image: "/images/salon.jpg",
  },
  {
    id: "3",
    name: "Lauren Bennett",
    role: "Aesthetician",
    address: "645 N Michigan Ave, Chicago",
    image: "/images/spa.jpg",
  },
  {
    id: "4",
    name: "Whitney Taylor",
    role: "Color Specialist",
    address: "8490 Sunset Blvd, West Hollywood",
    image: "/images/salon.jpg",
  },
];

export const daysData: DayItem[] = [
  { day: "Tue", date: "24" },
  { day: "Wed", date: "25" },
  { day: "Thu", date: "26" },
  { day: "Fri", date: "27" },
  { day: "Sat", date: "28" },
];

export const initialTimeSlots: TimeSlot[] = [
  { id: "1", time: "10:00 AM", status: "disabled" },
  { id: "2", time: "11:30 AM", status: "disabled" },
  { id: "3", time: "1:00 PM", status: "disabled" },
  { id: "4", time: "1:30 PM", status: "available" },
  { id: "5", time: "3:00 PM", status: "available" },
  { id: "6", time: "5:00 PM", status: "available" },
  { id: "7", time: "5:30 PM", status: "disabled" },
  { id: "8", time: "6:30 PM", status: "available" },
];
