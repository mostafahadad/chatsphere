import React, { useState } from "react";

function PostDisplay({ username, name, content }) {
  const [liked, setLiked] = useState(false); // State to manage whether the post is liked

  const toggleLike = () => {
    setLiked(!liked); // Toggle the liked state
  };

  return (
    <div className="max-w-md mx-auto my-5 bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <div className="h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">{name}</p>
            <p className="text-sm text-gray-500">@{username}</p>
          </div>
        </div>
        <div className="mt-3 text-gray-700 text-lg">{content}</div>
        <div className="mt-4 flex items-center space-x-4">
          <button
            onClick={toggleLike}
            className={`flex items-center space-x-1 ${
              liked ? "text-red-500" : "text-gray-500"
            } hover:text-red-600 transition-colors duration-300`}
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill={liked ? "red" : "none"}
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
            <span>Like</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-500 hover:text-green-600 transition-colors duration-300">
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.5 8.5 0 017.6 4.7 8.38 8.38 0 01.9 3.8z"></path>
            </svg>
            <span>Comment</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostDisplay;
