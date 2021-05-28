const express = require('express');
const mysql = require('mysql');

const app = express();


app.use(express.static('./client/dist/'));

app.listen(3000, function () {
  console.log('Server started on port 3000')
});