
export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  longDescription?: string;
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  portrait: string;
  bio: string;
  expertise: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
}

export interface Package {
  id: string;
  name: string;
  price: string;
  features: string[];
  recommendedFor: string;
}
