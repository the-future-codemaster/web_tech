import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [formData, setFormData] = useState({ title: "", author: "", content: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await fetch("http://localhost:5050/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    navigate("/");
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleFormSubmit} className="form-group">
        <input 
          type="text" 
          name="title" 
          placeholder="Post Title" 
          value={formData.title} 
          onChange={handleInputChange} 
          required 
        />
        <input 
          type="text" 
          name="author" 
          placeholder="Author Name" 
          value={formData.author} 
          onChange={handleInputChange} 
          required 
        />
        <textarea 
          name="content" 
          placeholder="Post Content" 
          rows="5"
          value={formData.content} 
          onChange={handleInputChange} 
          required 
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Publishing..." : "Publish"}
        </button>
      </form>
    </div>
  );
}

export default Create;
