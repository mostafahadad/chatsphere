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
