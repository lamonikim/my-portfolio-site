// to load modules
var express = require('express');
var app = express();
// to render files
app.use(express.static('public'));
// port that will be used to run the sites
app.listen(8080);
app.get('/', function (req, res) {
    res.render('pages/index');
});