// Data types and interfaces for the portfolio

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  codeUrl?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  content?: string;
  url?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  image: string;
  text: string;
  rating: number;
}

export interface Experience {
  company: string;
  position: string;
  year: string;
  description: string;
  achievements: string[];
}

export interface Education {
  school: string;
  degree: string;
  year: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  icon: any;
  features: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
