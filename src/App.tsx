import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/common/Layout';
import Home from './pages/Home';
import EggPreparations from './pages/EggPreparations';
import EggPreparationDetail from './pages/EggPreparationDetail';
import Recipes from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetail';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preparations" element={<EggPreparations />} />
          <Route path="/preparations/:id" element={<EggPreparationDetail />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;