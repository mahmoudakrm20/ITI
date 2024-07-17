import React, { useState } from "react";
import { useSession } from "next-auth/react";

export default function Index() {
  const [comments, setComments] = useState([]);
  const [com, setCom] = useState("");

  const datafetcher = async () => {
    const res = await fetch("/api/comments");
    const data = await res.json();
    setComments(data);
  };

  const postComment = async () => {
    if (com.length === 0) {
      return;
    }
    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ com }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setComments(data);
    setCom("");
  };

  const deleteComment = async (comId) => {
    const res = await fetch(`api/comments/${comId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    setComments(data);
  };
  const { data: session } = useSession();

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <button
          onClick={datafetcher}
          className="btn bg-slate-300 w-40 p-2 rounded-lg shadow-md hover:bg-slate-400"
        >
          Get all comments
        </button>
      </div>

      <div className="space-y-4">
        {comments.map((c) => (
          <div
            key={c.id}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md"
          >
            <span className="text-gray-800">{c.text}</span>
            <button
              onClick={() => deleteComment(c.id)}
              className="btn bg-red-500 text-white p-2 rounded-lg shadow-md hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <input
          type="text"
          value={com}
          onChange={(event) => setCom(event.target.value)}
          className="border p-2 w-full rounded-lg shadow-md mb-2"
          placeholder="Enter your comment"
        />
        {session && (
          <button
            onClick={postComment}
            className="btn bg-slate-300 w-full p-2 rounded-lg shadow-md hover:bg-slate-400"
          >
            Post Comment
          </button>
        )}
        {!session && (
          <button className="btn bg-slate-300 w-full p-2 rounded-lg shadow-md hover:bg-red-400">
            You need to be logged in to post comments
          </button>
        )}
      </div>
    </div>
  );
}
