const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const conversion = require('./conversion.js');
const fs = require('fs');

//set storage
const upload = multer({ dest: 'uploads/' });

//use apps
const app = express();
app.use(express.static('client'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static(__dirname + 'uploads'));

//start server
app.listen(3000, function () {
  console.log('Server started on port 3000')
});

//get requests


app.get('/uploads', function (req, res) {
  res.sendFile('uploads/report.csv', { root: __dirname });
});


app.get('./uploads/report.csv', function (req, res) {
  res.sendFile(__dirname + "/uploads/" + "report.csv");

});

// post request

app.post('/form_submit', upload.single("post_json"), (req, res) => {
  var download = req.file.path;
  fs.readFile(req.file.path, function (err, data) {
    if (err) {
      console.log('error reading file')
    } else {
      var newData = conversion.getData(data);
      var formatted = conversion.formatData(newData);
      fs.writeFile('./uploads/report.csv', formatted, function (err, data) {
        if (err) {
          console.log('error writing file')
        }
      });
    };

    res.send("/uploads/report.csv");
  });
});



// optional

// `
//       <head>
//       <meta charset="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />

//       <!-- <link rel="stylesheet" href="Index.css" /> -->
//       <title>CSV Report Generator</title>
//     </head>

//     <body>

//       <header>
//         <h1>CSV Report Generator</h1>
//       </header>

//       <div class="content">
//         <form action="/form_submit" method="post">
//           <label for="post_json">JSON Text:</label><br>
//           <input type="text" id="post_json" name="post_json"><br>
//           <input type="submit" value="Submit">

//         </form>
//       </div>
//       <div class="content">
//         ${formatted}
//       </div>

//       <script src="app.js"></script>
//     </body>
//       `


