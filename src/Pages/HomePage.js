import keycloak from "../keycloak";
import { useEffect } from "react";
import { addUser } from "../Services/userService";
import AddPostForm from "../components/AddPostForm";
import PostDisplay from "../components/Post";
import PostList from "../components/PostList";

function HomePage() {
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
      <AddPostForm />
      <PostList />
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default HomePage;
