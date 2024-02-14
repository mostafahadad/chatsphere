// CommentInput.js
const CommentInput = ({
  avatar,
  newComment,
  setNewComment,
  handleCommentSubmit,
}) => {
  return (
    <div className="flex items-center p-4">
      <div className="flex-none">
        <img
          className="h-10 w-10 rounded-full"
          src={avatar}
          alt="User avatar"
        />
      </div>
      <div className="flex-grow border-b border-gray-300 mx-4">
        <input
          type="text"
          className="w-full border-none p-2 text-gray-700 leading-tight focus:outline-none"
          placeholder="Post your reply"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
      </div>
      <div className="flex-none">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={handleCommentSubmit}
        >
          Reply
        </button>
      </div>
    </div>
  );
};

export default CommentInput;
