import React, { useEffect } from "react";
import { listPosts } from "../Services/postService";
import keycloak from "../keycloak";

const PostList = () => {
  useEffect(() => {
    listPosts(keycloak)
      .then((res) => console.log(res.data))
      .catch((err) => console.log("error fetching posts", err));
  }, []);

  return <div>PostList</div>;
};

export default PostList;
