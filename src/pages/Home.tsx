import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Egg, Utensils, Users } from 'lucide-react';
import EggPreparationCard from '../components/egg-preparations/EggPreparationCard';
import RecipeCard from '../components/recipes/RecipeCard';
import PostCard from '../components/posts/PostCard';
import { eggPreparations } from '../data/eggPreparations';
import { recipes } from '../data/recipes';
import { posts } from '../data/posts';

const Home: React.FC = () => {
  // Get a subset of data for the homepage
  const featuredPreparations = eggPreparations.slice(0, 4);
  const featuredRecipes = recipes.slice(0, 3);
  const featuredPosts = posts.slice(0, 2);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-yellow-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/6294526/pexels-photo-6294526.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Discover the Endless Possibilities of <span className="text-yellow-500">Eggs</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              From simple scrambles to gourmet delights, explore creative ways to prepare eggs and share your egg-cellent recipes with our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/preparations" 
                className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-600 transition-colors inline-flex items-center"
              >
                Explore Egg Preparations
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link 
                to="/recipes" 
                className="bg-white text-yellow-600 border border-yellow-500 px-6 py-3 rounded-lg font-medium hover:bg-yellow-50 transition-colors"
              >
                Browse Recipes
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Egg className="h-12 w-12 text-yellow-500" />}
              title="Diverse Egg Preparations"
              description="Learn various techniques to prepare eggs, from basic to advanced methods."
            />
            <FeatureCard 
              icon={<Utensils className="h-12 w-12 text-yellow-500" />}
              title="Creative Recipes"
              description="Discover delicious recipes where eggs take center stage or play a supporting role."
            />
            <FeatureCard 
              icon={<Users className="h-12 w-12 text-yellow-500" />}
              title="Vibrant Community"
              description="Share your egg experiences, tips, and culinary triumphs with fellow egg enthusiasts."
            />
          </div>
        </div>
      </section>

      {/* Egg Preparations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Egg Preparation Techniques"
            link="/preparations"
            linkText="View All Techniques"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {featuredPreparations.map((preparation) => (
              <EggPreparationCard key={preparation.id} preparation={preparation} />
            ))}
          </div>
        </div>
      </section>

      {/* Recipes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Featured Egg Recipes"
            link="/recipes"
            linkText="Explore All Recipes"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>

      {/* Community Posts Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="From Our Community"
            link="/posts"
            linkText="View All Posts"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {featuredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-yellow-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Egg-citing Content</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for weekly recipes, cooking tips, and community highlights.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none text-gray-800"
              />
              <button className="bg-gray-800 text-white px-6 py-3 rounded-r-lg hover:bg-gray-900 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm mt-3 text-yellow-100">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="text-center p-6 transition-all duration-300 hover:shadow-lg rounded-xl hover:bg-yellow-50">
    <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-yellow-100">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

interface SectionHeaderProps {
  title: string;
  link: string;
  linkText: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, link, linkText }) => (
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
    <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">{title}</h2>
    <Link 
      to={link} 
      className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium"
    >
      {linkText}
      <ArrowRight size={18} className="ml-2" />
    </Link>
  </div>
);

export default Home;