export interface Guest {
  id: string;
  name: string;
  role: string;
  country: string;
  bio?: string;
  imageUrl: string;
}

export interface ScheduleEvent {
  time: string;
  title: string;
  description?: string;
  location?: string;
  highlight?: boolean;
}

export interface DaySchedule {
  date: string;
  dayName: string;
  events: ScheduleEvent[];
}

export interface Partner {
  name: string;
  logoUrl: string;
  tier: 'gold' | 'silver' | 'bronze' | 'media' | 'institutional';
}