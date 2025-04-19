import { Post } from '../types';

export const posts: Post[] = [
  {
    id: '1',
    title: 'How I Used Leftover Easter Eggs to Make an Amazing Salad',
    author: 'Emma G.',
    content:
      "After Easter, I found myself with a dozen leftover hard-boiled eggs. Instead of the usual egg salad, I decided to try something different. I created a Mediterranean-inspired salad with chopped eggs, cucumber, cherry tomatoes, Kalamata olives, and feta cheese, dressed with olive oil and lemon juice. The eggs added protein and made this a complete meal. My family loved it so much it's now in our regular rotation!",
    imageUrl:
      'https://images.pexels.com/photos/806457/pexels-photo-806457.jpeg',
    likes: 48,
    comments: 12,
    createdAt: '2023-04-18',
    tags: ['leftovers', 'salad', 'mediterranean', 'easter'],
  },
  {
    id: '2',
    title: 'My Secret to Perfect Fried Rice: Day-Old Eggs',
    author: 'Michael L.',
    content:
      "I've been experimenting with fried rice techniques for years, and I discovered that using day-old hard-boiled eggs makes a huge difference. I chop them finely and add them near the end of cooking. They absorb the sauce beautifully while maintaining their texture, unlike freshly scrambled eggs that can sometimes get rubbery. This technique has transformed my fried rice game completely!",
    imageUrl:
      'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg',
    likes: 103,
    comments: 27,
    createdAt: '2023-07-10',
    tags: ['fried rice', 'technique', 'asian cuisine', 'meal prep'],
  },
  {
    id: '3',
    title:
      'Elevating Breakfast: How I Incorporated Duck Eggs into My Morning Routine',
    author: 'Sarah J.',
    content:
      "After visiting a local farmers market, I picked up some duck eggs on a whim. Let me tell you—they've completely changed my breakfast game! Their rich, creamy yolks make for the most luxurious scrambled eggs I've ever tasted. I like to pair them with sourdough toast, smoked salmon, and a sprinkle of dill. The slightly larger size and higher fat content make them perfect for special weekend breakfasts when I want something a bit more indulgent.",
    imageUrl:
      'https://images.pexels.com/photos/139746/pexels-photo-139746.jpeg',
    likes: 76,
    comments: 19,
    createdAt: '2023-09-05',
    tags: ['duck eggs', 'gourmet', 'farmers market', 'breakfast'],
  },
];
