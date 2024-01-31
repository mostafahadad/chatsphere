import React from "react";

function PostDisplay({ username, name, content }) {
  return (
    <div className="max-w-md mx-auto my-5 bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            {/* Placeholder for profile image */}
            <div className="h-10 w-10 rounded-full bg-gray-300"></div>
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-900">{name}</div>
            <div className="text-sm text-gray-500">@{username}</div>
          </div>
        </div>
        <div className="mt-3 text-gray-700 text-lg">{content}</div>
      </div>
    </div>
  );
}

export default PostDisplay;
