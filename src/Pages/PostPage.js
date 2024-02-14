import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postDetails } from "../Services/postService";
import keycloak from "../keycloak";
import PostDetail from "../components/PostDetail";

function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState({
    id: postId,
    email: "",
    content: "",
    userHasLiked: false,
    likesCount: 0,
    comments: [],
    timeStamp: "",
  });
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  useEffect(() => {
    setTimeout(() => {
      postDetails(keycloak, postId).then((res) => {
        setPost(res);
        setIsLoading(false); // Set loading to false once data is fetched
      });
    }, 1000);
  }, [postId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(post);
  return (
    <PostDetail
      postId={post.id}
      email={post.email}
      content={post.content}
      userHasLiked={post.userHasLiked}
      likesCount={post.likesCount}
      comments={post.comments}
      timeStamp={post.timeStamp}
      setPost={setPost}
    />
  );
}

export default PostPage;
