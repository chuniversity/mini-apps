const express = require('express')
const app = express();
const bodyParser = require('body-parser')


//use apps
app.use(express.static('client'))
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());



app.listen(3000, function () {
  console.log('Server started on port 3000')
});

// conversion functions

var getData = function (data) {
  if (data[data.length - 1] === ';') {
    data = data.slice(0, -1)
  }
  var newData = JSON.parse(data)
  var keys = Object.keys(newData);
  keys.pop()
  var data2 = [];
  var recurse = function (newData) {
    var temp = Object.values(newData);
    temp.pop();
    data2.push(temp)
    if (newData.children) {
      newData.children.forEach(function (child) {
        recurse(child)
      })
    }
  }
  recurse(newData)
  data2.unshift(keys)
  return data2
}
var formatData = function (data) {
  var csv = '';
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].length; j++) {
      if (j === data[i].length - 1) {
        csv += data[i][j]
      } else {
        csv += data[i][j] + ',';
      }
    }
    csv += '<br>';
  }
  return csv
}



app.post('/form_submit', (req, res) => {
  console.log('post request received')
  var data = getData(req.body.post_json);
  var content = formatData(data)
  //response.end(JSON.stringify(content));
  res.send(`
  <head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- <link rel="stylesheet" href="Index.css" /> -->
  <title>CSV Report Generator</title>
</head>

<body>

  <header>
    <h1>CSV Report Generator</h1>
  </header>

  <div class="content">
    <form action="/form_submit" method="post">
      <label for="post_json">JSON Text:</label><br>
      <input type="text" id="post_json" name="post_json"><br>
      <input type="submit" value="Submit">

    </form>
  </div>
  <div class="content">
    ${content}
  </div>

  <script src="app.js"></script>
</body>

  `);
});