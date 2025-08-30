import { Link } from 'react-router-dom';
import { Clock, Users, ChefHat } from 'lucide-react';
import { Recipe } from '@/data/recipes';
import { Card, CardContent } from '@/components/ui/card';

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-recipe-hover)] cursor-pointer">
      <Link to={`/recipe/${recipe.id}`}>
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-2">
            {recipe.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium bg-recipe-warm-light text-recipe-warm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-recipe-warm transition-colors">
            {recipe.title}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {recipe.description}
          </p>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{recipe.prepTime + recipe.cookTime}m</span>
            </div>
            
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{recipe.servings}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <ChefHat className="w-4 h-4" />
              <span>{recipe.difficulty}</span>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}