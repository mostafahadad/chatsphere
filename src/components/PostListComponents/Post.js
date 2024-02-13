import React, { useState } from "react";
import LikeButton from "./LikeButton";
import CommentButton from "./CommentButton";
import UserInfo from "./UserInfo";
import { useNavigate } from "react-router-dom";
import keycloak from "../../keycloak";
import CommentModal from "../CommentModal";
import { addLike } from "../../Services/likeService";

function Post({
  postId,
  email,
  content,
  userHasLiked,
  likesCount,
  commentsCount,
}) {
  const [liked, setLiked] = useState(userHasLiked);
  let [likesCountState, setLikesCountState] = useState(likesCount);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [comments, setComments] = useState([]);

  const toggleLike = () => {
    setLiked(!liked);
    setLikesCountState(liked ? likesCountState - 1 : likesCountState + 1);
    addLike(keycloak, postId);
  };

  const submitComment = (comment) => {
    setComments([...comments, comment]);
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/post/${postId}`);
  };

  return (
    <div className="max-w-md mx-auto my-5 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-5">
        <div onClick={handleClick} className="cursor-pointer">
          <UserInfo email={email} />
          <div className="mt-3 text-gray-700 text-lg">{content}</div>
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <LikeButton
            liked={liked}
            likesCount={likesCountState}
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
