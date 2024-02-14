import React, { useEffect, useState } from "react";
import { listPosts } from "../../Services/postService";
import keycloak from "../../keycloak";
import Post from "./Post";

const PostList = ({ posts, setPosts }) => {
  useEffect(() => {
    listPosts(keycloak).then((res) => setPosts(res));
  }, []);

  console.log(posts);

  return (
    <div>
      {posts.map((post, index) => (
        // Assuming each post has a unique id for a key; otherwise, use the index as a fallback
        <Post
          key={post.id || index}
          postId={post.id}
          email={post.email}
          content={post.content}
          userHasLiked={post.userHasLiked}
          likesCount={post.likesCount}
          commentsCount={post.commentsCount}
          timeStamp={post.timeStamp}
        />
      ))}
    </div>
  );
};

export default PostList;
