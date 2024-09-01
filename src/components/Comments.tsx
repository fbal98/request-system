import React, { useState } from "react";

function Comments({ comments, onAddComment }) {
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    onAddComment(newComment);
    setNewComment("");
  };

  return (
    <div className="rounded bg-white p-4 shadow">
      <h3 className="mb-2 text-lg font-semibold">Comments</h3>
      <ul className="mb-4">
        {comments.map((comment, index) => (
          <li key={index} className="mb-1">
            {comment}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        className="mb-2 w-full rounded border p-2"
      />
      <button
        onClick={handleAddComment}
        className="rounded bg-blue-500 p-2 text-white"
      >
        Add Comment
      </button>
    </div>
  );
}

export default Comments;
