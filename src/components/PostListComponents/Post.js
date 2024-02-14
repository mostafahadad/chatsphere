import React, { useState } from "react";
import LikeButton from "./LikeButton";
import CommentButton from "./CommentButton";
import UserInfo from "./UserInfo";
import { useNavigate } from "react-router-dom";
import CommentModal from "../CommentModal";
import keycloak from "../../keycloak";
import { useLike } from "../../hooks/useLike";
import { formatDate } from "../../utils/formatDate";

function Post({
  postId,
  email,
  content,
  userHasLiked,
  likesCount,
  commentsCount,
  timeStamp,
}) {
  const {
    liked,
    likesCount: updatedLikesCount,
    toggleLike,
  } = useLike(keycloak, postId, userHasLiked, likesCount);

  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  const submitComment = (comment) => {
    setComments([...comments, comment]);
  };

  const handleClick = () => {
    navigate(`/post/${postId}`);
  };

  return (
    <div className="max-w-md mx-auto my-5 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-5">
        <div onClick={handleClick} className="cursor-pointer">
          <UserInfo email={email} />
          <div className="mt-3 text-gray-700 text-lg">{content}</div>
          {/* Display formatted timestamp */}
          <div className="text-gray-500 text-sm mt-1">
            {formatDate(timeStamp)}
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <LikeButton
            liked={liked}
            likesCount={updatedLikesCount}
            toggleLike={toggleLike}
          />
          <CommentButton
            commentsCount={commentsCount + comments.length}
            onClick={() => setIsCommentModalOpen(true)}
          />
        </div>
      </div>
      <CommentModal
        postId={postId}
        isOpen={isCommentModalOpen}
        onRequestClose={() => setIsCommentModalOpen(false)}
        submitComment={submitComment}
      />
    </div>
  );
}

export default Post;
