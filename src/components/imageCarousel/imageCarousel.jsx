import { useState } from "react";
import "./imageCarousel.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const ImageCarousel = ({ images }) => {
  const [carouselImage, setCarouselImage] = useState(0);
  const [imageIsFullscreen, setImageIsFullscreen] = useState(false);

  const showImageFullscreen = () => {
    setImageIsFullscreen(!imageIsFullscreen);
    console.log("clicked");
  };

  const imageCounterUp = () => {
    const imageArrayLength = images.length - 1;
    if (carouselImage < imageArrayLength) {
      setCarouselImage(carouselImage + 1);
    } else {
      setCarouselImage(0);
    }
  };

  const imageCounterDown = () => {
    if (carouselImage !== 0) {
      setCarouselImage(carouselImage - 1);
    } else {
      setCarouselImage(images.length - 1);
    }
  };

  return (
    <div className="imageCarouselContainer">
      <div
        className={
          "fullscreenImageContainer " +
          (imageIsFullscreen
            ? "fullscreenImageVisible"
            : "fullscreenImageHidden")
        }
      >
        <div
          className="exitFullscreenButton"
          onClick={() => {
            showImageFullscreen();
          }}
        >
          <strong>✕</strong>
        </div>
        <div
          onClick={() => imageCounterDown()}
          className="fullscreenPrevButton"
        >
        </div>
        <img
          className="fullscreenImages"
          key={images[carouselImage].key}
          src={images[carouselImage].url}
          alt={images[carouselImage].altText}
        />
        <div className="fullscreenWittyDescription">
          <ReactMarkdown className="fullscreenWittyDescriptionText">
            {images[carouselImage].wittyDescription}
          </ReactMarkdown>
        </div>
        <div onClick={() => imageCounterUp()} className="fullscreenNextButton">

        </div>
      </div>
      <div
        className="imageContainer"
        onClick={() => {
          showImageFullscreen();
        }}
      >
        <img
          className="images"
          key={images[carouselImage].key}
          src={images[carouselImage].url}
          alt={images[carouselImage].altText}
        />
      </div>
      <div className="wittyDescription">
        <ReactMarkdown className="wittyDescriptionText">
          {images[carouselImage].wittyDescription}
        </ReactMarkdown>
      </div>
      <div className="buttonsContainer">
        <button onClick={() => imageCounterDown()}>Back</button>
        <button onClick={() => imageCounterUp()}>Next</button>
      </div>
    </div>
  );
};

export default ImageCarousel;
