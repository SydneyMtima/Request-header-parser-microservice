//intialise project
//require('dotenv').config();
const express = require('express');
var app = express();
const PORT = 4000;
//ENABLE CORS
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));

app.use(express.static('public'));

app.get("/", function (req, res) {  
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami", function (req, res) {
    const ip = req.ip;
    const language = req.headers["accept-language"];
    const software = req.headers["user-agent"];
    res.json({ipaddress: ip, language: language, software: software});
    }
);

var listener = app.listen(PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});