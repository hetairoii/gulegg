import { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Classic Eggs Benedict',
    author: 'Chef Maria',
    description: 'A brunch favorite featuring poached eggs, Canadian bacon, and rich hollandaise sauce on an English muffin.',
    imageUrl: 'https://images.pexels.com/photos/10307041/pexels-photo-10307041.jpeg',
    ingredients: [
      '4 English muffins, split',
      '8 slices Canadian bacon',
      '8 large eggs',
      '2 tbsp white vinegar',
      '1 cup hollandaise sauce',
      'Fresh chives, chopped (for garnish)',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Toast the English muffins until golden brown.',
      'In a skillet, warm the Canadian bacon over medium heat for 1-2 minutes per side.',
      'Fill a large saucepan with water and add vinegar. Bring to a gentle simmer.',
      'Create a gentle whirlpool and carefully crack eggs into the water.',
      'Poach for 3-4 minutes until whites are set but yolks are still runny.',
      'Place two muffin halves on each plate, top each with a slice of Canadian bacon.',
      'Remove poached eggs with a slotted spoon, drain, and place on top of the bacon.',
      'Drizzle with hollandaise sauce, garnish with chives, and season with salt and pepper.'
    ],
    prepTime: 15,
    cookTime: 10,
    difficulty: 'medium',
    tags: ['breakfast', 'brunch', 'poached', 'classic'],
    rating: 4.8,
    createdAt: '2023-08-12'
  },
  {
    id: '2',
    title: 'Mediterranean Shakshuka',
    author: 'Sophia K.',
    description: 'Eggs poached in a rich, spiced tomato sauce with bell peppers, onions, and aromatic herbs.',
    imageUrl: 'https://images.pexels.com/photos/4553111/pexels-photo-4553111.jpeg',
    ingredients: [
      '6 large eggs',
      '2 tbsp olive oil',
      '1 medium onion, diced',
      '1 red bell pepper, diced',
      '3 cloves garlic, minced',
      '1 tsp ground cumin',
      '1 tsp paprika',
      '½ tsp red pepper flakes',
      '1 can (28 oz) diced tomatoes',
      'Fresh parsley and cilantro, chopped',
      'Feta cheese, crumbled (optional)',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Heat olive oil in a large skillet over medium heat.',
      'Add onions and bell peppers, sauté until softened, about 5 minutes.',
      'Add garlic, cumin, paprika, and red pepper flakes, cook for 1 minute until fragrant.',
      'Pour in tomatoes, bring to a simmer and cook for 10 minutes until slightly thickened.',
      'Using a spoon, make 6 wells in the sauce and crack an egg into each.',
      'Cover and simmer gently for 8-10 minutes until egg whites are set but yolks are still runny.',
      'Garnish with herbs and feta cheese if using.',
      'Serve directly from the skillet with crusty bread on the side.'
    ],
    prepTime: 10,
    cookTime: 25,
    difficulty: 'easy',
    tags: ['breakfast', 'mediterranean', 'one-pan', 'vegetarian'],
    rating: 4.7,
    createdAt: '2023-09-20'
  },
  {
    id: '3',
    title: 'Cloud Eggs',
    author: 'Thomas J.',
    description: 'Impressive yet simple egg dish with fluffy whipped egg whites and golden yolks nestled in the center.',
    imageUrl: 'https://images.pexels.com/photos/5852534/pexels-photo-5852534.jpeg',
    ingredients: [
      '4 large eggs, separated',
      '¼ cup grated Parmesan cheese',
      '2 tbsp fresh chives, chopped',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Preheat oven to 450°F (230°C) and line a baking sheet with parchment paper.',
      'Separate the eggs, placing whites in a large bowl and yolks in individual small bowls.',
      'Beat the whites with a pinch of salt until stiff peaks form.',
      'Fold in Parmesan cheese and chives.',
      'Spoon the egg white mixture into 4 mounds on the baking sheet, creating a well in the center of each.',
      'Bake for 3 minutes until whites start to set and turn golden.',
      'Carefully place a yolk in the center of each cloud.',
      'Bake for another 3 minutes until yolks are just set but still runny.',
      'Season with pepper and serve immediately.'
    ],
    prepTime: 10,
    cookTime: 6,
    difficulty: 'medium',
    tags: ['breakfast', 'fancy', 'baked', 'low-carb'],
    rating: 4.5,
    createdAt: '2023-10-05'
  }
];