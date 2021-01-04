import React, { useState } from 'react';
import axios from 'axios';
import InteractionTracker from '../Utility/InteractionTracker';
import Rating from './AddReviewsStars';
import '../../../dist/stylesheets/RatingsAndReviews.css';
import CharacteristicsForm from './CharacteristicsForm.jsx'

var AddReviewsModal = (props) => {
  let imagesArr = [];
  let characteristics = [];
  for (let key in props.primaryProductMetadata.characteristics) {
    characteristics.push(key);
  }
  let characteristicsRadio = characteristics.map((value) => {
    return (
      <div>
        <CharacteristicsForm
          characteristics={value}
          key={value.concat('keys')}
        />
      </div>
    );
  });

  return (
    <div className='Add-Review-Modal'>
      <p className='modal-header'>
        Submit your Review, for a {props.productName}!
      </p>
      <form id='submit-answer-form'>
        <label htmlFor='Reviews-Summary'>YOUR SUMMARY:</label>
        <br></br>
        <textarea
          type='text'
          id='Reviews-Summary'
          name='Reviews-Summary'
          maxLength='60'
          placeholder='Your review summary...'
          className='Reviews-Summary'
          required
        ></textarea>
        <br></br>
        <label htmlFor='Reviews-Body'>YOUR BODY:</label>
        <br></br>
        <textarea
          type='text'
          id='Reviews-Body'
          name='Reviews-Body'
          maxLength='1000'
          minLength='50'
          placeholder='Your review body...'
          className='Reviews-Body'
          required
        ></textarea>
        <br></br>
        <div>
          Would you recommend this product?
          <select id='recommends'>
            <option value='yes'>YES</option>
            <option value='no'>NO</option>
          </select>
        </div>
        <br></br>
        <div>
          How Would You Rate It? (Please Make Sure To Click!)
          <Rating />
        </div>
        <br></br>
        <label htmlFor='Reviews-nickname'>WHAT IS YOUR NICKNAME*:</label>
        <br></br>
        <input
          type='text'
          id='Reviews-nickname'
          name='Reviews-nickname'
          maxLength='60'
          placeholder='Example: jack543!'
          required
        ></input>
        <br></br>
        <p className='modal-privacy-warning'>
          For privacy reasons, do not use your full name.
        </p>
        <label htmlFor='Reviews-email'>YOUR E-MAIL*:</label>
        <br></br>
        <input
          type='text'
          id='Reviews-email'
          name='Reviews-email'
          maxLength='60'
          placeholder='Example: jack@email.com'
          required
        ></input>
        <br></br>
        <p className='modal-email-warning'>
          For authentication purposes only, you will not recieve any emails from
          us
        </p>
        <label htmlFor='Review-Photos'>UPLOAD PHOTOS</label>
        <br></br>
        <input
          type='text'
          id='photo-upload'
          name='photo-upload'
          placeholder='Post a link to your image here!'
        ></input>
        <br></br>
        <button
          onClick={() => {
            let url = document.getElementById('photo-upload').value;
            imagesArr.push(url);
            console.log(imagesArr);
          }}
        >
          Submit Photo
        </button>
          {/* {characteristicsRadio} */}
        <div
          className='photo-upload-preview-container'
          id='photo-upload-preview-container'
        ></div>
        <button
          onClick={() => {
            imagesArr = [];
          }}
        >
          CLEAR PHOTOS
        </button>
        <br></br>
        <br></br>
        <InteractionTracker
          widget='RatingsAndReviews'
          element='Submit-answer'
          render={({ postInteraction }) => (
            <input
              className='Reviews-Answers-Submit'
              type='submit'
              value='SUBMIT'
              onClick={(e) => {
                e.preventDefault();
                if (checkVaild()) {
                  handleSubmit(props.productID, imagesArr, characteristics);
                  postInteraction();
                  onClose();
                }
              }}
            ></input>
          )}
        />
      </form>
    </div>
  );
};

let handleSubmit = (productId, images, characteristics) => {
  let sentJSON = {};
  sentJSON.product_id = productId;
  sentJSON.rating = document.getElementById('currentRating').innerHTML;
  sentJSON.summary = document.getElementById('Reviews-Summary').value;
  sentJSON.body = document.getElementById('Reviews-Body').value;
  let checkRecommend = getElementById('recommends');
  if (checkRecommend === 'yes') {
    let recommend = true;
  }
  if (checkRecommend === 'no') {
    let recommend = false;
  }
  sentJSON.recommend = recommend;
  sentJSON.name = document.getElementById('Reviews-nickname').value;
  sentJSON.email = document.getElementById('Reviews-email').value;
  console.log(sentJSON);
  sentJSON.characteristics = {};
  for (let i = 0; i < characteristics.length; i++) {
    sentJSON.characteristics[characteristics[i]] = document.getElementById();
  }

  axios.post(`http://18.224.37.110/reviews`, sentJSON);
};

let checkVaild = () => {
  var body = document.getElementById('Reviews-Body').value;
  var nickname = document.getElementById('Reviews-nickname').value;
  var email = document.getElementById('Reviews-email').value;

  if (body.length < 50) {
    alert('Your review body must be between 50 and 1000 characters');
    return false;
  }

  if (nickname.length <= 0) {
    alert('You must enter the following: Nickname');
    return false;
  }
  if (email.length <= 0) {
    alert('You must enter the following: E-mail Address');
    return false;
  }
  if (!validateEmail(email)) {
    alert('Please enter a valid E-mail Address.');
    return false;
  }
  return true;
};

let validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};



AddReviewsModal.prototypes = {};
export default AddReviewsModal;
