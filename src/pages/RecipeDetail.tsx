import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { recipes } from '../data/recipes';
import RecipeDetailComponent from '../components/recipes/RecipeDetail';

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const recipe = recipes.find(recipe => recipe.id === id);
  
  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Recipe not found</h2>
        <p className="text-gray-600 mb-6">The recipe you're looking for doesn't exist.</p>
        <button
          onClick={() => navigate('/recipes')}
          className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to All Recipes
        </button>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <button
        onClick={() => navigate('/recipes')}
        className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium mb-8"
      >
        <ArrowLeft size={18} className="mr-2" />
        Back to All Recipes
      </button>
      
      <RecipeDetailComponent recipe={recipe} />
    </div>
  );
};

export default RecipeDetail;