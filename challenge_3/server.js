const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser')
const app = express();
// tell express where to look for files
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//start server

app.post('/order', (req, res) => {
  console.log('post request!')
  console.log(req.body)
  res.status(200).send('Successfully stored.');

});

app.listen(3000, function () {
  console.log('Server started on port 3000')
});

