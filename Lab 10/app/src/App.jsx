import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Post from "./pages/Post";
import Archive from "./pages/Archive";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <nav>
          <a href="/">Home</a> 
          <a href="/create">Create Post</a> 
          <a href="/archive">Archive</a>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
