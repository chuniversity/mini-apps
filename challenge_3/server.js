const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser')
const model = require('./db/model');


const app = express();
// tell express where to look for files
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//start server

app.post('/order', (req, res) => {
  console.log('post request!')
  let data = req.body;

  model.insertOrder(data, (err, success) => {
    if (err) {
      res.status(400).send('Error inserting order')
    } else {
      res.status(200).send('Order Successfully submitted')
    }
  });
});

app.listen(3000, function () {
  console.log('Server started on port 3000')
});

