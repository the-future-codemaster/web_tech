import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Post() {
  const [postData, setPostData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editFormData, setEditFormData] = useState({ title: "", content: "", author: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchSinglePost() {
      const res = await fetch(`http://localhost:5050/posts/${id}`);
      if (res.ok) {
        const data = await res.json();
        setPostData(data);
        setEditFormData({ title: data.title, content: data.content, author: data.author });
      } else {
        navigate("/");
      }
    }
    fetchSinglePost();
  }, [id, navigate]);

  const removePost = async () => {
    await fetch(`http://localhost:5050/posts/${id}`, {
      method: "DELETE",
    });
    navigate("/");
  };

  const saveUpdates = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5050/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editFormData),
    });
    setPostData({ ...postData, ...editFormData });
    setEditMode(false);
  };

  if (!postData) return <p>Loading post...</p>;

  if (editMode) {
    return (
      <form onSubmit={saveUpdates} className="form-group">
        <input 
          type="text" 
          value={editFormData.title} 
          onChange={(e) => setEditFormData({ ...editFormData, title: e.target.value })} 
        />
        <input 
          type="text" 
          value={editFormData.author} 
          onChange={(e) => setEditFormData({ ...editFormData, author: e.target.value })} 
        />
        <textarea 
          rows="5"
          value={editFormData.content} 
          onChange={(e) => setEditFormData({ ...editFormData, content: e.target.value })} 
        />
        <div style={{ display: "flex", gap: "10px" }}>
          <button type="submit">Save Changes</button>
          <button type="button" className="danger" onClick={() => setEditMode(false)}>Cancel</button>
        </div>
      </form>
    );
  }

  return (
    <div className="post-card">
      <h2>{postData.title}</h2>
      <h4 style={{ color: "gray", marginTop: 0 }}>By {postData.author}</h4>
      <p style={{ marginTop: "20px", lineHeight: "1.6" }}>{postData.content}</p>
      
      <div style={{ marginTop: "30px", display: "flex", gap: "10px" }}>
        <button onClick={() => setEditMode(true)}>Edit Post</button>
        <button onClick={removePost} className="danger">Delete Post</button>
      </div>
    </div>
  );
}

export default Post;
