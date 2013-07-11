var express = require('express');

var path = require('path');

app = express();

app.configure(function(){
    app.use(express.bodyParser());
    app.use(express.static(path.join(__dirname + '/index', 'dist')));
});

var port = process.env.PORT || 5000;

app.listen(port);

app.get('/', function(req,res) {
  res.sendfile('app/views/index.html');
});

console.log('server started '+port);