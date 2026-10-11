export interface SalonCard {
  id: string;
  name: string;
  role: string;
  address: string;
  image: string;
}

export interface DayItem {
  day: string;
  date: string;
}

export type TimeSlotStatus = "available" | "disabled" | "selected";

export interface TimeSlot {
  id: string;
  time: string;
  status: TimeSlotStatus;
}
