export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  ingredients: string[];
  instructions: string[];
  tags: string[];
}

export const recipes: Recipe[] = [
  {
    id: 'pasta-carbonara',
    title: 'Classic Pasta Carbonara',
    description: 'A traditional Italian pasta dish with eggs, cheese, pancetta, and black pepper.',
    image: '/src/assets/pasta-carbonara.jpg',
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '400g spaghetti',
      '200g pancetta or guanciale, diced',
      '4 large eggs',
      '100g Pecorino Romano cheese, grated',
      '50g Parmesan cheese, grated',
      'Black pepper, freshly ground',
      'Salt to taste',
      '2 cloves garlic (optional)'
    ],
    instructions: [
      'Bring a large pot of salted water to boil and cook spaghetti according to package directions.',
      'While pasta cooks, heat a large skillet over medium heat and cook pancetta until crispy, about 5-7 minutes.',
      'In a bowl, whisk together eggs, Pecorino Romano, Parmesan, and a generous amount of black pepper.',
      'Reserve 1 cup of pasta cooking water, then drain the pasta.',
      'Add the hot pasta to the skillet with pancetta and toss to combine.',
      'Remove from heat and quickly stir in the egg mixture, adding pasta water gradually to create a creamy sauce.',
      'Serve immediately with extra cheese and black pepper.'
    ],
    tags: ['Italian', 'Pasta', 'Quick', 'Traditional']
  },
  {
    id: 'chocolate-cookies',
    title: 'Perfect Chocolate Chip Cookies',
    description: 'Soft, chewy chocolate chip cookies with crispy edges and gooey centers.',
    image: '/src/assets/chocolate-cookies.jpg',
    prepTime: 15,
    cookTime: 12,
    servings: 24,
    difficulty: 'Easy',
    ingredients: [
      '2¼ cups all-purpose flour',
      '1 tsp baking soda',
      '1 tsp salt',
      '1 cup butter, softened',
      '¾ cup granulated sugar',
      '¾ cup brown sugar, packed',
      '2 large eggs',
      '2 tsp vanilla extract',
      '2 cups chocolate chips'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'In a bowl, whisk together flour, baking soda, and salt.',
      'In a large bowl, cream together butter and both sugars until light and fluffy.',
      'Beat in eggs one at a time, then stir in vanilla.',
      'Gradually mix in the flour mixture until just combined.',
      'Fold in chocolate chips.',
      'Drop rounded tablespoons of dough onto ungreased baking sheets.',
      'Bake for 9-11 minutes or until golden brown.',
      'Cool on baking sheet for 2 minutes before transferring to wire rack.'
    ],
    tags: ['Dessert', 'Cookies', 'Sweet', 'Family-friendly']
  },
  {
    id: 'caesar-salad',
    title: 'Fresh Caesar Salad',
    description: 'Crispy romaine lettuce with homemade Caesar dressing, parmesan, and croutons.',
    image: '/src/assets/caesar-salad.jpg',
    prepTime: 20,
    cookTime: 0,
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      '1 large head romaine lettuce, chopped',
      '½ cup Parmesan cheese, grated',
      '1 cup croutons',
      '¼ cup mayonnaise',
      '2 tbsp lemon juice',
      '2 cloves garlic, minced',
      '1 tsp Dijon mustard',
      '1 tsp Worcestershire sauce',
      '2 anchovy fillets (optional)',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Wash and dry romaine lettuce thoroughly, then chop into bite-sized pieces.',
      'In a small bowl, whisk together mayonnaise, lemon juice, minced garlic, Dijon mustard, and Worcestershire sauce.',
      'If using anchovies, mash them and add to the dressing.',
      'Season dressing with salt and pepper to taste.',
      'In a large salad bowl, toss romaine lettuce with the dressing until evenly coated.',
      'Add Parmesan cheese and toss gently.',
      'Top with croutons and serve immediately.'
    ],
    tags: ['Salad', 'Healthy', 'Fresh', 'Quick']
  },
  {
    id: 'grilled-chicken',
    title: 'Herb-Crusted Grilled Chicken',
    description: 'Juicy grilled chicken breast with a flavorful herb and garlic marinade.',
    image: '/src/assets/grilled-chicken.jpg',
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '4 boneless, skinless chicken breasts',
      '¼ cup olive oil',
      '3 cloves garlic, minced',
      '2 tbsp fresh lemon juice',
      '1 tbsp fresh rosemary, chopped',
      '1 tbsp fresh thyme, chopped',
      '1 tsp dried oregano',
      '1 tsp salt',
      '½ tsp black pepper',
      '½ tsp paprika'
    ],
    instructions: [
      'In a bowl, combine olive oil, minced garlic, lemon juice, rosemary, thyme, oregano, salt, pepper, and paprika.',
      'Place chicken breasts in a resealable bag or dish and pour marinade over them.',
      'Marinate for at least 30 minutes, or up to 4 hours in the refrigerator.',
      'Preheat grill to medium-high heat.',
      'Remove chicken from marinade and grill for 6-8 minutes per side, or until internal temperature reaches 165°F.',
      'Let chicken rest for 5 minutes before slicing.',
      'Serve with your favorite sides.'
    ],
    tags: ['Chicken', 'Grilled', 'Healthy', 'Protein']
  }
];