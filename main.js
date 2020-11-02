const csv = require('csv-parser');
const fs = require('fs');
const results = [];

const Car = [];
const Horsepower = [];
const Weight = [];
const Model = [];
const Origin = []

fs.createReadStream('cars.csv')
    .pipe(csv({}))
    .on('data' , (data) => results.push(data))
    .on('end' , () => {
        for (var j = 0; j < results.length; j++){

           
            
            Car.push(results[j].Car);
            Horsepower.push(results[j].Horsepower);
            Weight.push(results[j].Weight);
            Model.push(results[j].Model);
            Origin.push(results[j].Origin);
                  
        }
    })


var express = require('express');
var app     = express();


app.set('view engine', 'ejs');
app.get('/', function(req, res) {

    // Handle file reading in here and return object
    res.render('index', {results: results}); //where object is the obj is the object holding the arrays
});

app.listen(3000 , function() {
  console.log('Server running at http://localhost:3000/');
});
    