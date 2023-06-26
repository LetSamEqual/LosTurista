import "./landingPage.css";

import blogPosts from "../../blogPosts/blogPosts.json";
import BlogPostTile from "../blogPostTiles/blogPostTiles";

import { Link } from "react-router-dom";
import { useState } from "react";
import ItineraryPage from "../itineraryPage/itineraryPage";
const LandingPage = () => {
  const [emailIsOpen, setEmailIsOpen] = useState(false);
  const [itineraryIsVisible, setItineraryIsVisible] = useState(false);
  const [tilesAreVisible, setTilesAreVisible] = useState(true);

  const showEmail = () => {
    setEmailIsOpen(!emailIsOpen);
  };

  const showItinerary = () => {
    if (!itineraryIsVisible) {
      setItineraryIsVisible(!itineraryIsVisible);
      setTilesAreVisible(!tilesAreVisible);
      console.log(itineraryIsVisible);
      console.log(tilesAreVisible);
    } else {
      return;
    }
  };

  const showBlogTiles = () => {
    if (!tilesAreVisible) {
      setItineraryIsVisible(!itineraryIsVisible);
      setTilesAreVisible(!tilesAreVisible);
      console.log(itineraryIsVisible);
      console.log(tilesAreVisible);
    } else {
      return;
    }
  };

  return (
    <div className="landingPageContainer">
      <div className="headingImageContainer">
        <div
          className={
            "blogIntroContainer " +
            (emailIsOpen ? "introContainerOpen" : "introContainerClosed")
          }
          onClick={() => showEmail()}
        >
          <h2 className="newMessage">New message</h2>
          <h2 className="blogIntroTitle">Subject: Out of office</h2>
          <h3 className={emailIsOpen ? "clickToReadHidden" : "clickToRead"}>
            Click to read
          </h3>
          <div
            className={
              "blogIntroSubheaderContainer " +
              (emailIsOpen ? "emailOpen" : "emailClosed")
            }
          >
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
      <div>
        <h2 className="blogBlurb">Across a desert, over a waterfall, up a mountain and out of office, Sam ‘Scip’ Henderson is currently holding a map upside down, trying to figure out how he got here, where he’s supposed to go next and if, just maybe, there’s a reason to any of this. <br/><br/> The stories contained here are an account of his efforts.</h2>
      </div>
      <div className="blogOrTileButtonsContainer">
        <button
          className={
            "blogOrTileButtons " +
            (tilesAreVisible
              ? "showBlogButtonActive"
              : "showBlogButtonNotActive")
          }
          onClick={() => {
            showBlogTiles();
          }}
        >
          Follow the journey
        </button>
        <button
          className={
            "blogOrTileButtons " +
            (itineraryIsVisible
              ? "showItineraryButtonActive"
              : "showItineraryButtonNotActive")
          }
          onClick={() => {
            showItinerary();
          }}
        >
          See the plan
        </button>
      </div>
      <div
        className={itineraryIsVisible ? "itineraryVisible" : "itineraryHidden"}
      >
        <ItineraryPage />
      </div>
      <div
        className={
          "blogPostTilesContainer " +
          (tilesAreVisible ? "tilesVisible" : "tilesHidden")
        }
      >
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
