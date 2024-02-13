function CommentButton({ commentsCount, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-2 text-gray-500 hover:text-green-600 transition-colors duration-300"
    >
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
          d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.5 8.5 0 017.6 4.7 8.38 8.38 0 01.9 3.8z"
        />
      </svg>
      <span>{commentsCount}</span>
    </button>
  );
}

export default CommentButton;
