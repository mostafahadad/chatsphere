import React from "react";
import { motion } from "framer-motion";

function LikeButton({ liked, likesCount, toggleLike }) {
  return (
    <button
      onClick={toggleLike}
      aria-pressed={liked}
      title={liked ? "Unlike" : "Like"}
      className={`flex items-center space-x-2 p-2 rounded-lg transition duration-300 ease-in-out ${
        liked ? "text-pink-500" : "text-gray-500"
      } hover:text-pink-500 hover:bg-gradient-to-r from-pink-200 to-pink-300`}
    >
      <motion.div whileTap={{ scale: 0.9 }}>
        {liked ? (
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
              style={{ fill: "#ec4899" }} // Solid color fill for the liked state
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
            />
          </svg>
        )}
      </motion.div>
      <span>{likesCount}</span>
    </button>
  );
}

export default LikeButton;
