import React from 'react';
import { Clock, ChefHat, Users, Star } from 'lucide-react';
import { Recipe } from '../../types';

interface RecipeDetailProps {
  recipe: Recipe;
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe }) => {
  const { 
    title, 
    author, 
    description, 
    imageUrl, 
    ingredients, 
    instructions, 
    prepTime, 
    cookTime, 
    difficulty, 
    tags, 
    rating,
    createdAt 
  } = recipe;
  
  const totalTime = prepTime + cookTime;
  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const getDifficultyColor = () => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-700';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'hard':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h1>
        
        <div className="flex items-center mb-4">
          <div className="flex items-center bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
            <Star size={16} className="mr-1" fill="currentColor" />
            <span className="font-medium">{rating}</span>
          </div>
          <span className="mx-3 text-gray-400">•</span>
          <span className="text-gray-600">Posted on {formattedDate}</span>
        </div>
        
        <p className="text-lg text-gray-600 mb-4">{description}</p>
        
        <div className="flex items-center text-sm text-gray-600 mb-6">
          <span className="mr-2">By</span>
          <span className="font-medium text-yellow-600">{author}</span>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center px-4 py-2 bg-yellow-50 rounded-lg">
            <Clock size={20} className="text-yellow-600 mr-2" />
            <div>
              <p className="text-sm text-gray-500">Total Time</p>
              <p className="font-medium">{totalTime} min</p>
            </div>
          </div>
          
          <div className="flex items-center px-4 py-2 bg-yellow-50 rounded-lg">
            <ChefHat size={20} className="text-yellow-600 mr-2" />
            <div>
              <p className="text-sm text-gray-500">Difficulty</p>
              <p className={`font-medium ${getDifficultyColor().split(' ')[1]}`}>
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </p>
            </div>
          </div>
          
          <div className="flex items-center px-4 py-2 bg-yellow-50 rounded-lg">
            <Users size={20} className="text-yellow-600 mr-2" />
            <div>
              <p className="text-sm text-gray-500">Serves</p>
              <p className="font-medium">4 people</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
        <img src={imageUrl} alt={title} className="w-full h-80 object-cover" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-1">
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Ingredients</h2>
            <ul className="space-y-2">
              {ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-3"></span>
                  <span className="text-gray-700">{ingredient}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Instructions</h2>
            <ol className="space-y-6">
              {instructions.map((instruction, index) => (
                <li key={index} className="flex">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center font-medium mr-4">
                    {index + 1}
                  </span>
                  <p className="text-gray-700">{instruction}</p>
                </li>
              ))}
            </ol>
          </div>
          
          <div className="bg-yellow-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Chef's Notes</h3>
            <p className="text-gray-700">
              This recipe works best with fresh, room-temperature eggs. For an extra special touch, 
              try garnishing with fresh herbs like chives or parsley right before serving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;