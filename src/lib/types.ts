export interface BlogPost {
  id?: string;
  title: string;
  subtitle: string;
  slug?: string;
  content: string; // HTML content from Quill
  category: string;
  featured: boolean;
  author?: string;
  publishDate: string | Date;
  createdAt: string | Date;
  updatedAt?: string | Date;
  thumbnail?: string;
}

export interface FeedbackForm {
  id?: string;
  clientName: string;
  email: string;
  phone: string;
  company?: string;
  overallRating: number; // 1-5
  serviceQuality: number; // 1-5
  communication: number; // 1-5
  timeliness: number; // 1-5
  costValue: number; // 1-5
  wouldRecommend: number; // 1-5
  serviceSpecific?: string;
  serviceRating?: number; // 1-5
  comments: string;
  service?: string;
  createdAt: string | Date;
}

export interface ContactForm {
  id?: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string | Date;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

export interface JobPost {
  id?: string;
  title: string;
  type: string;
  location: string;
  experience: string;
  summary: string;
  description?: string;
  salary?: string;
  deadline?: string;
  featured: boolean;
  active: boolean;
  createdAt?: Date | { seconds: number };
  updatedAt?: Date | { seconds: number };
}
