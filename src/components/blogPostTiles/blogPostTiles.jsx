import "./blogPostTiles.css";
import background from '/Users/sam/Documents/hobbyCode/React/losturista/src/photos/tileImages/pexels-mauricio-thomsen-3488382.jpg'


const BlogPostTile = ({ blogPostData }) => {

  const backgroundImageStyle = {
    backgroundImage: `url("${blogPostData.tileImageBackground}")`,
    backgroundSize: 'cover',
  }
  console.log(background);


  return (
    <div className="tileContainer">
      <div className="tileImage" style={backgroundImageStyle}></div>
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
