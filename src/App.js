import React, { useState, useEffect } from "react";
import axios from 'axios';
import NavbarContainer from './containers/Navigation/NavbarContainer.js';
import Overview from './components/Overview/Overview.jsx';
import RatingsAndReviews from './components/RatingsAndReviews/RatingsAndReviews.jsx';
import QuestionsAndAnswersWidgetContainer from './containers/QandA/QuestionsAndAnswersWidgetContainer.js';

function App(props) {
  console.log('productID', props.productID)
  const { productID } = props;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`/catwalk/${productID}`)
      .then((response) => {
        const newData = response.data;
        const styleData = newData.primaryProductStyles.results
        styleData.forEach((style) => {
          style.photos.forEach((photo) => {
            if (photo.thumbnail_url === null) {
              photo.thumbnail_url = 'https://www.iphonetechnicians.com/wp-content/uploads/2020/10/image-coming-soon-placeholder.png';
            }
            if (photo.url === null) {
              photo.url = 'https://www.iphonetechnicians.com/wp-content/uploads/2020/10/image-coming-soon-placeholder.png';
            }
          })
        })
        props.updatePrimaryProduct(newData.primaryProduct);
        props.updateQuestions(newData.primaryProductQuestions.results);
        props.updateStyles(styleData);
        props.updateCurrentStyle(styleData[0]);
        props.updateReviewsList(newData.primaryProductReviews.results);
        props.updateReviewsData(newData.primaryProductReviewsNumbers);
      })
      .then(()=> {
        setIsLoading(false);
      })
      .catch((err) => {
        console.log('error changing the product', err);
      });

  }, [productID])

  if (isLoading) {
    return (
      <div>LOADING</div>
    )
  }

  return (
    <div>
      <NavbarContainer/>
      <Overview/>
      <QuestionsAndAnswersWidgetContainer/>
      <RatingsAndReviews/>
    </div>
  )
}

export default App;