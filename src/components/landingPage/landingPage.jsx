import blogPosts from "../../blogPosts/blogPosts.json";
import BlogPostPage from "../blogPostPage/blogPostPage"
import BlogPostTile from "../blogPostTiles/blogPostTiles"

import { Link, Routes, Route } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landingPageContainer">
      <div className="blogTitleContainer">
        <h1>LosTurista</h1>
      </div>
      <div className="headingImageContainer">
        <div className="blogIntroContainer">
          <h2>Welcome to LosTurista</h2>
        </div>
      </div>
      <div className="blogPostTilesContainer">
        {blogPosts.map((blogPostData) => {
          return (
            <Link to={`/${blogPostData.slug}`}>
              <BlogPostTile key={blogPostData.id} blogPostData={blogPostData} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default LandingPage;
