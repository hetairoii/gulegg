export interface EggPreparation {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  difficulty: 'easy' | 'medium' | 'hard';
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  steps: string[];
}

export interface Recipe {
  id: string;
  title: string;
  author: string;
  description: string;
  imageUrl: string;
  ingredients: string[];
  instructions: string[];
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
  rating: number;
  createdAt: string;
}

export interface Post {
  id: string;
  title: string;
  author: string;
  content: string;
  imageUrl: string;
  likes: number;
  comments: number;
  createdAt: string;
  tags: string[];
}