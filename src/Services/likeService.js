import axios from "axios";

const API_URL = "http://localhost:5103/api/Like/LikePost";

export const addLike = async (keycloak, postId) => {
  try {
    const payload = {
      postId: postId,
    };

    const response = await axios.post(API_URL, payload, {
      headers: {
        Authorization: `Bearer ${keycloak.token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error liking post:", error);
    throw error;
  }
};
