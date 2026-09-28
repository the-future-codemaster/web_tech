import { useEffect, useState } from "react";
import PostSummary from "../components/PostSummary";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const res = await fetch("http://localhost:5050/posts");
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      }
    }
    loadPosts();
  }, []);

  return (
    <div>
      <h2>Latest Blog Posts</h2>
      {posts.length === 0 && <p>No posts found.</p>}
      {posts.map((post) => (
        <PostSummary key={post._id} post={post} />
      ))}
    </div>
  );
}

export default Home;
