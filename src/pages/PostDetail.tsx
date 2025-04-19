import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { posts } from '../data/posts';
import PostDetailComponent from '../components/posts/PostDetail';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const post = posts.find(post => post.id === id);
  
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Post not found</h2>
        <p className="text-gray-600 mb-6">The post you're looking for doesn't exist.</p>
        <button
          onClick={() => navigate('/posts')}
          className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to All Posts
        </button>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <button
        onClick={() => navigate('/posts')}
        className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium mb-8"
      >
        <ArrowLeft size={18} className="mr-2" />
        Back to All Posts
      </button>
      
      <PostDetailComponent post={post} />
    </div>
  );
};

export default PostDetail;