import { useState } from "react";
import Modal from "react-modal";
import "tailwindcss/tailwind.css";
import { addComment } from "../Services/commentService";
import keycloak from "../keycloak";

Modal.setAppElement("#root");

function CommentModal({ postId, isOpen, onRequestClose, submitComment }) {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
    console.log(comment);
    console.log(postId);
  };

  const handleCommentSubmit = () => {
    submitComment(comment);
    addComment(keycloak, postId, comment);
    setComment("");
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Comment Modal"
      className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <div className="relative p-4 w-full max-w-md m-auto flex-col flex bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-center text-blue-500">
          Share Your Thoughts
        </h2>
        <textarea
          autoFocus
          className="w-full border border-gray-200 rounded-lg p-3 mb-4 focus:ring-blue-500 focus:border-blue-500 h-32 resize-none text-gray-700"
          placeholder="What's on your mind?"
          value={comment}
          onChange={handleCommentChange}
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={onRequestClose}
            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150"
          >
            Cancel
          </button>
          <button
            onClick={handleCommentSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 transition duration-150"
          >
            Post Comment
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default CommentModal;
