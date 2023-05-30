import "./blogPostTiles.css";

const BlogPostTile = ({ blogPostData }) => {
  console.log(blogPostData.id);

  return (
    <div className="tileContainer">
      <div className="tileImage"></div>
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
