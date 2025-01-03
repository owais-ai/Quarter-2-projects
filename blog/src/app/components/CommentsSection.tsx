"use client";

import { useState } from 'react';

interface Comment {
  name: string;
  message: string;
}

const CommentsSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() === '' || message.trim() === '') return;

    const newComment: Comment = { name, message };
    setComments([...comments, newComment]);
    setName('');
    setMessage('');
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comments</h2>
      
      {/* Comments List */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <p className="text-gray-600">No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment, index) => (
            <div key={index} className="border-b pb-4">
              <p className="font-semibold text-gray-700">{comment.name}</p>
              <p className="text-gray-600">{comment.message}</p>
            </div>
          ))
        )}
      </div>
      
      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">
            Comment:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit Comment
        </button>
      </form>
    </div>
  );
};

export default CommentsSection;
