import "./landingPage.css";

import blogPosts from "../../blogPosts/blogPosts.json";
import BlogPostTile from "../blogPostTiles/blogPostTiles";

import { Link } from "react-router-dom";

const LandingPage = () => {
 

  return (
    <div className="landingPageContainer">
      <div className="headingImageContainer">
        <div className="blogIntroContainer">
          <h2 className="blogIntroTitle">
            To: All <br />
            Subject: Out of office
          </h2>
          <div className="blogIntroSubheaderContainer">
            <h3 className="blogIntroSubheader">Dear sir/madam</h3>
            <h3 className="blogIntroSubheader">
              Thank you so much for your enquiry. Unfortunately I’m unable to
              help with this matter as I’m currently out of office, on the other
              side of the world, attempting to avoid emails just like yours.
            </h3>
            <h3 className="blogIntroSubheader">
              Luckily the reception here is patchy, and my return date is
              impossible to say, so I don’t expect to reply soon or ever really.
            </h3>
            <h3 className="blogIntroSubheader">
              If you need assistance in the meantime, I suggest trying Google,
              or else turning it off then back on again.
            </h3>
            <h3 className="blogIntroSubheader">Warm regards,</h3>
            <h3 className="blogIntroSubheader">Sam Henderson</h3>
          </div>
        </div>
      </div>
      <div className="blogPostTilesContainer">
        {blogPosts.map((blogPostData) => {
          return (
            <Link to={`/${blogPostData.slug}`} className="tileLinks">
              <BlogPostTile
                key={blogPostData.key}
                blogPostData={blogPostData}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LandingPage;
