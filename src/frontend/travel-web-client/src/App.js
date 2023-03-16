import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPost from "./pages/BlogPost";
import NewPost from "./pages/NewPost";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Blog Posts</Link>
          </li>
          <li>
            <Link to="/new-post">New Post</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/posts/:id" element={<BlogPost />} />
        <Route path="/new-post" element={<NewPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
