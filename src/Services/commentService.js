import axios from "axios";

const API_URL = "http://localhost:5103/api/Comment/AddComment";

export const addComment = async (keycloak, content, postId) => {
  try {
    const payload = {
      content: content,
      postId: postId,
    };

    const response = await axios.post(API_URL, payload, {
      headers: {
        Authorization: `Bearer ${keycloak.token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error adding comment:",
      error.response ? error.response.data : error
    );
    throw error;
  }
};
