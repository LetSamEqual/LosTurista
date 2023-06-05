import "./blogPostTiles.css";

const BlogPostTile = ({ blogPostData }) => {
  const backgroundImageStyle = {
    backgroundImage: `url("${blogPostData.tileImageBackground}")`,
    backgroundSize: "cover",
  };

  return (
    <div className="tileContainer">
      <div className="tileImage" style={backgroundImageStyle}>
        <img
          src={blogPostData.tileImageBackground}
          alt={blogPostData.tileImageBackgroundAlt}
          className="tileThumbnail"
        />
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
