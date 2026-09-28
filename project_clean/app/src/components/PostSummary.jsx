import { Link } from "react-router-dom";

function PostSummary({ post }) {
  return (
    <div className="post-card">
      <h3>
        <Link to={`/post/${post._id}`} style={{ textDecoration: "none", color: "inherit" }}>
          {post.title}
        </Link>
      </h3>
      <p style={{ color: "#555" }}>Author: {post.author}</p>
      <p style={{ marginTop: "10px", whiteSpace: "pre-wrap" }}>{post.content}</p>
    </div>
  );
}

export default PostSummary;
