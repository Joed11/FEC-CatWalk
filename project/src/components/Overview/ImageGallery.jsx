import React, { useState } from 'react';

const ImageGallery = (props) => {
  console.log('ImageGallery', props);

  var photos = props.currentStyle.photos;
  var lastImg = false;
  var firstImg = true;

  const [mainImage, setMainImage] = useState(photos[0].url);

  var belongs = props.currentStyle.photos.find(
    (element) => element.url === mainImage
  );

  var imageCollection = props.currentStyle.photos.map((image, index) => {
    return (
      <div
        className="image-gallery-item"
        key={index}
        onClick={() => {
          setMainImage(image.url);
        }}
      >
        <img className="image-gallery-thumbnail" src={image.thumbnail_url} />
        <hr
          className="thumbnail-selection"
          style={
            mainImage === image.url ? { display: 'block' } : { display: 'none' }
          }
        ></hr>
      </div>
    );
  });

  const [midPoint, setMidPoint] = useState(
    Math.floor(imageCollection.length / 2)
  );

  console.log('Mid Point', midPoint);

  var renderImages = imageCollection.slice(midPoint - 2, midPoint + 2);

  return (
    <div className="image-gallery-main-image-box">
      <div className="image-gallery-thumbnail-column">
        <div
          className="image-gallery-scroll-up"
          onClick={() => {
            if (midPoint - 2 > 0) {
              setMidPoint(midPoint - 1);
              console.log('that');
            }
          }}
        >
          <img src="./attributes/keyboard-up-arrow.png" />
        </div>
        <div className="image-gallery-grid">{renderImages}</div>
        <div
          className="image-gallery-scroll-down"
          onClick={() => {
            if (midPoint + 2 < imageCollection.length) {
              setMidPoint(midPoint + 1);
              console.log('this');
            }
          }}
        >
          <img src="./attributes/keyboard-down-arrow.png" />
        </div>
      </div>
      <div
        onClick={() => {
          var imageIdx = photos.findIndex(
            (element) => element.url === mainImage
          );
          if (imageIdx === 0) {
            firstImg = true;
          } else {
            setMainImage(photos[imageIdx - 1].url);
            firstImg = false;
          }
          console.log(firstImg);
        }}
      >
        <img className="left-arrow" src="./attributes/left-arrow.png" />
      </div>
      <img
        className="image-gallery-main-image"
        src={
          belongs === undefined ? props.currentStyle.photos[0].url : mainImage
        }
      />
      <div
        onClick={() => {
          var imageIdx = photos.findIndex(
            (element) => element.url === mainImage
          );
          if (imageIdx + 2 > photos.length) {
            lastImg = true;
          } else {
            setMainImage(photos[imageIdx + 1].url);
          }
          console.log(lastImg);
        }}
      >
        <img className="right-arrow" src="./attributes/right-arrow.png" />
      </div>
    </div>
  );
};

export default ImageGallery;
