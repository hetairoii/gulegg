import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageSquare, Calendar } from 'lucide-react';
import { Post } from '../../types';
import Card from '../common/Card';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { id, title, author, content, imageUrl, likes, comments, createdAt, tags } = post;
  
  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <Card className="h-full flex flex-col hover:translate-y-[-5px]">
      <Link to={`/posts/${id}`}>
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
          />
        </div>
        <div className="p-4 flex-grow">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <Calendar size={14} className="mr-1" />
            <span>{formattedDate}</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
          <p className="text-gray-500 text-sm mb-3">By {author}</p>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{content}</p>
          
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
            
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center">
                <Heart size={16} className="mr-1 text-red-500" />
                <span>{likes}</span>
              </div>
              <div className="flex items-center">
                <MessageSquare size={16} className="mr-1 text-blue-500" />
                <span>{comments}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default PostCard;