import { useState } from "react";
import { addLike } from "../Services/likeService";

export const useLike = (
  keycloak,
  postId,
  initialIsLiked,
  initialLikesCount
) => {
  const [liked, setLiked] = useState(initialIsLiked);
  const [likesCount, setLikesCount] = useState(initialLikesCount);

  const toggleLike = () => {
    setLiked(!liked);
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
    addLike(keycloak, postId);
  };

  return { liked, likesCount, toggleLike };
};
