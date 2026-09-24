export type PastEvent = {
  date: string;
  title: string;
  detail?: string;
  role: string;
};

export const pastEvents: PastEvent[] = [
  {
    date: "September 2026",
    title: "United Colours of Fashion",
    role: "Co-Host",
  },
  {
    date: "September 2026",
    title: "Daneesha Provo’s All Star Five",
    role: "Event Host",
  },
  {
    date: "October 2025",
    title: "Paris Fashion Week Show",
    detail: "Designer A.Kith",
    role: "Event Host",
  },
  {
    date: "August 2025",
    title: "Shady Pines Community BBQ",
    role: "Event Host",
  },
];
