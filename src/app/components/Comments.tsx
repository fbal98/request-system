import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Button,
} from "@shadcn/ui";

function Comments({ comments, onAddComment }) {
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    onAddComment(newComment);
    setNewComment("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Comments</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="mb-4">
          {comments.map((comment, index) => (
            <li key={index} className="mb-1">
              {comment}
            </li>
          ))}
        </ul>
        <Input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="mb-2 w-full"
        />
        <Button onClick={handleAddComment}>Add Comment</Button>
      </CardContent>
    </Card>
  );
}

export default Comments;
