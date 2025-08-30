import { useParams, Link } from 'react-router-dom';
import { Clock, Users, ChefHat, ArrowLeft } from 'lucide-react';
import { recipes } from '@/data/recipes';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function RecipeDetail() {
  const { id } = useParams<{ id: string }>();
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Recipe not found</h1>
          <Link to="/">
            <Button variant="outline">Back to Recipes</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <Link to="/">
            <Button variant="ghost" className="mb-2 sm:mb-4 text-sm sm:text-base">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Recipes
            </Button>
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Recipe Header */}
        <div className="mb-6 sm:mb-8">
          <div className="aspect-[16/9] rounded-lg sm:rounded-xl overflow-hidden mb-4 sm:mb-6 shadow-[var(--shadow-recipe-card)]">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
            {recipe.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium bg-recipe-warm-light text-recipe-warm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">{recipe.title}</h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">{recipe.description}</p>
          
          <div className="grid grid-cols-3 gap-4 sm:flex sm:items-center sm:gap-6 lg:gap-8 text-foreground">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-center sm:text-left">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-recipe-warm mx-auto sm:mx-0" />
              <div>
                <div className="text-xs sm:text-sm text-muted-foreground">Total Time</div>
                <div className="font-semibold text-sm sm:text-base">{recipe.prepTime + recipe.cookTime} min</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-center sm:text-left">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-recipe-warm mx-auto sm:mx-0" />
              <div>
                <div className="text-xs sm:text-sm text-muted-foreground">Servings</div>
                <div className="font-semibold text-sm sm:text-base">{recipe.servings}</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-center sm:text-left">
              <ChefHat className="w-4 h-4 sm:w-5 sm:h-5 text-recipe-warm mx-auto sm:mx-0" />
              <div>
                <div className="text-xs sm:text-sm text-muted-foreground">Difficulty</div>
                <div className="font-semibold text-sm sm:text-base">{recipe.difficulty}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Ingredients */}
          <div className="lg:col-span-1">
            <Card className="h-fit">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg sm:text-xl font-bold">Ingredients</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 sm:space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-recipe-warm rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-foreground text-sm sm:text-base leading-relaxed">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Instructions */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg sm:text-xl font-bold">Instructions</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ol className="space-y-3 sm:space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-3 sm:gap-4">
                      <span className="w-6 h-6 sm:w-8 sm:h-8 bg-recipe-warm text-white rounded-full flex items-center justify-center font-semibold text-xs sm:text-sm flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <p className="text-foreground leading-relaxed pt-1 text-sm sm:text-base">{instruction}</p>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}