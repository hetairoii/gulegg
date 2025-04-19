import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star, User } from 'lucide-react';
import { Recipe } from '../../types';
import Card from '../common/Card';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const { id, title, author, description, imageUrl, prepTime, cookTime, tags, rating } = recipe;
  
  const totalTime = prepTime + cookTime;
  
  return (
    <Card className="h-full flex flex-col hover:translate-y-[-5px]">
      <Link to={`/recipes/${id}`}>
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
            <div className="flex items-center">
              <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                <Star size={12} className="mr-1" fill="white" />
                {rating}
              </span>
            </div>
          </div>
        </div>
        <div className="p-4 flex-grow">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
          <div className="flex items-center text-gray-500 text-sm mb-2">
            <User size={14} className="mr-1" />
            <span>{author}</span>
          </div>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
          
          <div className="mt-auto">
            <div className="flex flex-wrap gap-1 mb-3">
              {tags.slice(0, 3).map((tag, index) => (
                <span 
                  key={index}
                  className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center text-sm text-gray-500">
              <Clock size={16} className="mr-1" />
              <span>{totalTime} min</span>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default RecipeCard;