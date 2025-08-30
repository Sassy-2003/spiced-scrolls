import { Search } from 'lucide-react';
import { recipes } from '@/data/recipes';
import { RecipeCard } from '@/components/RecipeCard';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import heroBackground from '@/assets/hero-background.jpg';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header 
        className="relative bg-gradient-to-r from-recipe-warm to-recipe-green text-white overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-recipe-warm/90 to-recipe-green/90 backdrop-blur-[1px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
              Delicious Recipes
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/95 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Discover amazing recipes with step-by-step instructions for every occasion.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xs sm:max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 z-10" />
              <Input
                type="text"
                placeholder="Search recipes..."
                className="pl-10 bg-white/95 backdrop-blur-sm border-white/20 shadow-lg h-12 text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Recipes Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            {searchTerm ? 'Search Results' : 'All Recipes'}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">No recipes found</h3>
            <p className="text-sm sm:text-base text-muted-foreground">Try searching with different keywords.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t mt-12 sm:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="text-center text-muted-foreground">
            <p className="text-sm sm:text-base">&copy; 2024 Delicious Recipes. Made with ❤️ for food lovers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;