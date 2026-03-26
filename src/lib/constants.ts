import {
  Globe,
  RefreshCw,
  MessageCircle,
  CheckCircle2,
  Send,
  FileText,
  CreditCard,
  Star,
  Navigation as NavigationIcon,
  Briefcase,
  User,
  Clock,
  HeadphonesIcon as Headphones,
  ArrowRight,
  MapPin,
  Mail,
  Plane,
  Heart,
} from 'lucide-react';

export const VISA_SERVICES = [
  {
    title: "B1 VOA / Extension",
    description: "30-day visa on arrival with extension options. Perfect for short visits and tourism.",
    link: "https://indonesianvisas.com/services/B1",
    icon: "Navigation",
  },
  {
    title: "C1 Visit Visa",
    description: "Single entry visit visa for tourism purposes. Valid for 60 days with flexible dates.",
    link: "https://indonesianvisas.com/services/C1",
    icon: "Globe",
  },
  {
    title: "C2 Business Visa",
    description: "Business visa for meetings and conferences. Includes multiple entry options.",
    link: "https://indonesianvisas.com/services/C2",
    icon: "Briefcase",
  },
  {
    title: "C12 Pre-Investment Visa",
    description: "Pre-investment visa for business setup. Ideal for entrepreneurs and investors.",
    link: "https://indonesianvisas.com/services/C12",
    icon: "Star",
  },
  {
    title: "D1 Tourist Visa",
    description: "60-day tourist visa (B211A) with extensions up to 180 days total stay.",
    link: "https://indonesianvisas.com/services/D1",
    icon: "User",
  },
  {
    title: "D2 Business Visa",
    description: "Multiple entry business visa for professionals. Valid up to 12 months.",
    link: "https://indonesianvisas.com/services/D2",
    icon: "FileText",
  },
  {
    title: "D12 Pre Investment",
    description: "Pre-investment visa for business setup. Ideal for entrepreneurs and investors.",
    link: "https://indonesianvisas.com/services/D12",
    icon: "Star",
  },
  {
    title: "E33G Digital Nomad",
    description: "5-year digital nomad visa for remote workers. Live and work in Indonesia long-term.",
    link: "https://indonesianvisas.com/services/E33G",
    icon: "Globe",
  },
  {
    title: "E28A Investment Kitas",
    description: "Investment-based residence permit. Long-term stay for investors.",
    link: "https://indonesianvisas.com/services/E28A",
    icon: "CreditCard",
  },
  {
    title: "Custom Visa",
    description: "Tailored visa solutions for unique cases. We handle special requirements.",
    link: "https://indonesianvisas.com/services",
    icon: "FileText",
  },
] as const;

export const BENEFITS = [
  {
    title: "Fast Processing",
    description: "Express service available with same-day processing options for urgent applications",
    icon: "Clock",
  },
  {
    title: "99% Success Rate",
    description: "Proven track record with 10,000+ visas processed successfully worldwide",
    icon: "CheckCircle2",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock WhatsApp support for your peace of mind anytime, anywhere",
    icon: "Headphones",
  },
  {
    title: "97 Countries",
    description: "We serve applicants from 97 countries worldwide with local expertise",
    icon: "Globe",
  },
] as const;

export const SOCIAL_LINKS = [
  { name: "Telegram", url: "https://t.me/IndonesianVisas", bgClass: "bg-slate-800" },
  { name: "Instagram", url: "https://instagram.com/balihelp.id", bgClass: "bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600" },
  { name: "TikTok", url: "https://www.tiktok.com/@balihelp.id", bgClass: "bg-black" },
  { name: "Facebook", url: "https://facebook.com/BaliHelp", bgClass: "bg-blue-600" },
  { name: "Twitter", url: "https://twitter.com/IndonesianVisas", bgClass: "bg-sky-500" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/bayu-damopolii-887ab883/", bgClass: "bg-blue-700" },
  { name: "YouTube", url: "https://youtube.com/@balihelp", bgClass: "bg-red-600" },
] as const;

export const ICON_MAP = {
  Navigation: NavigationIcon,
  Globe,
  Briefcase,
  Star,
  User,
  FileText,
  CreditCard,
  Clock,
  CheckCircle2,
  Headphones,
  ArrowRight,
  Send,
  RefreshCw,
} as const;
