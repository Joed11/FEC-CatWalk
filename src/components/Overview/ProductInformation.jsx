import React from 'react';
import StarRating from '../StarRatingLogic.jsx';
import '../../../dist/stylesheets/OverviewStyles.css';

const ProductInformation = (props) => {
  // console.log('Product Information', props);

  if (props.currentStyle.sale_price === '0') {
    var price = <p className="price">${props.currentStyle.original_price}</p>;
  } else {
    var price = (
      <div>
        <p className="sale-price">
          ${props.currentStyle.sale_price}
          <span> </span>
          <span className="price">
            <strike>${props.currentStyle.original_price}</strike>
          </span>
        </p>
      </div>
    );
  }

  var rating = 0;
  var count = 0;
  for (var i in props.productMetaData.ratings) {
    rating += i * props.productMetaData.ratings[i];
    count += props.productMetaData.ratings[i];
  }

  rating = Math.floor((rating / count) * 100) / 100;

  return (
    <div className="product-information-box" >
      <div className="product-information-star-review-box" style={props.reviews.length === 0 ? {visibility: 'hidden'} : {visibility: 'visible'}}>
        <StarRating number={rating} />
        <div className='product-information-review'>
          <a href="#start-of-ratings">
            Read all {props.reviews.length} Reviews
          </a>
        </div>
      </div>
      <p className="product-category">{props.primaryProduct.category}</p>
      <p className="product-name">{props.primaryProduct.name}</p>
      {price}
      <p className="product-description">{props.primaryProduct.description}</p>
    </div>
  );
};

export default ProductInformation;
