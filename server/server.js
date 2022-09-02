var express = require('express'); // used for routing
var app = express();

var cors = require('cors');
app.use(cors());

var bodyParser = require('body-parser');
const path = require('path');
app.use(bodyParser.urlencoded({ extended: true}));
app.use (bodyParser.json());

app.use(express.static(path.join(__dirname + '/../dist/my-app')));



var http = require('http').Server(app);
let server = http.listen(3000, function(){
    let host = server.address().address;
    let port = server.address().port;
    console.log("server running");
    console.log("host: " + host + " port: " + port);
});

app.post('/login', require('./router/postLogin'));
app.post('/loginafter', require('./router/postLoginAfter'));
