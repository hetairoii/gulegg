import { EggPreparation } from '../types';

export const eggPreparations: EggPreparation[] = [
  {
    id: '1',
    title: 'Scrambled Eggs',
    description: 'Soft, fluffy scrambled eggs made to perfection. A breakfast classic that never disappoints.',
    imageUrl: 'https://images.pexels.com/photos/6294248/pexels-photo-6294248.jpeg',
    difficulty: 'easy',
    prepTime: 2,
    cookTime: 5,
    steps: [
      'Crack eggs into a bowl and whisk until combined.',
      'Add a splash of milk or cream for extra richness (optional).',
      'Heat butter in a non-stick pan over medium-low heat.',
      'Pour in the eggs and let them set slightly before gently folding with a spatula.',
      'Continue folding until eggs are just set but still moist.',
      'Season with salt and pepper to taste and serve immediately.'
    ]
  },
  {
    id: '2',
    title: 'Poached Eggs',
    description: 'Delicate poached eggs with perfectly runny yolks. Master this technique for restaurant-quality brunches at home.',
    imageUrl: 'https://images.pexels.com/photos/4198026/pexels-photo-4198026.jpeg',
    difficulty: 'medium',
    prepTime: 2,
    cookTime: 4,
    steps: [
      'Bring a pot of water to a gentle simmer.',
      'Add a splash of vinegar to help the egg whites coagulate faster.',
      'Create a gentle whirlpool in the water with a spoon.',
      'Crack an egg into a small bowl, then carefully slide it into the center of the whirlpool.',
      'Cook for 3-4 minutes for a runny yolk.',
      'Remove with a slotted spoon and place on a paper towel to drain excess water.',
      'Season with salt and pepper before serving.'
    ]
  },
  {
    id: '3',
    title: 'Sunny Side Up',
    description: 'Classic sunny side up eggs with crispy edges and runny yolks. Perfect on toast or alongside breakfast potatoes.',
    imageUrl: 'https://images.pexels.com/photos/5848052/pexels-photo-5848052.jpeg',
    difficulty: 'easy',
    prepTime: 1,
    cookTime: 3,
    steps: [
      'Heat a non-stick pan over medium heat and add butter or oil.',
      'Crack the egg directly into the pan without breaking the yolk.',
      'Cook until the whites are set but the yolk is still runny, about 2-3 minutes.',
      'Season with salt and pepper before serving.'
    ]
  },
  {
    id: '4',
    title: 'Hard-Boiled Eggs',
    description: 'Perfectly cooked hard-boiled eggs with no green ring around the yolk. Great for meal prep, salads, or snacking.',
    imageUrl: 'https://images.pexels.com/photos/793785/pexels-photo-793785.jpeg',
    difficulty: 'easy',
    prepTime: 1,
    cookTime: 10,
    steps: [
      'Place eggs in a single layer in a saucepan and cover with cold water by an inch.',
      'Bring water to a rolling boil over high heat.',
      'Once boiling, reduce heat to maintain a gentle boil and start timing for 9 minutes for hard-boiled eggs.',
      'Prepare an ice bath while eggs are cooking.',
      'Immediately transfer eggs to the ice bath to stop cooking process.',
      'Let cool for 10 minutes before peeling.'
    ]
  }
];