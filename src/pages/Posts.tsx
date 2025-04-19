import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { posts } from '../data/posts';
import PostCard from '../components/posts/PostCard';

const Posts: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Extract unique tags from all posts
  const allTags = Array.from(
    new Set(posts.flatMap(post => post.tags))
  ).sort();
  
  // Filter posts
  const filteredPosts = posts
    .filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.author.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
      
      return matchesSearch && matchesTag;
    });

  const handlePostClick = (id: string) => {
    navigate(`/posts/${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Community Posts</h1>
        <p className="text-lg text-gray-600">
          Explore stories, tips, and experiences shared by our egg-thusiast community.
          Get inspired by creative ways others are cooking with eggs.
        </p>
      </div>
      
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-grow relative">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            <select
              value={selectedTag || ''}
              onChange={(e) => setSelectedTag(e.target.value || null)}
              className="pl-4 pr-10 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent appearance-none"
              aria-label="Filter by tag"
            >
              <option value="">All Topics</option>
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
      
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div key={post.id} onClick={() => handlePostClick(post.id)}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600 mb-4">No posts match your search criteria.</p>
          <button 
            onClick={() => {
              setSearchTerm('');
              setSelectedTag(null);
            }}
            className="text-yellow-600 hover:text-yellow-700 font-medium"
          >
            Clear filters
          </button>
        </div>
      )}
      
      {/* Create Post Button */}
      <div className="mt-12 text-center">
        <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-600 transition-colors inline-flex items-center">
          Share Your Egg Story
        </button>
      </div>
    </div>
  );
};

export default Posts;