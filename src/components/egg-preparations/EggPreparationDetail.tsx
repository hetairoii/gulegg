import React from 'react';
import { Clock, ChefHat } from 'lucide-react';
import { EggPreparation } from '../../types';

interface EggPreparationDetailProps {
  preparation: EggPreparation;
}

const EggPreparationDetail: React.FC<EggPreparationDetailProps> = ({ preparation }) => {
  const { title, description, imageUrl, difficulty, prepTime, cookTime, steps } = preparation;
  
  const totalTime = prepTime + cookTime;
  
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
        <p className="text-lg text-gray-600 mb-6">{description}</p>
        
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
        </div>
      </div>
      
      <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
        <img src={imageUrl} alt={title} className="w-full h-80 object-cover" />
      </div>
      
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Instructions</h2>
        <ol className="space-y-4">
          {steps.map((step, index) => (
            <li key={index} className="flex">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center font-medium mr-4">
                {index + 1}
              </span>
              <p className="text-gray-700 pt-1">{step}</p>
            </li>
          ))}
        </ol>
      </div>
      
      <div className="bg-yellow-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Chef's Tip</h3>
        <p className="text-gray-700">
          The key to perfect {title.toLowerCase()} is patience and attention to detail. 
          Don't rush the process and make sure to use fresh, high-quality eggs for the best results.
        </p>
      </div>
    </div>
  );
};

export default EggPreparationDetail;