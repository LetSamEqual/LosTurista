import "./blogPostTiles.css";
import { useEffect, useRef, useState } from "react";

const BlogPostTile = ({ blogPostData }) => {
  const backgroundImageStyle = {
    backgroundImage: `url("${blogPostData.tileImageBackground}")`,
    backgroundSize: "cover",
  };

  const backgroundColours = [
    "backgroundSalmon",
    "backgroundBlue",
    "backgroundLightBlue",
    "backgroundYellow",
    "backgroundGreen",
  ];

  function getBackgroundColour(potentialColours) {
    const rndmNumber = Math.floor(Math.random() * 5);
    return backgroundColours[rndmNumber];
  }

  const tileRef = useRef();

  const [tileIsVisible, setTileIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if(entry.isIntersecting){setTileIsVisible(true)}
    });
    observer.observe(tileRef.current);
  }, []);

  return (
    <div
      ref={tileRef}
      className={
        `tileContainer ${getBackgroundColour(backgroundColours)} ` +
        (tileIsVisible ? "visibleTile" : "hiddenTile")
      }
    >
      <div className="tileImageTopAndBottomBorder">
        <div className="tileImage" style={backgroundImageStyle}></div>
      </div>
      <div className="tileTextContainer">
        <div className="tileHeadingContainer">
          <h2 className="tileHeading">{blogPostData.tileTitle}</h2>
        </div>
        <div className="tileSubheaderContainer">
          <p className="tileSubheader">{blogPostData.tileSubheader}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPostTile;
