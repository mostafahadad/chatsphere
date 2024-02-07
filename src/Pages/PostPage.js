import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { postDetails } from "../Services/postService";
import keycloak from "../keycloak";
import PostDetail from "../components/PostDetail";

function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState({
    comments: [],
    content: "",
    email: "",
    id: postId,
    timeStamp: "",
  });

  useEffect(() => {
    postDetails(keycloak, postId).then((res) => setPost(res));
  }, []);

  console.log(post);
  return (
    <div>
      <PostDetail post={post} />
    </div>
  );
}

export default PostPage;
