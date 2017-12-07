var express = require('express'),
  bodyParser = require('body-parser'),
  multer = require('multer');

var upload = multer(); // for parsing multipart/form-data
const app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.all("*", upload.array(), function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", '*');
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Accept, Origin, Content-Type");
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

require("./routes/user").setup(app);

app.get('/', function (req, res) {
  res.send('Welcome to home page');
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res) {
  res.send('what???', 404);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
