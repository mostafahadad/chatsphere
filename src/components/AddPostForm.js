import React, { useEffect, useState } from "react";
import { addPost, listPosts } from "../Services/postService";
import keycloak from "../keycloak";

function AddPostForm({ setPosts }) {
  const [text, setText] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const characterLimit = 280;

  useEffect(() => {
    if (keycloak.authenticated) {
      keycloak
        .loadUserProfile()
        .then((profile) => {
          setUserEmail(profile.email);
        })
        .catch((err) => {
          console.error("Error fetching user profile", err);
        });
    }
  }, []);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addPost(keycloak, text)
      .then((data) => {
        listPosts(keycloak).then((res) => setPosts(res));
      })
      .catch((error) => {
        console.error("Error adding post", error);
      });
    setText(""); // Clear the text field after posting
  };

  return (
    <div className="max-w-xl mx-auto my-10 bg-white rounded-lg shadow-lg">
      <div className="p-4 border-b border-gray-300">
        <h2 className="text-lg font-semibold">Compose new Tweet</h2>
        {userEmail && (
          <p className="text-sm text-gray-600">Posting as: {userEmail}</p>
        )}
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col p-4">
        <textarea
          value={text}
          onChange={handleInputChange}
          placeholder="What's happening?"
          rows="4"
          maxLength={characterLimit}
          className="resize-none p-3 mb-2 text-base border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
        <div className="flex justify-between items-center">
          <span
            className={`text-sm ${
              text.length > characterLimit ? "text-red-500" : "text-gray-500"
            }`}
          >
            {text.length}/{characterLimit}
          </span>
          <button
            type="submit"
            disabled={!text || text.length > characterLimit}
            className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full disabled:opacity-50 transition-colors"
          >
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPostForm;
