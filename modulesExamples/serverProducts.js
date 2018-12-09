var express = require('express');
var app = express();
var mongo = require("mongodb").MongoClient;
var ProductHandler = require('./myModules/ProductsHandler');

var server = app.listen(3000, function () {
    console.log('Server is running on port 3000');
});

mongo.connect("mongodb://localhost:27017", function (err, client) {
    if (err) {
        console.log("cant connect to server");
        return;
    }
    let db = client.db("teaching");
    let products = db.collection("products");

    let productHand = new ProductHandler(products);

    app.get("/showProducts", function (req, res) {
        function sendData(data){
            res.send(data);
        }
        productHand.showProducts(sendData);
    })


});
