import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { eggPreparations } from '../data/eggPreparations';
import EggPreparationDetailComponent from '../components/egg-preparations/EggPreparationDetail';

const EggPreparationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const preparation = eggPreparations.find(prep => prep.id === id);
  
  if (!preparation) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Preparation not found</h2>
        <p className="text-gray-600 mb-6">The egg preparation technique you're looking for doesn't exist.</p>
        <button
          onClick={() => navigate('/preparations')}
          className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to All Techniques
        </button>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <button
        onClick={() => navigate('/preparations')}
        className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium mb-8"
      >
        <ArrowLeft size={18} className="mr-2" />
        Back to All Techniques
      </button>
      
      <EggPreparationDetailComponent preparation={preparation} />
    </div>
  );
};

export default EggPreparationDetail;