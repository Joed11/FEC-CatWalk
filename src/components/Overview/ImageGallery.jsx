import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import '../../../dist/stylesheets/OverviewStyles.css';

const ImageGallery = (props) => {
  console.log('ImageGallery', props);

  var photos = props.currentStyle.photos;

  const [mainImage, setMainImage] = useState(photos[0].url);
  const [midPoint, setMidPoint] = useState(3);
  const [expanded, setExpand] = useState(false);
  const [zoomed, setZoom] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [firstImg, setFirstImg] = useState(true);
  const [lastImg, setLastImg] = useState(false);

  useEffect(() => {
    setMainImage(photos[0].url);
    setFirstImg(true);
    setLastImg(false);
    setMidPoint(3);
  }, [props.currentStyle.style_id]);

  var imageCollection = props.currentStyle.photos.map((image, index) => {
    return (
      <div
        className="image-gallery-item"
        key={index}
        onClick={() => {
          setMainImage(image.url);
          if (index === 0) {
            setFirstImg(true);
            setLastImg(false);
          } else if (index === imageCollection.length - 1) {
            setLastImg(true);
            setFirstImg(false);
          } else {
            setFirstImg(false);
            setLastImg(false);
          }
        }}
      >
        <img
          className="image-gallery-thumbnail"
          src={image.thumbnail_url}
          alt="thumbnail"
          style={
            mainImage === image.url
              ? { border: '1px solid black', transform: 'translateX(5%)' }
              : { border: '0px' }
          }
        />
      </div>
    );
  });

  var renderImages = imageCollection.slice(midPoint - 3, midPoint + 3);

  return (
    <div className="image-gallery-main-box">
      <div className="image-gallery-thumbnail-column">
        <div
          className="image-gallery-scroll-up"
          onClick={() => {
            if (midPoint - 3 > 0) {
              setMidPoint(midPoint - 1);
            }
          }}
        >
          <img
            src="./attributes/keyboard-up-arrow.png"
            alt="up arrow"
            style={
              renderImages[0].key === imageCollection[0].key || expanded
                ? { visibility: 'hidden' }
                : { visibility: 'visible' }
            }
          />
        </div>
        <div className="image-gallery-grid">{renderImages}</div>
        <div
          className="image-gallery-scroll-down"
          onClick={() => {
            if (midPoint + 3 < imageCollection.length) {
              setMidPoint(midPoint + 1);
            }
          }}
        >
          <img
            src="./attributes/keyboard-down-arrow.png"
            alt="down arrow"
            style={
              renderImages[renderImages.length - 1].key ===
              imageCollection[imageCollection.length - 1].key || expanded
                ? { visibility: 'hidden' }
                : { visibility: 'visible' }
            }
          />
        </div>
      </div>
      <div
        className="left-arrow-box"
        onClick={() => {
          var imageIdx = photos.findIndex(
            (element) => element.url === mainImage
          );
          if (imageIdx - 1 === 0) {
            setMainImage(photos[imageIdx - 1].url);
            setFirstImg(true);
          } else {
            setMainImage(photos[imageIdx - 1].url);
            setFirstImg(false);
          }
          setLastImg(false);
          if (Number(renderImages[0].key) === imageIdx) {
            setMidPoint(midPoint - 1);
          }
        }}
      >
        <img
          className="left-arrow"
          src="./attributes/left-arrow.png"
          style={
            firstImg === true || zoomed
              ? { visibility: 'hidden' }
              : { visibility: 'visible' }
          }
          alt="left arrow"
        />
      </div>
      <div className="image-gallery-main-image-box">
        <img
          className="image-gallery-main-image"
          onClick={() => {
            if (!expanded) {
              $('.image-gallery-thumbnail-column').css('visibility', 'hidden');
              $('.image-gallery-main-image').css({
                'object-fit': 'contain',
                width: '90%',
                cursor: 'zoom-in',
                display: 'block',
                margin: 'auto',
              });
              $('.image-gallery-main-box').animate(
                {
                  width: '72vw',
                },
                1000
              );
              setExpand(true);
            }
            if (expanded && !zoomed) {
              $('.right-arrow-expand-box').css('visibility', 'hidden');
              $('.image-gallery-main-image').css({
                transform: 'scale(2.5)',
                cursor: 'zoom-out',
              });
              setZoom(true);
            } else if (expanded && zoomed) {
              $('.right-arrow-expand-box').css('visibility', 'visible');
              $('.image-gallery-main-image').css({
                transform: 'scale(1)',
                'object-fit': 'contain',
                width: '90%',
                cursor: 'zoom-in',
                display: 'block',
                margin: 'auto',
              });
              setZoom(false);
            }
          }}
          onMouseEnter={(e) => {
            if (expanded) {
              if (zoomed) {
                $('.image-gallery-main-image').css('cursor', 'zoom-out');
              } else {
                $('.image-gallery-main-image').css('cursor', 'zoom-in');
              }
            } else {
              $('.image-gallery-main-image').css('cursor', 'zoom-in');
            }
          }}
          onMouseLeave={() => {
            if (expanded) {
              $('.image-gallery-main-image').css('cursor', 'auto');
            }
          }}
          onMouseMove={(e) => {
            if (expanded && zoomed) {
              var x = coordinates.x - e.movementX;
              var y = coordinates.y - e.movementY;
              setCoordinates({ x: x, y: y });
              $('.image-gallery-main-image').css({
                transform: 'translate(' + x + 'px,' + y + 'px) scale(2.5)',
              });
            }
          }}
          src={mainImage}
          alt="product image"
        />
      </div>
      <div
        className="right-arrow-box"
        onClick={() => {
          if (lastImg === false) {
            var imageIdx = photos.findIndex(
              (element) => element.url === mainImage
            );
            if (imageIdx + 2 === photos.length) {
              setMainImage(photos[imageIdx + 1].url);
              setLastImg(true);
            } else {
              setMainImage(photos[imageIdx + 1].url);
              setFirstImg(false);
            }
          }
          if (Number(renderImages[5].key) === imageIdx) {
            setMidPoint(midPoint + 1);
          }
        }}
      >
        <img
          className="right-arrow"
          src="./attributes/right-arrow.png"
          style={
            lastImg === true || zoomed
              ? { visibility: 'hidden' }
              : { visibility: 'visible' }
          }
          alt="right arrow"
        />
      </div>
      <div
        className="image-gallery-expand"
        onClick={() => {
          if (!expanded) {
            $('.image-gallery-thumbnail-column').css('visibility', 'hidden');
            $('.image-gallery-main-image').css({
              'object-fit': 'contain',
              width: '90%',
              cursor: 'zoom-in',
              display: 'block',
              margin: 'auto',
            });
            $('.image-gallery-main-box').animate(
              {
                width: '72vw',
              },
              1000
            );
            setExpand(true);
          } else {
            $('.image-gallery-thumbnail-column').css('visibility', 'visible');
            $('.image-gallery-main-image').css({
              'object-fit': 'contain',
              width: '90%',
              cursor: 'zoom-in',
              display: 'block',
              margin: 'auto',
            });
            $('.image-gallery-main-box').animate(
              {
                display: 'flex',
                width: '100%',
                'z-index': '1',
              },
              1000
            );
            setExpand(false);
          }
        }}
      >
        <img
          className="expand-icon"
          src="./attributes/resize.png"
          alt="resize"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
