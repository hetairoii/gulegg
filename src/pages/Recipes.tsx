import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { recipes } from '../data/recipes';
import RecipeCard from '../components/recipes/RecipeCard';

const Recipes: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Extract unique tags from all recipes
  const allTags = Array.from(
    new Set(recipes.flatMap(recipe => recipe.tags))
  ).sort();
  
  // Filter recipes
  const filteredRecipes = recipes
    .filter(recipe => {
      const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesDifficulty = selectedDifficulty ? recipe.difficulty === selectedDifficulty : true;
      
      const matchesTag = selectedTag ? recipe.tags.includes(selectedTag) : true;
      
      return matchesSearch && matchesDifficulty && matchesTag;
    });

  const handleRecipeClick = (id: string) => {
    navigate(`/recipes/${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Egg-cellent Recipes</h1>
        <p className="text-lg text-gray-600">
          Discover delicious recipes that showcase the versatility of eggs.
          From breakfast classics to dinner mains, find your next favorite dish.
        </p>
      </div>
      
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-grow relative">
            <input
              type="text"
              placeholder="Search recipes, ingredients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            <select
              value={selectedDifficulty || ''}
              onChange={(e) => setSelectedDifficulty(e.target.value || null)}
              className="pl-4 pr-10 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent appearance-none"
              aria-label="Filter by difficulty"
            >
              <option value="">All Difficulties</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            
            <select
              value={selectedTag || ''}
              onChange={(e) => setSelectedTag(e.target.value || null)}
              className="pl-4 pr-10 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent appearance-none"
              aria-label="Filter by tag"
            >
              <option value="">All Tags</option>
              {allTags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {/* Tag Pills */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedTag(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            !selectedTag 
              ? 'bg-yellow-500 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedTag === tag 
                ? 'bg-yellow-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      
      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <div key={recipe.id} onClick={() => handleRecipeClick(recipe.id)}>
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600 mb-4">No recipes match your search criteria.</p>
          <button 
            onClick={() => {
              setSearchTerm('');
              setSelectedDifficulty(null);
              setSelectedTag(null);
            }}
            className="text-yellow-600 hover:text-yellow-700 font-medium"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Recipes;