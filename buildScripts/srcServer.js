var express = require("express");
var app = express();

var path = require("path");
var port = 3000;

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port);