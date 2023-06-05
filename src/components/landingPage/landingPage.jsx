import "./landingPage.css";

import blogPosts from "../../blogPosts/blogPosts.json";
import BlogPostTile from "../blogPostTiles/blogPostTiles";

import { Link } from "react-router-dom";

const LandingPage = () => {


  return (
    <div className="landingPageContainer">
      <div className="blogTitleContainer">
        <h1 className="blogTitle">LosTurista</h1>
      </div>
      <div className="headingImageContainer">
        <div className="blogIntroContainer">
          <div className="blogIntroTitleContainer">
            <h2 className="blogIntroTitle">Welcome to LosTurista</h2>
          </div>
          <div className="blogIntroSubheaderContainer">
            <h3 className="blogIntroSubheader">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </h3>
          </div>
        </div>
      </div>
      <div className="blogPostTilesContainer">
        {blogPosts.map((blogPostData) => {
          return (
            <Link to={`/${blogPostData.slug}`} className="tileLinks">
              <BlogPostTile key={blogPostData.id} blogPostData={blogPostData} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LandingPage;
