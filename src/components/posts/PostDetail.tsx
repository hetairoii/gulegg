import React from 'react';
import { Heart, MessageSquare, Calendar, Share2 } from 'lucide-react';
import { Post } from '../../types';

interface PostDetailProps {
  post: Post;
}

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
  const { title, author, content, imageUrl, likes, comments, createdAt, tags } = post;
  
  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Split content into paragraphs for better readability
  const paragraphs = content.split('\n\n').length > 1 
    ? content.split('\n\n') 
    : content.split('. ').reduce((result: string[], sentence: string, index: number, array: string[]) => {
        if (index % 2 === 0) {
          // If it's the last sentence and odd length array, add it as is
          if (index === array.length - 1) {
            result.push(sentence);
          } else {
            // Combine current sentence with the next one
            result.push(sentence + '. ' + array[index + 1] + '.');
          }
        }
        return result;
      }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h1>
        
        <div className="flex items-center mb-8">
          <div className="w-10 h-10 bg-yellow-200 rounded-full flex items-center justify-center text-yellow-700 font-semibold mr-3">
            {author.charAt(0)}
          </div>
          <div>
            <p className="font-medium text-gray-800">{author}</p>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar size={14} className="mr-1" />
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
        <img src={imageUrl} alt={title} className="w-full h-80 object-cover" />
      </div>
      
      <div className="flex gap-4 mb-8">
        <div className="flex flex-col items-center space-y-4 pt-2">
          <button className="flex flex-col items-center text-gray-500 hover:text-red-500 transition-colors">
            <Heart size={24} />
            <span className="text-sm mt-1">{likes}</span>
          </button>
          <button className="flex flex-col items-center text-gray-500 hover:text-blue-500 transition-colors">
            <MessageSquare size={24} />
            <span className="text-sm mt-1">{comments}</span>
          </button>
          <button className="flex flex-col items-center text-gray-500 hover:text-green-500 transition-colors">
            <Share2 size={24} />
          </button>
        </div>
        
        <div className="flex-grow">
          <div className="prose prose-lg max-w-none">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2 mt-8">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-yellow-100 text-yellow-700 text-sm px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-xl p-6 mt-12">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Comments ({comments})</h3>
        
        <div className="mb-8">
          <div className="flex items-start mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-semibold mr-3">
              J
            </div>
            <div className="flex-1">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-800">John D.</span>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
                <p className="text-gray-700">
                  I tried this technique yesterday, and it worked perfectly! The eggs came out delicious.
                </p>
              </div>
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <button className="mr-4 hover:text-gray-700">Reply</button>
                <div className="flex items-center">
                  <Heart size={14} className="mr-1" />
                  <span>8</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-semibold mr-3">
              M
            </div>
            <div className="flex-1">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-800">Maria L.</span>
                  <span className="text-sm text-gray-500">1 day ago</span>
                </div>
                <p className="text-gray-700">
                  Great tip! I'd never thought of using day-old eggs this way. Will definitely try soon.
                </p>
              </div>
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <button className="mr-4 hover:text-gray-700">Reply</button>
                <div className="flex items-center">
                  <Heart size={14} className="mr-1" />
                  <span>3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-gray-800 mb-3">Leave a comment</h4>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            rows={4}
            placeholder="Share your thoughts..."
          ></textarea>
          <button className="mt-3 bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600 transition-colors">
            Post Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;