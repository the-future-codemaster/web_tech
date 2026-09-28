import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Archive() {
  const [archivedPosts, setArchivedPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch("http://localhost:5050/posts");
      if (response.ok) {
        const data = await response.json();
        setArchivedPosts(data);
      }
    }
    getPosts();
  }, []);

  return (
    <div>
      <h2>Archive of All Posts</h2>
      <ul style={{ listStyleType: "circle" }}>
        {archivedPosts.map((post) => (
          <li key={post._id} style={{ margin: "10px 0" }}>
            <Link to={`/post/${post._id}`}>{post.title}</Link> 
            <span style={{ color: "#666", marginLeft: "10px" }}>- {post.author}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Archive;
