import "./App.css";

import BlogPostPage from "./components/blogPostPage/blogPostPage";
import LandingPage from "./components/landingPage/landingPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/:slug" element={<BlogPostPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
