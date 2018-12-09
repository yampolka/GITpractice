var express = require('express');
var app = express();

var server = app.listen(3000, function () {
    console.log('Server is running on port 3000');
});

var TaxCalculer = require('./myModules/TaxCalculer');
let calculer = new TaxCalculer();

app.get("/californiaTax",function (req,res) {
   let price =  req.query.price;
   let tax = calculer.calcCalifornia(price);
   res.send("your tax is "+tax);
});

app.get("/texasTax",function (req,res) {
    let price =  req.query.price;
    let tax = calculer.calcTexas(price);
    res.send("your tax is "+tax);
});