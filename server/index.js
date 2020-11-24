require('dotenv').config();
const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const APP = express();
const PORT = process.env.PORT || 3005;
const APIURL = process.env.API_URL;

APP.use(bodyParser.json());
APP.use(bodyParser.urlencoded({ extended: true }));
APP.use(compression())
APP.use(express.static(path.join(__dirname, '../dist')));

APP.get('/', (req, res) => {
  res.set('Content-Encoding', 'gzip')
  res.status(200).send('./index.html')
});

APP.get('/catwalk/:id', (req, res) => {
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

APP.post('/catwalk/interactions', (req, res) => {
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

APP.get('/catwalk/qa/questions/:id', (req, res) => {
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

APP.post('/catwalk/qa/questions', (req, res) => {
  axios.post(`${APIURL}/qa/questions`, req.body)
    .then((response) => {
      res.send('question posted');
    })
    .catch((err) => {
      console.log(err)
      res.status(404).send('could not post the question', err)
    })
});

APP.put('/catwalk/qa/questions/helpful/:id', (req, res) => {
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

APP.put('/catwalk/qa/questions/report/:id', (req, res) => {
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

APP.post('/catwalk/qa/answers/:id', (req, res) => {
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

APP.put('/catwalk/qa/answers/helpful/:id', (req, res) => {
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

APP.put('/catwalk/qa/answers/report/:id', (req, res) => {
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

APP.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});