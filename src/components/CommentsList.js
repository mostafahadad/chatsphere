import React from "react";
import { formatDate } from "../utils/formatDate";

const CommentsList = ({ comments }) => {
  return (
    <div className="border-t border-gray-200">
      {comments.map((comment, index) => (
        <div key={index} className="flex flex-col space-y-2 p-6">
          <div className="flex items-center space-x-4">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={`https://i.pravatar.cc/150?img=${index}`}
              alt="Comment profile"
            />
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-900">
                {comment.email}
              </h3>
              {/* Display formatted timestamp */}
              <p className="text-sm text-gray-500">
                {formatDate(comment.timeStamp)}
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-600">{comment.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
