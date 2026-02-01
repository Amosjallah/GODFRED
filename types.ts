
export interface ServiceProcess {
  step: string;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  icon: string;
  details?: string[];
  process?: ServiceProcess[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  image: string;
  gallery?: string[];
  description: string;
  fullDescription?: string;
  location: string;
  year?: string;
  client?: string;
  status?: 'Completed' | 'Ongoing' | 'Conceptual';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  projectType: string;
  image: string;
}

export interface LocationInfo {
  name: string;
  coords: { lat: number; lng: number };
  description: string;
  address?: string;
  phone?: string;
}
