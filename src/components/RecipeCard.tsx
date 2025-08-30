import { Link } from 'react-router-dom';
import { Clock, List, ChefHat } from 'lucide-react';
import { Recipe } from '@/data/recipes';
import { Card, CardContent } from '@/components/ui/card';

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-recipe-hover)] cursor-pointer h-full">
      <Link to={`/recipe/${recipe.id}`} className="block h-full">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-4 sm:p-6 flex flex-col h-full">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            {recipe.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium bg-recipe-warm-light text-recipe-warm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-recipe-warm transition-colors leading-tight">
            {recipe.title}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">
            {recipe.description}
          </p>
          
          <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground mt-auto pt-2">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{recipe.prepTime + recipe.cookTime}m</span>
            </div>
            
            <div className="flex items-center gap-1">
              <List className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{recipe.ingredients.length}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <ChefHat className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline sm:inline">{recipe.difficulty}</span>
              <span className="xs:hidden sm:hidden">{recipe.difficulty.slice(0,1)}</span>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}