import keycloak from "../keycloak";
import { useEffect, useState } from "react";
import { addUser } from "../Services/userService";
import AddPostForm from "../components/AddPostForm";
import PostDisplay from "../components/PostListComponents/Post";
import PostList from "../components/PostListComponents/PostList";

function HomePage() {
  const [posts, setPosts] = useState([]);

  const logout = () => {
    keycloak.logout();
  };

  useEffect(() => {
    if (keycloak.authenticated) {
      addUser(keycloak)
        .then((userData) => {
          console.log("User data:", userData);
        })
        .catch((error) => {
          console.error("Error adding user:", error);
        });
    }
  }, [keycloak, keycloak.authenticated]);

  return (
    <div>
      <AddPostForm setPosts={setPosts} />
      <PostList posts={posts} setPosts={setPosts} />
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default HomePage;
