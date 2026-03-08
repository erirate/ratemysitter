export interface Sitter {
  id: string;
  name: string;
  title: string;
  city: string;
  avatar: string;
  rating: number;
  reviewCount: number;
  bio: string;
  verified: boolean;
  online: boolean;
  metrics: {
    reliability: number;
    communication: number;
    professionalism: number;
    childEngagement: number;
    safety: number;
  };
}

export interface Review {
  id: string;
  sitterId: string;
  reviewerName: string;
  reviewerInitials: string;
  date: string;
  rating: number;
  text: string;
}

export const sitters: Sitter[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    title: "Professional Nanny",
    city: "Austin, TX",
    avatar: "",
    rating: 4.8,
    reviewCount: 124,
    bio: "Experienced nanny with 8+ years of childcare. CPR certified and First Aid trained.",
    verified: true,
    online: true,
    metrics: { reliability: 96, communication: 92, professionalism: 94, childEngagement: 98, safety: 95 },
  },
  {
    id: "2",
    name: "Emily Davis",
    title: "Babysitter & Tutor",
    city: "Austin, TX",
    avatar: "",
    rating: 4.6,
    reviewCount: 89,
    bio: "College student specializing in early childhood education. Great with toddlers!",
    verified: true,
    online: false,
    metrics: { reliability: 90, communication: 88, professionalism: 85, childEngagement: 95, safety: 92 },
  },
  {
    id: "3",
    name: "Maria Garcia",
    title: "Certified Childcare Provider",
    city: "Austin, TX",
    avatar: "",
    rating: 4.9,
    reviewCount: 203,
    bio: "Bilingual caregiver (English/Spanish). Specializes in infant and newborn care.",
    verified: true,
    online: true,
    metrics: { reliability: 98, communication: 95, professionalism: 97, childEngagement: 96, safety: 99 },
  },
  {
    id: "4",
    name: "Jessica Thompson",
    title: "Part-time Sitter",
    city: "Austin, TX",
    avatar: "",
    rating: 4.3,
    reviewCount: 45,
    bio: "Available evenings and weekends. Loves arts & crafts activities with kids.",
    verified: false,
    online: false,
    metrics: { reliability: 82, communication: 80, professionalism: 78, childEngagement: 90, safety: 85 },
  },
  {
    id: "5",
    name: "Amanda Wilson",
    title: "Live-in Nanny",
    city: "Dallas, TX",
    avatar: "",
    rating: 4.7,
    reviewCount: 156,
    bio: "Full-time live-in nanny with experience managing multiple children.",
    verified: true,
    online: true,
    metrics: { reliability: 94, communication: 91, professionalism: 93, childEngagement: 92, safety: 96 },
  },
  {
    id: "6",
    name: "Rachel Kim",
    title: "After-School Sitter",
    city: "Houston, TX",
    avatar: "",
    rating: 4.5,
    reviewCount: 67,
    bio: "Specializes in after-school care and homework help for elementary-age kids.",
    verified: false,
    online: true,
    metrics: { reliability: 88, communication: 86, professionalism: 84, childEngagement: 93, safety: 90 },
  },
];

export const reviews: Review[] = [
  {
    id: "r1",
    sitterId: "1",
    reviewerName: "Jennifer M.",
    reviewerInitials: "JM",
    date: "Feb 15, 2026",
    rating: 5,
    text: "Sarah is absolutely wonderful with our two kids. She's always on time and the kids adore her. Highly recommend!",
  },
  {
    id: "r2",
    sitterId: "1",
    reviewerName: "David K.",
    reviewerInitials: "DK",
    date: "Jan 28, 2026",
    rating: 4,
    text: "Very professional and reliable. Our daughter always has a great time. Only minor issue was a late arrival once.",
  },
  {
    id: "r3",
    sitterId: "1",
    reviewerName: "Lisa P.",
    reviewerInitials: "LP",
    date: "Jan 10, 2026",
    rating: 5,
    text: "Best sitter we've ever had. Sarah goes above and beyond — she even prepared healthy snacks and planned activities.",
  },
  {
    id: "r4",
    sitterId: "2",
    reviewerName: "Mark T.",
    reviewerInitials: "MT",
    date: "Feb 20, 2026",
    rating: 5,
    text: "Emily is great! She helped our son with his reading while babysitting. Two birds, one stone!",
  },
  {
    id: "r5",
    sitterId: "3",
    reviewerName: "Ana R.",
    reviewerInitials: "AR",
    date: "Mar 1, 2026",
    rating: 5,
    text: "Maria is incredible with our newborn. So gentle and experienced. We feel completely safe leaving our baby with her.",
  },
];

export const reviewTags = [
  "Punctual",
  "Great with toddlers",
  "CPR Certified",
  "Creative activities",
  "Good communicator",
  "Trustworthy",
  "Patient",
  "Energetic",
  "Clean & organized",
  "Flexible schedule",
  "Homework help",
  "Meal prep",
];
