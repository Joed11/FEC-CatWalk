const axios = require('axios');
const express = require('express')
const ROUTER = express.Router();
const path = require('path');
const APIURL = process.env.API_URL;

ROUTER.get('/:id', (req, res) => {
  var id = req.params.id
  const params = [
    axios.get(`${APIURL}/products/${id}`),
    axios.get(`${APIURL}/products/${id}/styles`),
    axios.get(`${APIURL}/qa/questions/?product_id=${id}&count=50`),
    axios.get(`${APIURL}/reviews?product_id=${id}&count=50`),
    axios.get(`${APIURL}/reviews/meta?product_id=${id}`)
  ];

  let results = {};
  return axios.all(params)
    .then(axios.spread((primaryProduct, primaryProductStyles, primaryProductQuestions, primaryProductReviews, primaryProductReviewsNumbers) => {
      results = {
        'primaryProduct': primaryProduct.data,
        'primaryProductStyles': primaryProductStyles.data,
        'primaryProductQuestions': primaryProductQuestions.data,
        'primaryProductReviews': primaryProductReviews.data,
        'primaryProductReviewsNumbers': primaryProductReviewsNumbers.data
      };
      res.send(results);
    }))
    .catch((err) => {
      console.log(err)
      res.status(404).send('could not find product info')
    })
});

ROUTER.post('/interactions', (req, res) => {
  return axios.post(`${APIURL}/interactions`, req.body)
    .then((response) => {
      res.send('interaction posted');
    })
    .catch((err) => {
      console.log(err)
      res.status(404).send('could not get the questions', err)
    })
});

//Q&A ROUTES//

ROUTER.get('/qa/questions/:id', (req, res) => {
  var id = req.params.id
  axios.get(`${APIURL}/qa/questions/?product_id=${id}&count=50`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err)
      res.status(404).send('could not get the questions', err)
    })
});

ROUTER.post('/qa/questions', (req, res) => {
  axios.post(`${APIURL}/qa/questions`, req.body)
    .then((response) => {
      res.send('question posted');
    })
    .catch((err) => {
      console.log(err)
      res.status(404).send('could not post the question', err)
    })
});

ROUTER.put('/qa/questions/helpful/:id', (req, res) => {
  var questionId = req.params.id;
  return axios.put(`${APIURL}/qa/questions/${questionId}/helpful`)
    .then((response) => {
      res.send('question marked helpful');
    })
    .catch((err) => {
      console.log(err)
      res.status(404).send('could not mark question helpful', err)
    })
});

ROUTER.put('/qa/questions/report/:id', (req, res) => {
  var questionId = req.params.id;
  return axios.put(`${APIURL}/qa/questions/${questionId}/report`)
    .then((response) => {
      res.send('question reported');
    })
    .catch((err) => {
      console.log(err)
      res.status(404).send('could not report question', err)
    })
});

ROUTER.post('/qa/answers/:id', (req, res) => {
  var questionId = req.params.id
  return axios.post(`${APIURL}/qa/questions/${questionId}/answers`, req.body)
    .then((response) => {
      res.send('answer posted');
    })
    .catch((err) => {
      console.log(err)
      res.status(404).send('could not post the answer', err)
    })
});

ROUTER.put('/qa/answers/helpful/:id', (req, res) => {
  var answerId = req.params.id;
  return axios.put(`${APIURL}/qa/answers/${answerId}/helpful`)
    .then((response) => {
      res.send('answer marked helpful');
    })
    .catch((err) => {
      console.log(err)
      res.status(404).send('could not mark answer helpful', err)
    })
});

ROUTER.put('/qa/answers/report/:id', (req, res) => {
  var answerId = req.params.id;
  return axios.put(`${APIURL}/qa/answers/${answerId}/report`)
    .then((response) => {
      res.send('answer reported');
    })
    .catch((err) => {
      console.log(err)
      res.status(404).send('could not report answer', err)
    })
});

module.exports = ROUTER;