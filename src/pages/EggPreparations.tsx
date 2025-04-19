import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Filter, Clock, BarChart } from 'lucide-react';
import { eggPreparations } from '../data/eggPreparations';
import EggPreparationCard from '../components/egg-preparations/EggPreparationCard';

const EggPreparations: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [timeSort, setTimeSort] = useState<string | null>(null);
  
  // Filter and sort preparations
  const filteredPreparations = eggPreparations
    .filter(prep => {
      const matchesSearch = prep.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          prep.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesDifficulty = selectedDifficulty ? prep.difficulty === selectedDifficulty : true;
      
      return matchesSearch && matchesDifficulty;
    })
    .sort((a, b) => {
      if (timeSort === 'asc') {
        return (a.prepTime + a.cookTime) - (b.prepTime + b.cookTime);
      } else if (timeSort === 'desc') {
        return (b.prepTime + b.cookTime) - (a.prepTime + a.cookTime);
      }
      return 0;
    });

  const handlePreparationClick = (id: string) => {
    navigate(`/preparations/${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Egg Preparation Techniques</h1>
        <p className="text-lg text-gray-600">
          Master the art of cooking eggs with our comprehensive guide to different preparation methods.
          From simple to sophisticated, discover the perfect technique for any occasion.
        </p>
      </div>
      
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-grow relative">
            <input
              type="text"
              placeholder="Search egg preparations..."
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
              value={timeSort || ''}
              onChange={(e) => setTimeSort(e.target.value || null)}
              className="pl-4 pr-10 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent appearance-none"
              aria-label="Sort by time"
            >
              <option value="">Sort by Time</option>
              <option value="asc">Quickest First</option>
              <option value="desc">Longest First</option>
            </select>
          </div>
        </div>
      </div>
      
      {filteredPreparations.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPreparations.map((preparation) => (
            <div key={preparation.id} onClick={() => handlePreparationClick(preparation.id)}>
              <EggPreparationCard preparation={preparation} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600 mb-4">No egg preparations match your search criteria.</p>
          <button 
            onClick={() => {
              setSearchTerm('');
              setSelectedDifficulty(null);
              setTimeSort(null);
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

export default EggPreparations;