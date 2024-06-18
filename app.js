var express = require('express');
var app = express();

const path = require('path')

//Setting view engine
app.set('view engine', 'ejs');

//Serving static files from public dir
app.use(express.static(path.join(__dirname, 'public')))

//Added Routes
app.get('/', function (req, res) {
  //res.send('Hello World!');
  res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});
  
app.get('/books', (req, res) => {
    res.render('books');
});

app.listen(3000, function () {
  console.log('Assignment1 on port 3000!');
});