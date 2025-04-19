import React from 'react';
import { Link } from 'react-router-dom';
import { Clock} from 'lucide-react';
import { EggPreparation } from '../../types';
import Card from '../common/Card';

interface EggPreparationCardProps {
  preparation: EggPreparation;
}

const EggPreparationCard: React.FC<EggPreparationCardProps> = ({ preparation }) => {
  const { id, title, description, imageUrl, difficulty, prepTime, cookTime } = preparation;
  
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
    <Card className="h-full flex flex-col hover:translate-y-[-5px]">
      <Link to={`/preparations/${id}`}>
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
          />
          <div className="absolute top-0 right-0 m-3">
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${getDifficultyColor()}`}>
              {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </span>
          </div>
        </div>
        <div className="p-4 flex-grow">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
          <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span>{totalTime} min</span>
            </div>
            
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default EggPreparationCard;