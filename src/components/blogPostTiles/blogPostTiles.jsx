import "./blogPostTiles.css";

const BlogPostTile = ({ blogPostData }) => {
  const backgroundImageStyle = {
    backgroundImage: `url("${blogPostData.tileImageBackground}")`,
    backgroundSize: "cover",
  };

  const backgroundColours = ["backgroundSalmon", "backgroundBlue", "backgroundLightBlue", "backgroundYellow", "backgroundGreen"];

  function getBackgroundColour(potentialColours) {
    const rndmNumber = Math.floor(Math.random() * 5);
    return backgroundColours[rndmNumber]
  }

  return (
    <div className={`tileContainer ${getBackgroundColour(backgroundColours)}`} >
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
