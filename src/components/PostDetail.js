import React, { useState } from "react";
import UserInfo from "./PostListComponents/UserInfo";
import LikeButton from "./PostListComponents/LikeButton";
import CommentButton from "./PostListComponents/CommentButton";
import CommentInput from "./CommentInput";
import { useLike } from "../hooks/useLike";
import keycloak from "../keycloak";
import { addComment } from "../Services/commentService";
import { postDetails } from "../Services/postService";
import CommentsList from "./CommentsList";
import { formatDate } from "../utils/formatDate";

const PostDetail = ({
  postId,
  email,
  content,
  userHasLiked,
  likesCount,
  comments,
  timeStamp,
  setPost,
}) => {
  const {
    liked,
    likesCount: updatedLikesCount,
    toggleLike,
  } = useLike(keycloak, postId, userHasLiked, likesCount);

  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    console.log(newComment); // Here, you would typically update the backend
    addComment(keycloak, newComment, postId).then(() =>
      postDetails(keycloak, postId).then((res) => setPost(res))
    );
    setNewComment(""); // Reset input field after submission
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <UserInfo email={email} />
          <p className="mt-6 text-gray-800 leading-relaxed">
            {content || "No content provided."}
          </p>
          {/* Display formatted timestamp */}
          <div className="text-gray-500 text-sm mt-2">
            {formatDate(timeStamp)}
          </div>
          <div className="mt-6 flex items-center justify-between">
            <LikeButton
              liked={liked}
              likesCount={updatedLikesCount}
              toggleLike={toggleLike}
            />
            <CommentButton commentsCount={comments.length} onClick={() => {}} />
          </div>
          <CommentInput
            newComment={newComment}
            setNewComment={setNewComment}
            handleCommentSubmit={handleCommentSubmit}
          />
        </div>
        <CommentsList comments={comments} />
      </div>
    </div>
  );
};

export default PostDetail;
