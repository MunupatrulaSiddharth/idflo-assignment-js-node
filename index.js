const bodyParser = require('body-parser');
const url = require('url');
const path = require('path');
const express = require('express');

const app = express(); 

var http = require('http');


const port = 8000

app.get('/', (req, res) => res.send('Hello World!'));


app.get('/fetchCitiesForCountry/:country',function(req,res){
    var country = req.params.country;
     var out = {
         status : "500",
         message : ""
     };
     var cities = {
         India: ["Delhi", "Bangalore", "Bombay"],
                 USA: ["Chicago", "Lafayette", "New York City"],
                 China: ["Beijing", "Hong Kong", "Shanghai"]
     };
     for(var city in cities){
     if(city == country){
         res.send(cities[city]);
     }
     }
 });

 app.post('/submitForm', function (req, res) {
    var body = req.body;
    console.log(req);
    res.end();
});

app.listen(port, () => console.log("listening on port "+ port));




