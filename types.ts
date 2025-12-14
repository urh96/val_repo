
export type ProjectCategory = 'Mize' | 'Renderji' | 'Vinske kleti';

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  imageUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TableProduct {
  id: string;
  name: string;
  imageUrl: string;
  startingPrice?: number;
}

export interface VisualizationPackage {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
}

export interface VisualizationProject {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
  layout: 'full-width' | 'two-column' | 'before-after';
  beforeImage?: string;
}
