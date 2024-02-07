import React from "react";

const PostDetail = ({ post }) => {
  // Function to format timestamp, assuming timeStamp is in a format that can be parsed by Date
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex items-center space-x-6">
            <img
              className="h-16 w-16 rounded-full object-cover"
              src={post.profilePic || "https://via.placeholder.com/150"}
              alt="Profile"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {post.email}
              </h2>
              <p className="text-sm text-gray-500">
                {post.timeStamp
                  ? formatTimestamp(post.timeStamp)
                  : "Unknown time"}
              </p>
            </div>
          </div>
          <p className="mt-6 text-gray-800 leading-relaxed">
            {post.content || "No content provided."}
          </p>
          <div className="mt-6 flex items-center justify-between">
            <button className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-200 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Like
            </button>
            <button className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-200 ease-in-out">
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
              Comment
            </button>
          </div>
        </div>
        {post.comments && post.comments.length > 0 && (
          <div className="border-t border-gray-200">
            {post.comments.map((comment, index) => (
              <div key={index} className="flex items-center space-x-4 p-6">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src={`https://i.pravatar.cc/150?img=${index}`}
                  alt="Comment profile"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900">
                    {comment.email}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {comment.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostDetail;
