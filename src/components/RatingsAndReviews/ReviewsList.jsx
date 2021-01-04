import React from 'react';
import IndividualReviews from './IndividualReviews.jsx';
import ReviewsBreakDown from './ReviewsBreakDown.jsx';
import axios from 'axios';
import AddReviewModalContainer from '../../containers/RatingsAndReviews/AddReviewModalContainer.js';
import ModalTemplate from '../QuestionsAndAnswers/ModalTemplate/ModalTemplate';
import '../../../dist/stylesheets/RatingsAndReviews.css';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 2,
      isOpen: false,
    };
    this.moreReviewsButton = this.moreReviewsButton.bind(this);
    this.changeSort = this.changeSort.bind(this);
  }

  moreReviewsButton() {
    let newCount = this.state.count + 2;
    this.setState({
      count: newCount,
    });
  }

  buildIndividualReviews(counter) {
    var returner = [];
    for (let i = 0; i < counter; i++) {
      if (!this.props.reviews[i]) {
        break;
      }
      returner.push(
        <IndividualReviews
          reviewId={this.props.reviews[i]}
          key={this.props.reviews[i].review_id}
        />
      );
    }
    return returner;
  }

  changeSort(event) {
    let newValue = event.target.value;
    return axios
      .get(
        `http://18.224.37.110/reviews?product_id=${this.props.primaryProduct.id}&sort=${newValue}`
      )
      .then((res) => {
        // console.log(res);
        this.props.updateReviewsList(res.data.results);
      })
      .catch((err) => {
        console.log(`this was the ${err}`);
      });
  }

  render() {
    return (
      <div className='review-list'>
        <div className='review-list-sort'>
          {this.props.reviews.length} reviews, sorted by
          <select
          id="set-the-sort"
            className='sort-changer'
            defaultValue='relevance'
            onChange={(e) => {
              return this.changeSort(e);
            }}
          >
          <label for="set-the-sort">set the sorting patter</label>
            <option id="relevance" value='relevance'>relevance</option>
            <label for="relevance">sort by relevance</label>
            <option id="helpfulness" value='helpfulness'>helpfulness</option>
            <label for="helpfulness">sort by helpfulness</label>
            <option id="newest" value='newest'>newest</option>
            <label for="newest">sort by newest</label>
          </select>
        </div>
        {this.buildIndividualReviews(this.state.count)}
        <div className='review-buttons-adder'>
          <div
            className='more-review-button'
            type='button'
            onClick={this.moreReviewsButton}
          >
            MORE REVIEWS
          </div>
          <div
            className='add-review-button'
            type='button'
            onClick={() => {
              this.setState({ isOpen: true });
            }}
          >
            ADD A REVIEW +
          </div>
          <ModalTemplate
            open={this.state.isOpen}
            onClose={() => {
              this.setState({ isOpen: false });
            }}
          >
            <AddReviewModalContainer
              productName={this.props.primaryProduct.name}
              productID={this.props.primaryProduct.id}
            />
          </ModalTemplate>
        </div>
      </div>
    );
  }
}

ReviewsList.prototypes = {};

export default ReviewsList;
