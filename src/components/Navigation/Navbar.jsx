import React from 'react';
import axios from 'axios';
import '../../../dist/stylesheets/NavbarStyles.css';

var Navbar = (props) => {
  return (
      <div className="navbar">
        <p className="navbar-header">TEAM ATLANTIC COMPASS</p>
        <div className="navbar-searchbar-container">
         <input className="navbar-searchbar" aria-label="searchbar" type="text" onKeyPress={(e)=>changeProduct(e, props)}>
        </input>
        <img className="navbar-searchbar-symbol" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACVUlEQVRYhb2WTWtTQRiFnwlZiAsRKSWULqR0IVK6CEEtSA0uimhBRH+FuHDlwn8gLsWFP6G4iEFbKBJsqRAEFRciUlxYxCpSuvOLfhwXkzSXN5PcSe6tB+5ihvc958ydueeOIwKSJoF54CwwCZwAjgDbwDrQBJ455z7G8EVD0iVJq4rHmqS5PIRLkp4OIGxRkzQ6rHhZ0tcM4m18kTSdpueMeAVoAMdM3T6wAtSBt8AP4A8wBpwBrgOzAf5t4IJz7n3MykuSvgVW8lzSVER/RVIz0L8haSTGwGKg+a6k1N4ER1HSgwDPQlrjfKDpTrRyN9/DAF9oiw4a7KurD7LyAF9R0hvDudyr+LQp/Cvp5NDqHd7zhndP0ritK+ATLoknzrnPWQ04517iv5ik1uWQgRkzV8sq3ofLalHAZ3sSr3M0YLmsFgX8jyWJzRwNfDfj4yEDFvs5GkjlLuDjMomxHAVLZrwVMrBu5so5GrBcH0IGmmbuWo4GrprxaleFpFMmMH6HAmNQSDpneH9Ksn/Zg+I1U/w4o3ghEO+P+jXMqRu3Mhi4H+C7kdZUC2T37QGFC5LuBcTbW1Dt1zwqf42yqEuaiBCfktToId7ThL2STQMv6E7HXWAJfyV7h0+4Ij4zKvjTfpFwsFn8Aq4451b6rWQjZSVZkbodI5IW/oOJ/qEnaVbSsvyBTMOe/L3yZos8Bg3X10HHyDj+MjEDTNA5I1vAJ+AVsOSc22zVV4FF4GgK9W6M/lCQVI14EzuHZiDSRONQDaSYSD+EOZooy4fUTutptMX/AWZas76rEIz3AAAAAElFTkSuQmCC' alt='magnifying-glass'/>
        </div>
      </div>
    );
}

export default Navbar;

var changeProduct = (e, props) => {
  if (e.key === 'Enter') {
    var id = parseInt(e.target.value)
    if (id !== NaN) {
      return axios
        .get(`/catwalk/${id}`)
        .then((response) => {
          console.log(response)
          const newData = response.data;
          const styleData = newData.primaryProductStyles.results
          styleData.forEach((style) => {
            style.photos.forEach((photo) => {
              if (photo.thumbnail_url === null) {
                photo.thumbnail_url = '../../dist/attributes/no_img.jpg';
              }
              if (photo.url === null) {
                photo.url = '../../dist/attributes/no_img.jpg';
              }
            })
          })
          props.updatePrimaryProduct(newData.primaryProduct);
          props.updateQuestions(newData.primaryProductQuestions.results);
          props.updateStyles(newData.primaryProductStyles.results);
          props.updateCurrentStyle(newData.primaryProductStyles.results[0]);
          props.updateReviewsList(newData.primaryProductReviews.results);
          props.updateReviewsData(newData.primaryProductReviewsNumbers);
        })
        .catch((err) => {
          console.log('error changing the product', err);
        });
    }
  }
}