import { useState } from "react";

function PostCard({ title, body }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={`p-6 rounded-lg shadow cursor-pointer transition-colors ${
        clicked ? "bg-blue-100" : "bg-white"
      }`}
      onClick={() => setClicked(!clicked)}
    >
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">{body}</p>
    </div>
  );
}

export default PostCard;
