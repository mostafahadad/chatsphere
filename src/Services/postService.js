import axios from "axios";

const API_URL = "http://localhost:5103/api/post/addpost";

export const addPost = async (keycloak, content) => {
  try {
    const payload = {
      content: content,
    };

    const response = await axios.post(API_URL, payload, {
      headers: {
        Authorization: `Bearer ${keycloak.token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error adding post:", error);
    throw error;
  }
};

export const listPosts = async (keycloak) => {
  try {
    const response = await axios.get(
      "http://localhost:5103/api/Post/GetAllPosts",
      {
        headers: {
          Authorization: `Bearer ${keycloak.token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (!error.response) {
      // Network error or server not responding
      console.error("Network error or server not responding:", error);
    } else {
      // Server responded with a status code other than 2xx
      console.error("Error listing posts:", error.response);
    }
    throw error;
  }
};

export const postDetails = async (keycloak, postId) => {
  try{
    const response = await axios.get(
      `http://localhost:5103/api/Post/GetPost/${postId}`,
      {
        headers: {
          Authorization: `Bearer ${keycloak.token}`,
        },
      })
      return response.data
  }
  catch (error) {
    if (!error.response) {
      // Network error or server not responding
      console.error("Network error or server not responding:", error);
    } else {
      // Server responded with a status code other than 2xx
      console.error("Error listing post details:", error.response);
    }
    throw error;
  }
}