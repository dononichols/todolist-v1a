//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res) {
    
    var today = new Date();
    var currentDay = today.getDay();

    if(currentDay === 5 || currentDay === 0) {
        res.write("<h1>Yay it's the weekend!</h1>");
    } else {
        res.write("<p>It's not the weekend</p>");
        res.write("<h1>Boo! I have to work!</h1>");
        res.send();
    }

});

app.listen(3000, function() {
    console.log("Server started on Port 3000");
});