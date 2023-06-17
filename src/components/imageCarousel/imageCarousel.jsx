import { useState } from "react";
import "./imageCarousel.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const ImageCarousel = ({ images }) => {
  console.log(images);
  const [carouselImage, setCarouselImage] = useState(0);
  console.log(carouselImage);

  const imageCounterUp = () => {
    const imageArrayLength = images.length - 1
    if (carouselImage < imageArrayLength) {
      setCarouselImage(carouselImage + 1);
      console.log(carouselImage);
    } else {
      setCarouselImage(0);
    }
  };

  const imageCounterDown = () => {
    if (carouselImage !== 0) {
      setCarouselImage(carouselImage - 1);
      console.log(carouselImage);
    } else {
      setCarouselImage(images.length - 1);
    }
  };

  console.log(images.length)

  return (
    <div className="imageCarouselContainer">
      <div className="imageContainer">
        <img
          className="images"
          key={images[carouselImage].key}
          src={images[carouselImage].url}
          alt={images[carouselImage].altText}
        />
      </div>
      <div  className="wittyDescription">
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
