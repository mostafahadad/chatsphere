import React, { useEffect, useState } from "react";
import { listPosts } from "../Services/postService";
import keycloak from "../keycloak";
import PostDisplay from "./PostDisplay";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    listPosts(keycloak).then((res) => setPosts(res));
  }, []);

  return (
    <div>
      {posts.map((post, index) => (
        // Assuming each post has a unique id for a key; otherwise, use the index as a fallback
        <PostDisplay
          key={post.id || index}
          postId={post.id}
          email={post.email}
          content={post.content}
          commentsCount={post.commentsCount}
        />
      ))}
    </div>
  );
};

export default PostList;
