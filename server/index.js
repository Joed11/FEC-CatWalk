const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const app = express();
const PORT = 4206;
const APIURL = 'http://3.137.191.193'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression())
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.set('Content-Encoding', 'gzip')
  res.status(200).send('./index.html')
});

app.get('/catwalk/:id', (req, res) => {
  console.log(req.params)
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

app.post('/catwalk/interactions', (req, res) => {
  console.log(req.body)
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

app.get('/catwalk/qa/questions/:id', (req, res) => {
  console.log(req.params)
  var id = req.params.id
  axios.get(`${APIURL}/qa/questions/?product_id=${id}&count=50`)
    .then((response) => {
      console.log('question get good')
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err)
      res.status(404).send('could not get the questions', err)
    })
});

app.post('/catwalk/qa/questions', (req, res) => {
  console.log(req.body)
  axios.post(`${APIURL}/qa/questions`, req.body)
    .then((response) => {
      console.log('question posted')
      res.send('question posted');
    })
    .catch((err) => {
      console.log(err)
      res.status(404).send('could not post the question', err)
    })
});

app.put('/catwalk/qa/questions/helpful/:id', (req, res) => {
  console.log(req.params)
  var questionId = req.params.id;
  return axios.put(`${APIURL}/qa/questions/${questionId}/helpful`)
    .then((response) => {
      console.log('question marked helpful')
      res.send('question marked helpful');
    })
    .catch((err) => {
      console.log(err)
      res.status(404).send('could not mark question helpful', err)
    })
});

app.put('/catwalk/qa/questions/report/:id', (req, res) => {
  console.log(req.params)
  var questionId = req.params.id;
  return axios.put(`${APIURL}/qa/questions/${questionId}/report`)
    .then((response) => {
      console.log('question reported')
      res.send('question reported');
    })
    .catch((err) => {
      console.log(err)
      res.status(404).send('could not report question', err)
    })
});

app.post('/catwalk/qa/answers/:id', (req, res) => {
  console.log(req.params)
  var questionId = req.params.id
  console.log(req.body)
  return axios.post(`${APIURL}/qa/questions/${questionId}/answers`, req.body)
    .then((response) => {
      console.log('answer posted')
      res.send('answer posted');
    })
    .catch((err) => {
      console.log(err)
      res.status(404).send('could not post the answer', err)
    })
});

app.put('/catwalk/qa/answers/helpful/:id', (req, res) => {
  console.log(req.params)
  var answerId = req.params.id;
  return axios.put(`${APIURL}/qa/answers/${answerId}/helpful`)
    .then((response) => {
      console.log('answer marked helpful')
      res.send('answer marked helpful');
    })
    .catch((err) => {
      console.log(err)
      res.status(404).send('could not mark answer helpful', err)
    })
});

app.put('/catwalk/qa/answers/report/:id', (req, res) => {
  console.log(req.params)
  var answerId = req.params.id;
  return axios.put(`${APIURL}/qa/answers/${answerId}/report`)
    .then((response) => {
      console.log('answer reported', response)
      res.send('answer reported');
    })
    .catch((err) => {
      console.log(err)
      res.status(404).send('could not report answer', err)
    })
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});