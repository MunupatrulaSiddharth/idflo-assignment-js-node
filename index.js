const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express(); 

var http = require('http');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const port = 8000;
  
app.use(cors());


//API to fetch the cities based on the country selected by the user. The country is passed through the query params.
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

 //API to post the form data
 app.post('/submitForm', function (req, res) {
    var body = req.body;
//posting the data to the db if any db exists.
//based on the callback function of posting the data, the failure of the form submission can be shown as an error. Not handling that case as there is no error case here.
console.log(req.body);
    res.end();
});

app.listen(port, () => console.log("listening on port "+ port));




