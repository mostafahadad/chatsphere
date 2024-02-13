import { useState } from "react";
import UserInfo from "./PostListComponents/UserInfo";
import LikeButton from "./PostListComponents/LikeButton";
import CommentButton from "./PostListComponents/CommentButton";

const PostDetail = ({ post }) => {
  // Function to format timestamp
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  // Example: Assuming `likes` and `comments` are part of the post object and are arrays
  const [liked, setLiked] = useState(false); // You might want to determine this based on the post data
  const toggleLike = () => setLiked(!liked); // Simplified like functionality

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <UserInfo
            email={post.email}
            profilePic={post.profilePic}
            timeStamp={post.timeStamp}
            formatTimestamp={formatTimestamp}
          />
          <p className="mt-6 text-gray-800 leading-relaxed">
            {post.content || "No content provided."}
          </p>
          <div className="mt-6 flex items-center justify-between">
            <LikeButton
              liked={liked}
              likesCount={post.likes ? post.likes.length : 0}
              toggleLike={toggleLike}
            />
            <CommentButton
              commentsCount={post.comments ? post.comments.length : 0}
              onClick={() => {}}
            />
          </div>
        </div>
        {post.comments && post.comments.length > 0 && (
          <div className="border-t border-gray-200">
            {post.comments.map((comment, index) => (
              <div key={index} className="flex items-center space-x-4 p-6">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src={`https://i.pravatar.cc/150?img=${index}`}
                  alt="Comment profile"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900">
                    {comment.email}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {comment.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostDetail;
