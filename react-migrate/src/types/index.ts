// Modal Types
export type ModalType = 'demo' | 'upload' | 'contact' | null;

export interface ModalContextType {
  currentModal: ModalType;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
}

// Blog Types
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: 'case-study' | 'blog-post' | 'product';
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
  content?: string;
}

// Pricing Types
export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: number;
  priceYearly: number;
  yearlyTotal: number;
  yearlySavings: number;
  features: string[];
  disabledFeatures?: string[];
  idealFor: string;
  isFeatured?: boolean;
  isFree?: boolean;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  quote: string;
  personName: string;
  personPosition: string;
  personInitials: string;
  companyLogo: string;
  companyName: string;
}

// FAQ Types
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Form Types
export interface DemoFormData {
  name: string;
  email: string;
  company: string;
  useCase: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

